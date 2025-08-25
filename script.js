// Sidebar content switching
function showContent(type) {
  const content = document.getElementById('mainContent');
  let html = "";

  // Common welcome message
  const welcomeHtml = `
    <h3 style="text-align:center; color: rgb(121, 209, 244); font-size: 30px; ">
      Welcome to Pippin Assets
    </h3>
  `;

  switch (type) {
    case 'user':
      html = `
        ${welcomeHtml}

        <!-- Create Button -->
        <div style="text-align: center;">
      <button id="createBtn"
          style="padding: 10px 20px; font-size: 16px;
                 background-color: rgba(144, 244, 121, 1); color: white;
                 border: none; border-radius: 8px; cursor: pointer;">
    Create New User
  </button>
</div>

        <div style="text-align:center; font-family: Arial, sans-serif;">
          <h3 style="color: rgb(121, 209, 244); margin-bottom: 20px; font-size: 28px;">User Details</h3>
          <div style="margin: 10px;">
            <label for="empNo" style="font-size: 16px; margin-right: 10px;">Employee No</label>
            <input id="empNo" type="text" placeholder="Enter Employee No"
                   style="padding: 10px; font-size: 16px; width: 250px; border-radius: 8px; border: 1px solid #ccc;">
          </div>
      <label for="empNo" style="font-size: 16px; margin-right: 10px;">Employee Name</label>
            <input id="empname" type="text" placeholder="Enter Employee Name"
                   style="padding: 10px; font-size: 16px; width: 250px; border-radius: 8px; border: 1px solid #ccc;">
          </div>

          <div style="text-align:center; font-family: Arial, sans-serif;">
          <button id="submitBtn"
                  style="margin-top: 15px; padding: 10px 20px; font-size: 16px;
                         background-color: rgba(232, 121, 244, 1); color: white;
                         border: none; border-radius: 8px; cursor: pointer;">
            Submit
          </button>
          <p id="resultMsg" style="margin-top: 20px; font-size: 18px; color: green;"></p>
        </div>
        </div>
      `;
      content.innerHTML = html;

      // Attach event listeners
      document.getElementById("submitBtn").addEventListener("click", submitUser);
      document.getElementById("createBtn").addEventListener("click", () => showContent("createUser"));
      break;

    case 'createUser':
      html = `
        ${welcomeHtml}

        <div style="text-align:center; font-family: Arial, sans-serif;">
          <h3 style="color: rgb(121, 209, 244); margin-bottom: 20px; font-size: 28px;">Create User</h3>

          <div style="display: flex; justify-content: left; gap: 30px; margin: 25px;">
          
          <div style="text-align: left;">
      <label for="newEmpNo">Employee No:</label><br>
      <input id="newEmpNo" type="text" placeholder="Enter Employee No:">
    </div>

    <div style="text-align: left;">
      <label for="empName">Employee Name:</label><br>
      <input id="empName" type="text" placeholder="Enter Employee Name:">
    </div>

  </div>
</div>


<!-- Container for all PCs -->
<div id="pc-container">
  <!-- PC Section -->
  <div class="pc-block" style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">
    <div style="display: flex; flex-direction: column;">
      <label>PC Type</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select PC Type --</option>
        <option value="Desktop">Desktop</option>
        <option value="Win_Laptop">Win Laptop</option>
        <option value="MAC_Laptop">MAC Laptop</option>
        <option value="Laptop">Laptop</option>
      </select>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>PC Assets ID</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>PC Serial Number</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Assigned Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Return Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Remarks</label>
      <textarea rows="1" placeholder="Remarks here..."
        style="padding: 8px; width: 250px; border-radius: 5px; border: 1px solid #ccc; resize: both;"></textarea>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>IT Name</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select Name --</option>
        <option value="Padmanabha V R">Padmanabha V R</option>
        <option value="Vijay_Kumar">Vijay Kumar S</option>
        <option value="Thatrakal_Suresh">Thatrakal Suresh</option>
        <option value="Karthikeyan">Karthikeyan P</option>
        <option value="Rajshekar">Rajshekar R</option>
      </select>
    </div>

    <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
      <button type="button" onclick="addPC()"
        style="padding: 8px 16px; background-color: green; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Add PC
      </button>

      <button type="button" onclick="removeBlock(this, 'pc-container', 'pc-block')"
  style="padding: 8px 16px; background-color: red; color: white; border: none; border-radius: 6px; cursor: pointer;">
  Remove
</button>
    </div>
  </div>
</div>

<!-- Container for all Monitors -->
<div id="monitor-container">
  <div class="monitor-block" style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">
    <div style="display: flex; flex-direction: column;">
      <label>Monitor</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select Monitor --</option>
        <option value="monitor-1">Monitor-1</option>
        <option value="monitor-2">Monitor-2</option>
        <option value="monitor-3">Monitor-3</option>
      </select>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>Monitor Assets ID</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>Monitor Serial Number</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Assigned Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Return Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Remarks</label>
      <textarea rows="1" placeholder="Enter remarks here..."
        style="padding: 8px; width: 250px; border-radius: 5px; border: 1px solid #ccc; resize: both;"></textarea>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>IT Name</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select Name --</option>
        <option value="Padmanabha V R">Padmanabha V R</option>
        <option value="Vijay_Kumar">Vijay Kumar S</option>
        <option value="Thatrakal_Suresh">Thatrakal Suresh</option>
        <option value="Karthikeyan">Karthikeyan P</option>
        <option value="Rajshekar">Rajshekar R</option>
      </select>
    </div>

    <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
      <button type="button" onclick="addMonitor()"
        style="padding: 8px 16px; background-color: green; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Add Monitor
      </button>

      <button type="button" onclick="removeBlock(this, 'monitor-container', 'monitor-block')"
  style="padding: 8px 16px; background-color: red; color: white; border: none; border-radius: 6px; cursor: pointer;">
  Remove
</button>
    </div>
  </div>
</div>

<!-- Container Headset -->
<div id="headset-container">
  <div class="headset-block" style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">
    <div style="display: flex; flex-direction: column;">
      <label>HeadSet</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select Headset --</option>
        <option value="Headset_Wired">Headset Wired</option>
        <option value="Headset_Wireless">Headset Wireless</option>
      </select>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>Headset Assets ID</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>Headset Serial Number</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Assigned Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Return Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Remarks</label>
      <textarea rows="1" placeholder="Enter remarks here..."
        style="padding: 8px; width: 250px; border-radius: 5px; border: 1px solid #ccc; resize: both;"></textarea>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>IT Name</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select Name --</option>
        <option value="Padmanabha V R">Padmanabha V R</option>
        <option value="Vijay_Kumar">Vijay Kumar S</option>
        <option value="Thatrakal_Suresh">Thatrakal Suresh</option>
        <option value="Karthikeyan">Karthikeyan P</option>
        <option value="Rajshekar">Rajshekar R</option>
      </select>
    </div>

    <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
      <button type="button" onclick="addHeadset()"
        style="padding: 8px 16px; background-color: green; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Add Headset
      </button>

      <button type="button" onclick="removeBlock(this, 'headset-container', 'headset-block')"
  style="padding: 8px 16px; background-color: red; color: white; border: none; border-radius: 6px; cursor: pointer;">
  Remove
</button>
    </div>
  </div>
</div>


<!-- Container Mouse -->
<div id="mouse-container">
  <div class="mouse-block" style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">
    <div style="display: flex; flex-direction: column;">
      <label>Mouse</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select Mouse --</option>
        <option value="Mouse_Wired">Mouse Wired</option>
        <option value="Mouse_Wireless">Mouse Wireless</option>
      </select>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>Mouse Assets ID</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>Mouse Serial Number</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Assigned Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Return Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Remarks</label>
      <textarea rows="1" placeholder="Enter remarks here..."
        style="padding: 8px; width: 250px; border-radius: 5px; border: 1px solid #ccc; resize: both;"></textarea>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>IT Name</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select Name --</option>
        <option value="Padmanabha V R">Padmanabha V R</option>
        <option value="Vijay_Kumar">Vijay Kumar S</option>
        <option value="Thatrakal_Suresh">Thatrakal Suresh</option>
        <option value="Karthikeyan">Karthikeyan P</option>
        <option value="Rajshekar">Rajshekar R</option>
      </select>
    </div>

    <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
      <button type="button" onclick="addMouse()"
        style="padding: 8px 16px; background-color: green; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Add Mouse
      </button>

      <button type="button" onclick="removeBlock(this, 'mouse-container', 'mouse-block')"
  style="padding: 8px 16px; background-color: red; color: white; border: none; border-radius: 6px; cursor: pointer;">
  Remove
</button>
    </div>
  </div>
</div>


<!-- Container Keyboard -->
<div id="keyboard-container">
  <div class="keyboard-block" style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">
    <div style="display: flex; flex-direction: column;">
      <label>Keyboard</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select Keyboard --</option>
        <option value="Keyboard_Wired">Keyboard Wired</option>
        <option value="Keyboard_Wireless">Keyboard Wireless</option>
      </select>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>Keyboard Assets ID</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>Keyboard Serial Number</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Assigned Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Return Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Remarks</label>
      <textarea rows="1" placeholder="Enter remarks here..."
        style="padding: 8px; width: 250px; border-radius: 5px; border: 1px solid #ccc; resize: both;"></textarea>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>IT Name</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select Name --</option>
        <option value="Padmanabha V R">Padmanabha V R</option>
        <option value="Vijay_Kumar">Vijay Kumar S</option>
        <option value="Thatrakal_Suresh">Thatrakal Suresh</option>
        <option value="Karthikeyan">Karthikeyan P</option>
        <option value="Rajshekar">Rajshekar R</option>
      </select>
    </div>

    <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
      <button type="button" onclick="addKeyboard()"
        style="padding: 8px 16px; background-color: green; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Add Keyboard
      </button>

      <button type="button" onclick="removeBlock(this, 'keyboard-container', 'keyboard-block')"
  style="padding: 8px 16px; background-color: red; color: white; border: none; border-radius: 6px; cursor: pointer;">
  Remove
</button>
    </div>
  </div>
</div>

<!-- Container USBCamera -->
<div id="usbcamera-container">
  <div class="usbcamera-block" style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">
    <div style="display: flex; flex-direction: column;">
      <label>USBCamera</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="USBCamera">USBCamera</option>
        </select>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>USBCamera Assets ID</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>USBCamera Serial Number</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Assigned Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Return Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Remarks</label>
      <textarea rows="1" placeholder="Enter remarks here..."
        style="padding: 8px; width: 250px; border-radius: 5px; border: 1px solid #ccc; resize: both;"></textarea>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>IT Name</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select Name --</option>
        <option value="Padmanabha V R">Padmanabha V R</option>
        <option value="Vijay_Kumar">Vijay Kumar S</option>
        <option value="Thatrakal_Suresh">Thatrakal Suresh</option>
        <option value="Karthikeyan">Karthikeyan P</option>
        <option value="Rajshekar">Rajshekar R</option>
      </select>
    </div>

    <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
      <button type="button" onclick="addUSBCamera()"
        style="padding: 8px 16px; background-color: green; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Add USBCamera 
      </button>

      <button type="button" onclick="removeBlock(this, 'usbcamera-container', 'usbcamera-block')"
  style="padding: 8px 16px; background-color: red; color: white; border: none; border-radius: 6px; cursor: pointer;">
  Remove
</button>
    </div>
  </div>
</div>


<!-- Container WIFI_Device -->
<div id="wifi_device-container">
  <div class="wifi_device-block" style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">
    <div style="display: flex; flex-direction: column;">
      <label>WIFI_Device</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="WIFI_Device">WIFI_Device</option>
      </select>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>WIFI_Device Assets ID</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>WIFI_Device Serial Number</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Assigned Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Return Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Remarks</label>
      <textarea rows="1" placeholder="Enter remarks here..."
        style="padding: 8px; width: 250px; border-radius: 5px; border: 1px solid #ccc; resize: both;"></textarea>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>IT Name</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select Name --</option>
        <option value="Padmanabha V R">Padmanabha V R</option>
        <option value="Vijay_Kumar">Vijay Kumar S</option>
        <option value="Thatrakal_Suresh">Thatrakal Suresh</option>
        <option value="Karthikeyan">Karthikeyan P</option>
        <option value="Rajshekar">Rajshekar R</option>
      </select>
    </div>

    <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
      <button type="button" onclick="addWIFI_Device()"
        style="padding: 8px 16px; background-color: green; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Add WIFI_Device
      </button>

      <button type="button" onclick="removeBlock(this, 'wifi_device-container', 'wifi_device-block')"
  style="padding: 8px 16px; background-color: red; color: white; border: none; border-radius: 6px; cursor: pointer;">
  Remove
</button>
    </div>
  </div>
</div>

<!-- Container Laptop_Bag -->
<div id="laptop_bag-container">
  <div class="laptop_bag-block" style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">
    <div style="display: flex; flex-direction: column;">
      <label>Laptop_Bag</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
      <option value="Laptop_Bag">Laptop_Bag</option>
      </select>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>Laptop_Bag Assets ID</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>Laptop_Bag Serial Number</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Assigned Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Return Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Remarks</label>
      <textarea rows="1" placeholder="Enter remarks here..."
        style="padding: 8px; width: 250px; border-radius: 5px; border: 1px solid #ccc; resize: both;"></textarea>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>IT Name</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select Name --</option>
        <option value="Padmanabha V R">Padmanabha V R</option>
        <option value="Vijay_Kumar">Vijay Kumar S</option>
        <option value="Thatrakal_Suresh">Thatrakal Suresh</option>
        <option value="Karthikeyan">Karthikeyan P</option>
        <option value="Rajshekar">Rajshekar R</option>
      </select>
    </div>

    <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
      <button type="button" onclick="addLaptop_Bag()"
        style="padding: 8px 16px; background-color: green; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Add Laptop_Bag
      </button>

      <button type="button" onclick="removeBlock(this, 'laptop_bag-container', 'laptop_bag-block')"
  style="padding: 8px 16px; background-color: red; color: white; border: none; border-radius: 6px; cursor: pointer;">
  Remove
</button>
    </div>
  </div>
</div>

<!-- Container UPS -->
<div id="ups-container">
  <div class="ups-block" style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">
    <div style="display: flex; flex-direction: column;">
      <label>UPS</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="UPS">UPS</option>
      </select>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>UPS Assets ID</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>UPS Serial Number</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Assigned Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Return Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Remarks</label>
      <textarea rows="1" placeholder="Enter remarks here..."
        style="padding: 8px; width: 250px; border-radius: 5px; border: 1px solid #ccc; resize: both;"></textarea>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>IT Name</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select Name --</option>
        <option value="Padmanabha V R">Padmanabha V R</option>
        <option value="Vijay_Kumar">Vijay Kumar S</option>
        <option value="Thatrakal_Suresh">Thatrakal Suresh</option>
        <option value="Karthikeyan">Karthikeyan P</option>
        <option value="Rajshekar">Rajshekar R</option>
      </select>
    </div>

    <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
      <button type="button" onclick="addUPS()"
        style="padding: 8px 16px; background-color: green; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Add UPS
      </button>

      <button type="button" onclick="removeBlock(this, 'ups-container', 'ups-block')"
  style="padding: 8px 16px; background-color: red; color: white; border: none; border-radius: 6px; cursor: pointer;">
  Remove
</button>
    </div>
  </div>
</div>

<!-- Save Button -->
<div style="text-align: center; margin-bottom: 20px;">
  <button id="saveUserBtn"
    style="margin-top: 15px; padding: 10px 20px; background-color: green; color: white; border: none; border-radius: 8px; cursor: pointer;">
    Save
  </button>
</div>
      `;
      content.innerHTML = html;

      document.getElementById("saveUserBtn").addEventListener("click", () => {
        alert("✅ User Created Successfully!");
        showContent("user"); // Go back to user details page
      });
      break;

    default:
      html = welcomeHtml;
      content.innerHTML = html;
  }
}

// Submit User function
function submitUser() {
  const empNo = document.getElementById("empNo").value.trim();
  const resultMsg = document.getElementById("resultMsg");

  if (!empNo) {
    resultMsg.style.color = "red";
    resultMsg.textContent = "❌ Please enter an Employee ID";
    return;
  }

  fetch("employees.json")
    .then(res => res.json())
    .then(data => {
      if (data[empNo]) {
        const details = data[empNo];
        resultMsg.style.color = "green";
        let detailsHtml = `<p>✅ Details for Employee ID: ${empNo}</p><ul>`;
        for (const [key, value] of Object.entries(details)) {
          detailsHtml += `<li><strong>${key}:</strong> ${value}</li>`;
        }
        detailsHtml += "</ul>";
        resultMsg.innerHTML = detailsHtml;
      } else {
        resultMsg.style.color = "red";
        resultMsg.textContent = "❌ No details found for this Employee ID.";
      }
    })
    .catch(err => {
      resultMsg.style.color = "red";
      resultMsg.textContent = "⚠️ Error fetching data.";
      console.error(err);
    });
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  showContent("user"); // default view
});

// Add PC
function addPC() {
  const container = document.getElementById("pc-container");
  const firstBlock = container.querySelector(".pc-block");
  const newBlock = firstBlock.cloneNode(true);

  // clear all inputs
  newBlock.querySelectorAll("input, select, textarea").forEach(el => el.value = "");
  container.appendChild(newBlock);
}

function addMonitor() {
  const container = document.getElementById("monitor-container");
  const firstBlock = container.querySelector(".monitor-block");
  const newBlock = firstBlock.cloneNode(true);

  newBlock.querySelectorAll("input, select, textarea").forEach(el => el.value = "");
  container.appendChild(newBlock);
}

function addHeadset() {
  const container = document.getElementById("headset-container");
  const firstBlock = container.querySelector(".headset-block");
  const newBlock = firstBlock.cloneNode(true);

  newBlock.querySelectorAll("input, select, textarea").forEach(el => el.value = "");
  container.appendChild(newBlock);
}

function addMouse() {
  const container = document.getElementById("mouse-container");
  const firstBlock = container.querySelector(".mouse-block");
  const newBlock = firstBlock.cloneNode(true);

  newBlock.querySelectorAll("input, select, textarea").forEach(el => el.value = "");
  container.appendChild(newBlock);
}

function addKeyboard() {
  const container = document.getElementById("keyboard-container");
  const firstBlock = container.querySelector(".keyboard-block");
  const newBlock = firstBlock.cloneNode(true);

  newBlock.querySelectorAll("input, select, textarea").forEach(el => el.value = "");
  container.appendChild(newBlock);
}

function addUSBCamera() {
  const container = document.getElementById("usbcamera-container");
  const firstBlock = container.querySelector(".usbcamera-block");
  const newBlock = firstBlock.cloneNode(true);

  newBlock.querySelectorAll("input, select, textarea").forEach(el => el.value = "");
  container.appendChild(newBlock);
}

function addWIFI_Device() {
  const container = document.getElementById("wifi_device-container");
  const firstBlock = container.querySelector(".wifi_device-block");
  const newBlock = firstBlock.cloneNode(true);

  newBlock.querySelectorAll("input, select, textarea").forEach(el => el.value = "");
  container.appendChild(newBlock);
}

function addLaptop_Bag() {
  const container = document.getElementById("laptop_bag-container");
  const firstBlock = container.querySelector(".laptop_bag-block");
  const newBlock = firstBlock.cloneNode(true);

  newBlock.querySelectorAll("input, select, textarea").forEach(el => el.value = "");
  container.appendChild(newBlock);
}

function addUPS() {
  const container = document.getElementById("ups-container");
  const firstBlock = container.querySelector(".ups-block");
  const newBlock = firstBlock.cloneNode(true);

  newBlock.querySelectorAll("input, select, textarea").forEach(el => el.value = "");
  container.appendChild(newBlock);
}


// ✅ Universal remove function
function removeBlock(button, containerId, blockClass) {
  const container = document.getElementById(containerId);
  const blocks = container.querySelectorAll("." + blockClass);
  const block = button.closest("." + blockClass);

  // Don’t allow deleting the first row
  if (block === blocks[0]) {
    alert("You cannot remove the first row.");
    return;
  }

  block.remove();
}