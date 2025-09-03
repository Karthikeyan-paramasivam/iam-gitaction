// sql.js
import express from "express";
import mysql from "mysql2/promise";

const app = express();
app.use(express.json());

// 🔹 Configure your Cloud SQL connection
const db = await mysql.createPool({
  host: "34.170.245.111",   // e.g. 127.0.0.1 if using Cloud SQL Proxy
  user: "root",         // e.g. root
  password: "0~CZ5fcp}*45Kqtq", // your SQL password
  database: "assets-database"      // your database name
});

// 🔹 API endpoint to save User + Assets
app.post("/api/saveUser", async (req, res) => {
  try {
    const { empNo, empName, pcs } = req.body;

    if (!empNo || !empName) {
      return res.status(400).json({ error: "Employee No and Name are required" });
    }

    // Save employee
    const [empResult] = await db.query(
      "INSERT INTO employees (emp_no, emp_name) VALUES (?, ?)",
      [empNo, empName]
    );
    const empId = empResult.insertId;

    // Save PCs (if provided)
    if (Array.isArray(pcs)) {
      for (const pc of pcs) {
        await db.query(
          `INSERT INTO pcs 
          (employee_id, type, assets_id, serial_number, assigned_date, return_date, remarks, it_name) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            empId,
            pc.type || null,
            pc.assetsId || null,
            pc.serial || null,
            pc.assignedDate || null,
            pc.returnDate || null,
            pc.remarks || null,
            pc.itName || null
          ]
        );
      }
    }

    res.json({ message: "✅ User and Assets saved successfully" });
  } catch (err) {
    console.error("❌ Database Error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// 🔹 Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://34.172.115.17:${3000}`);
});
