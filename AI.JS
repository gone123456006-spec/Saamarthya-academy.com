/* ===========================
   Saamarthya Academy - AI.js
   =========================== */

/* ---------- Students DB ---------- */
const students = {
  "SAH25009": { name: "Aditya Raj", class: "8", phone: "6206971640", email: "parent1@gmail.com", streak: 0, lastScan: null },
  "SAH25010": { name: "Shreyansh Kumar", class: "8", phone: "8340135190", email: "parent2@gmail.com", streak: 0, lastScan: null },
  "SAH25011": { name: "Aayush Kant", class: "8", phone: "7321852484", email: "Shwetarani62621@gmail.com", streak: 0, lastScan: null },
  "SAH25200": { name: "Shyam Kumar", class: "8", phone: "7321852484", email: "Shyam123456006@gmail.com", streak: 0, lastScan: null },



  "SAJ25013": { name: "Kritika Arya", class: "10", phone: "7870454422", email: "parent4@gmail.com", streak: 0, lastScan: null },
  "SAJ25012": { name: "Shweta Kumari", class: "10", phone: "8873238428", email: "parent5@gmail.com", streak: 0, lastScan: null },
  "SAJ25011": { name: "Divyanshu Kumar", class: "10", phone: "8789580780", email: "parent6@gmail.com", streak: 0, lastScan: null },
  "SAJ25016": { name: "Arnav", class: "10", phone: "9934490207", email: "parent7@gmail.com", streak: 0, lastScan: null },
  "SAJ25015": { name: "Dhruv Ranjan", class: "10", phone: "7979709595", email: "parent8@gmail.com", streak: 0, lastScan: null },
  "SAJ25014": { name: "Sonali Kumari", class: "10", phone: "8862991979", email: "dollydevi0108@gmail.com", streak: 0, lastScan: null },

  "SAN25008": { name: "Ashutosh Raj", class: "9", phone: "9905606885", email: "ajaybhagat1880@gmail.com", streak: 0, lastScan: null },
  "SAN25016": { name: "Satyam Kumar", class: "9", phone: "9472094162", email: "raybishwambhar851@gmail.com", streak: 0, lastScan: null },
  "SAN25012": { name: "Krish Raj", class: "9", phone: "9304998868", email: "ajeet74844@gmail.com", streak: 0, lastScan: null },
  "SAN25011": { name: "Manvi", class: "9", phone: "8989972932", email: "Mukeshkumar180075@gmail.com", streak: 0, lastScan: null },
  "SAN25015": { name: "Bharat Kumar Adarsh", class: "9", phone: "9122609590", email: "parent14@gmail.com", streak: 0, lastScan: null },
  "SAN25010": { name: "Tripti Kumari", class: "9", phone: "8789832449", email: "parent15@gmail.com", streak: 0, lastScan: null },
  "SAN25013": { name: "Anamika", class: "9", phone: "9508400448", email: "Sinha2nitesh@gmail.com", streak: 0, lastScan: null },
  "SAN25014": { name: "Saumya Chauhan", class: "9", phone: "6205053029", email: "Hmvishwajeetkumar2002@gmail.com", streak: 0, lastScan: null },
  "SAN25017": { name: "Kumari Kamya", class: "9", phone: "6204020655", email: "Shyam123456006@gmail.com", streak: 0, lastScan: null },
  "SAN25100": { name: "Vishwajeet Kumar ", class: "9", phone: "6204020655", email: "Hmvishwajeetkumar2002@gmail.com", streak: 0, lastScan: null },

  "SAE25045": { name: "Khushi Kumari", class: "11", phone: "8877949381", email: "Hmvishwajeetkumar2002@gmail.com", streak: 0, lastScan: null },
  "SAE25020": { name: "Saloni", class: "11", phone: "6204020655", email: "anjali.kumari@gmail.com", streak: 0, lastScan: null },
  "SAE25037": { name: "Janvi Srivastava", class: "11", phone: "9973320400", email: "anjali.kumari@gmail.com", streak: 0, lastScan: null },
  "SAE25039": { name: "Samiksha Srivastava", class: "11", phone: "765462851", email: "anjali.kumari@gmail.com", streak: 0, lastScan: null },
  "SAE25038": { name: "Saumya Raj", class: "11", phone: "9570419189", email: "anjali.kumari@gmail.com", streak: 0, lastScan: null },
  "SAE25022": { name: "Naina Kumari", class: "11", phone: "9234764044", email: "anjali.kumari@gmail.com", streak: 0, lastScan: null },
  "SAE25044": { name: "Vishal Athak", class: "11", phone: "7547870991", email: "anjali.kumari@gmail.com", streak: 0, lastScan: null },
  "SAE25040": { name: "Sunny Kumar", class: "11", phone: "7321987684", email: "anjali.kumari@gmail.com", streak: 0, lastScan: null },
  "SAE25030": { name: "Tanish Kumar", class: "11", phone: "9525201135", email: "anjali.kumari@gmail.com", streak: 0, lastScan: null },
  "SAE25026": { name: "Vijay Kumar", class: "11", phone: "7352103550", email: "anjali.kumari@gmail.com", streak: 0, lastScan: null },
  "SAE25028": { name: "Rishi Raj", class: "11", phone: "8757497670", email: "anjali.kumari@gmail.com", streak: 0, lastScan: null },
  "SAE25031": { name: "Aashmit Kumar", class: "11", phone: "6203666094", email: "anjali.kumari@gmail.com", streak: 0, lastScan: null },
  "SAE25029": { name: "Shivam Kumar", class: "11", phone: "9113310468", email: "anjali.kumari@gmail.com", streak: 0, lastScan: null },
  "SAE25019": { name: "Md. Isatehsanullah", class: "11", phone: "6299355373", email: "anjali.kumari@gmail.com", streak: 0, lastScan: null },
  "SAE25036": { name: "Md. Mojahid Hussain", class: "11", phone: "6203245651", email: "anjali.kumari@gmail.com", streak: 0, lastScan: null },
  "SAE25046": { name: "Suhani Kumari", class: "11", phone: "8638261845", email: "anjali.kumari@gmail.com", streak: 0, lastScan: null },
  "SAE25025": { name: "Kumari Shreya", class: "11", phone: "9835475671", email: "anjali.kumari@gmail.com", streak: 0, lastScan: null },
  "SAE25048": { name: "Durga Kumari", class: "11", phone: "9934727967", email: "anjali.kumari@gmail.com", streak: 0, lastScan: null },





};

/* ---------- Storage ---------- */
let attendance = JSON.parse(localStorage.getItem("attendance")) || {};
let attendanceHistory = JSON.parse(localStorage.getItem("attendanceHistory")) || [];

/* ---------- WebSocket (optional) ---------- */
let ws;
try {
  ws = new WebSocket("ws://localhost:3000");
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data || "{}");
    if (data.type === "attendance-update" && data.attendance) {
      attendance = data.attendance;
      localStorage.setItem("attendance", JSON.stringify(attendance));
      updateTable();
      updateDashboard();
      refreshCalendar();
    }
  };
} catch (e) {
  console.warn("WebSocket unavailable:", e);
}

/* ---------- Helpers ---------- */
function getToday() {
  const now = new Date();
  return now.toISOString().split("T")[0];
}
function getTimeString(date) {
  return new Date(date).toLocaleTimeString();
}

/* ---------- UI: Popup ---------- */
function showPopup(message, type = "info") {
  const popup = document.createElement("div");
  popup.innerText = message;
  popup.style.position = "fixed";
  popup.style.bottom = "20px";
  popup.style.left = "50%";
  popup.style.transform = "translateX(-50%)";
  popup.style.backgroundColor =
    type === "success" ? "#28a745" :
    type === "error" ? "#dc3545" :
    type === "warning" ? "#ff9800" : "#333";
  popup.style.color = "#fff";
  popup.style.padding = "10px 20px";
  popup.style.borderRadius = "8px";
  popup.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
  popup.style.zIndex = "9999";
  popup.style.opacity = "0";
  popup.style.transition = "opacity 0.3s";
  document.body.appendChild(popup);
  requestAnimationFrame(() => popup.style.opacity = "1");
  setTimeout(() => {
    popup.style.opacity = "0";
    setTimeout(() => popup.remove(), 300);
  }, 2200);
}

/* ---------- Confetti (simple) ---------- */
function celebrateScan() {
  const confetti = document.createElement("div");
  confetti.style.position = "fixed";
  confetti.style.top = "0";
  confetti.style.left = "50%";
  confetti.style.transform = "translateX(-50%)";
  confetti.style.width = "10px";
  confetti.style.height = "10px";
  confetti.style.backgroundColor = ["#FF3E4D","#FFC300","#28A745","#1E90FF"][Math.floor(Math.random()*4)];
  confetti.style.borderRadius = "50%";
  confetti.style.animation = "fall 1s ease-out forwards";
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 1000);
}

/* ---------- Voice ---------- */
function speakName(name) {
  try {
    window.speechSynthesis.cancel(); // prevent overlap
    const msg = new SpeechSynthesisUtterance(`${name} marked present`);
    window.speechSynthesis.speak(msg);
  } catch {}
}

/* ---------- Sounds ---------- */
function playScanSound() {
  const el = document.getElementById("scan-sound");
  if (el) { el.currentTime = 0; el.play().catch(()=>{}); }
}

/* ---------- Table Rendering ---------- */
function updateTable() {
  const tbody = document.getElementById("attendance-table");
  if (!tbody) return;
  const filterClass = (document.getElementById("class-filter")?.value) || "all";

  tbody.innerHTML = "";
  // Sort by time desc
  const entries = Object.entries(attendance).sort(
    (a,b) => new Date(b[1].date + " " + b[1].time) - new Date(a[1].date + " " + a[1].time)
  );

  for (const [id, row] of entries) {
    if (filterClass !== "all" && row.class !== filterClass) continue;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${id}</td>
      <td>${row.name}</td>
      <td>${row.class}</td>
      <td>${row.status}</td>
      <td>${row.date} ${row.time}</td>
    `;
    tbody.appendChild(tr);
  }
}

/* ---------- Dashboard ---------- */
function updateDashboard() {
  const today = getToday();
  const totalStudents = Object.keys(students).length;
  const presentToday = Object.values(attendance)
    .filter(a => a.date === today && a.status.includes("Present")).length;

  const dash = document.getElementById("dashboard");
  if (dash) dash.innerText = `Present: ${presentToday} / ${totalStudents}`;

  const totalEl = document.getElementById("total-students");
  const presentEl = document.getElementById("present-count");
  const statusBadge = document.getElementById("status-badge");
  if (totalEl) totalEl.textContent = String(totalStudents);
  if (presentEl) presentEl.textContent = String(presentToday);
  if (statusBadge) {
    if (presentToday > 0) {
      statusBadge.textContent = "Active ✅";
      statusBadge.classList.remove("inactive");
    } else {
      statusBadge.textContent = "Inactive ⏸️";
      statusBadge.classList.add("inactive");
    }
  }

  // Class-wise counts
  const classCounts = {};
  for (const id in students) {
    const cls = students[id].class;
    if (!classCounts[cls]) classCounts[cls] = { total: 0, present: 0 };
    classCounts[cls].total += 1;
    if (attendance[id] && attendance[id].date === today && attendance[id].status.includes("Present")) {
      classCounts[cls].present += 1;
    }
  }

  // Render class summary
  const classDash = document.getElementById("class-dashboard");
  if (classDash) {
    classDash.textContent = "";
    const parts = [];
    Object.keys(classCounts).sort().forEach(cls => {
      parts.push(`Class ${cls}: ${classCounts[cls].present}/${classCounts[cls].total}`);
    });
    classDash.textContent = parts.length ? parts.join("  |  ") : "No class active";
  }
}

/* ---------- Calendar ---------- */
let calendar; // FullCalendar instance

function initCalendar() {
  const calendarEl = document.getElementById("calendar");
  if (!calendarEl || typeof FullCalendar === "undefined") return;
  calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    events: buildCalendarEvents()
  });
  calendar.render();
}


function buildCalendarEvents() {
  const events = [];
  // Prefer history; fallback to current attendance
  const items = attendanceHistory.length ? attendanceHistory : Object.entries(attendance).map(([studentId, row]) => ({
    studentId, ...row
  }));
  items.forEach(row => {
    events.push({
      title: `${row.name}: ${row.status}`,
      start: row.date,
      color: row.status.includes("Present") ? "green" : "red"
    });
  });
  return events;
}
function refreshCalendar() {
  if (!calendar) return;
  calendar.removeAllEvents();
  buildCalendarEvents().forEach(e => calendar.addEvent(e));
}

/* ---------- CSV ---------- */
function downloadCSV() {
  const filterClass = document.getElementById("class-filter")?.value || "all";
  let csv = "Student ID,Name,Class,Status,Date,Time,Streak\n";
  for (const id in attendance) {
    const row = attendance[id];
    if (filterClass === "all" || row.class === filterClass) {
      csv += `${id},${row.name},${row.class},${row.status},${row.date},${row.time},${row.streak || 0}\n`;
    }
  }
  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filterClass === "all" ? "attendance.csv" : `attendance_class_${filterClass}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

/* ---------- Clear ---------- */
function clearAttendance() {
  attendance = {};
  localStorage.removeItem("attendance");
  updateTable();
  updateDashboard();
  refreshCalendar();
  const n = document.getElementById("student-name");
  const s = document.getElementById("attendance-status");
  if (n) n.textContent = "";
  if (s) s.textContent = "";
  showPopup("Attendance cleared", "warning");
}



/* ---------- Email (server at localhost:3000) ---------- */
function sendEmail(payload) {
  return fetch("http://localhost:3000/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).then(r => r.json()).catch(err => ({ error: err?.message || String(err) }));
}

/* ---------- Monthly PDF per student ---------- */
async function downloadMonthlyPDF(studentId) {
  const { jsPDF } = window.jspdf || {};
  if (!jsPDF) { showPopup("PDF library not loaded", "error"); return; }

  const student = students[studentId];
  if (!student) { showPopup("Unknown student", "error"); return; }

  const doc = new jsPDF();
  const monthKey = new Date().toISOString().slice(0,7); // YYYY-MM
  const lines = attendanceHistory.filter(e => e.studentId === studentId && e.date.startsWith(monthKey));

  doc.setFontSize(18);
  doc.text("Monthly Attendance Report", 20, 20);
  doc.setFontSize(12);
  doc.text(`Name: ${student.name}`, 20, 40);
  doc.text(`Class: ${student.class}`, 20, 48);
  doc.text(`Student ID: ${studentId}`, 20, 56);
  doc.text(`Month: ${new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}`, 20, 64);

  let present = 0, total = 0, y = 82;
  lines.forEach(entry => {
    total++;
    if (entry.status.includes("Present")) present++;
    doc.text(`${entry.date} - ${entry.status}`, 20, y);
    y += 8;
    if (y > 280) { doc.addPage(); y = 20; }
  });

  const pct = total ? ((present/total)*100).toFixed(1) : "0.0";
  y += 6; if (y > 280) { doc.addPage(); y = 20; }
  doc.text(`Total Days: ${total}`, 20, y); y += 8;
  doc.text(`Present: ${present}`, 20, y); y += 8;
  doc.text(`Absent: ${total - present}`, 20, y); y += 8;
  doc.text(`Attendance %: ${pct}%`, 20, y);

  doc.save(`${student.name}_Attendance_${monthKey}.pdf`);
}

/* ---------- Monthly Report UI ---------- */
function generateMonthlyReport() {
  const container = document.getElementById("monthly-report");
  if (!container) return;

  const monthKey = new Date().toISOString().slice(0,7);
  container.innerHTML = "<h3>Monthly Report (Current Month)</h3>";

  // aggregate per student
  const map = {};
  attendanceHistory.forEach(e => {
    if (!e.date.startsWith(monthKey)) return;
    if (!map[e.studentId]) map[e.studentId] = { name: e.name, class: e.class, present: 0, total: 0 };
    map[e.studentId].total++;
    if (e.status.includes("Present")) map[e.studentId].present++;
  });

  const list = document.createElement("div");
  for (const id of Object.keys(students)) {
    const stats = map[id] || { name: students[id].name, class: students[id].class, present: 0, total: 0 };
    const pct = stats.total ? ((stats.present / stats.total) * 100).toFixed(1) : "0.0";
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.gap = "8px";
    row.style.margin = "6px 0";
    row.innerHTML = `
      <span><strong>${stats.name}</strong> (Class ${stats.class}) — ${stats.present}/${stats.total} days • ${pct}%</span>
      <button data-id="${id}" class="btn-mini">Download PDF</button>
    `;
    list.appendChild(row);
  }
  container.appendChild(list);

  list.querySelectorAll("button.btn-mini").forEach(btn => {
    btn.addEventListener("click", (e) => downloadMonthlyPDF(e.target.getAttribute("data-id")));
  });
}

/* ---------- Weekly Email Report (optional minimal) ---------- */
function generateWeeklyReports() {
  const weekAgo = new Date(); weekAgo.setDate(weekAgo.getDate() - 7);
  const reports = {};
  attendanceHistory.forEach(entry => {
    if (new Date(entry.date) >= weekAgo) {
      if (!reports[entry.studentId]) {
        reports[entry.studentId] = { present: 0, total: 0, name: entry.name, email: students[entry.studentId]?.email || entry.email };
      }
      reports[entry.studentId].total += 1;
      if (entry.status.includes("Present")) reports[entry.studentId].present += 1;
    }
  });
  // send mails (server must exist)
  Object.entries(reports).forEach(([id, r]) => {
    if (!r.email) return;
    sendEmail({
      studentId: id,
      studentName: r.name,
      parentEmail: r.email,
      report: `Weekly Report: ${r.present} / ${r.total} days present`
    }).then(res => console.log("Weekly Email:", r.name, res));
  });
}

/* ---------- QR Scanner ---------- */
let html5QrcodeScanner;
function startScanner() {
  if (typeof Html5QrcodeScanner === "undefined") {
    console.warn("html5-qrcode script missing");
    return;
  }
  html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);
}

function onScanFailure() { /* ignore */ }


/* ---------- On Scan Success ---------- */
function onScanSuccess(decodedText) {
  if (!students[decodedText]) {
    showPopup("Unknown QR Code ❌", "error");
    return;
  }
  const student = students[decodedText];
  const now = new Date();
  const date = getToday();

  // already scanned today?
  if (attendance[decodedText] && attendance[decodedText].date === date) {
    showPopup(`${student.name} already scanned today ✅`, "success");
    playScanSound();
    return;
  }

  const status = "Present ✅";
  showPopup(`${student.name} marked present ✅`, "success");
  playScanSound();

  // streak
  if (student.lastScan === date) student.streak += 1;
  else student.streak = 1;
  student.lastScan = date;
  if (student.streak >= 5) showPopup(`🎉 ${student.name} has a ${student.streak}-day streak!`, "success");

  // save attendance
  attendance[decodedText] = {
    name: student.name,
    class: student.class,
    status,
    date,
    time: getTimeString(now),
    streak: student.streak
  };
  localStorage.setItem("attendance", JSON.stringify(attendance));

  // save history
  attendanceHistory.push({
    studentId: decodedText,
    name: student.name,
    class: student.class,
    status,
    date,
    time: getTimeString(now),
    streak: student.streak,
    email: student.email
  });
  localStorage.setItem("attendanceHistory", JSON.stringify(attendanceHistory));

  // email (requires backend)
  sendEmail({
    studentId: decodedText,
    studentName: student.name,
    status,
    time: now.toLocaleTimeString(),
    streak: student.streak,
    parentEmail: student.email
  }).then(res => console.log("Email:", res));

  // voice + confetti
  speakName(student.name);
  celebrateScan();

  // UI updates
  const nameEl = document.getElementById("student-name");
  const statusEl = document.getElementById("attendance-status");
  if (nameEl) nameEl.textContent = `${student.name} (${student.class})`;
  if (statusEl) statusEl.innerHTML = `<span class="status-badge">${status} at ${getTimeString(now)}</span>`;

  updateTable();
  updateDashboard();
  refreshCalendar();

  // broadcast
  if (ws && ws.readyState === 1) {
    ws.send(JSON.stringify({ type: "attendance-update", attendance }));
  }
}

/* ---------- Auto Absent (once per day) ---------- */
function autoMarkAbsent() {
  const now = new Date();
  const date = getToday();

  if (localStorage.getItem("absentsDone") === date) return;

  const schoolStart = new Date(); schoolStart.setHours(7, 0, 0, 0);
  if (now - schoolStart >= 10 * 60 * 60 * 1000) {
    for (const id in students) {
      if (!attendance[id] || attendance[id].date !== date) {
        attendance[id] = {
          name: students[id].name,
          class: students[id].class,
          status: "Absent ❌",
          date,
          time: "--",
          streak: 0 // not incrementing; resetting only when absent
        };
        // also log to history for the day
        attendanceHistory.push({
          studentId: id,
          name: students[id].name,
          class: students[id].class,
          status: "Absent ❌",
          date,
          time: "--",
          streak: 0,
          email: students[id].email
        });
      }
    }
    localStorage.setItem("attendance", JSON.stringify(attendance));
    localStorage.setItem("attendanceHistory", JSON.stringify(attendanceHistory));
    localStorage.setItem("absentsDone", date);
    updateTable();
    updateDashboard();
    refreshCalendar();
    showPopup("Absent students auto-marked ❌", "warning");
  }
}

/* ---------- Auto-save ---------- */
setInterval(() => {
  localStorage.setItem("attendance", JSON.stringify(attendance));
  localStorage.setItem("attendanceHistory", JSON.stringify(attendanceHistory));
  showPopup("Attendance auto-saved ✅", "info");
}, 20 * 60 * 1000); // every 20 minutes

/* ---------- Filters & Buttons ---------- */
document.addEventListener("change", (e) => {
  if (e.target && e.target.id === "class-filter") {
    updateTable();
  }
});

/* Camera switch */
document.addEventListener("DOMContentLoaded", () => {
  const switchBtn = document.getElementById("switch-camera");
  if (switchBtn) {
    switchBtn.addEventListener("click", () => {
      Html5Qrcode.getCameras().then(cameras => {
        if (!cameras || cameras.length === 0) return;
        const current = cameras[0];
        const other = cameras.find(c => c.id !== current.id) || cameras[0];
        if (!html5QrcodeScanner) return;
        html5QrcodeScanner.clear().then(() => {
          const reader = new Html5Qrcode("reader");
          reader.start(other.id, { fps: 15, qrbox: 250 }, onScanSuccess, onScanFailure)
            .catch(err => console.warn("Camera start failed", err));
        });
      });
    });
  }
});

/* ---------- Notifications (optional) ---------- */
if ("Notification" in window && Notification.permission !== "granted") {
  Notification.requestPermission().catch(()=>{});
}

/* ---------- Global expose for HTML buttons ---------- */
window.downloadCSV = downloadCSV;
window.clearAttendance = clearAttendance;
window.generateMonthlyReport = generateMonthlyReport;
window.downloadMonthlyPDF = downloadMonthlyPDF;

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  updateTable();
  updateDashboard();
  initCalendar();
  startScanner();

  // Run auto-absent check every 30 minutes
  setInterval(autoMarkAbsent, 30 * 60 * 1000);

  // Optional: send weekly reports if it's Sunday 18:00 (and page is open)
  setInterval(() => {
    const d = new Date();
    if (d.getDay() === 0 && d.getHours() === 18) generateWeeklyReports();
  }, 60 * 60 * 1000);
});

/* 
  Node.js backend code removed from frontend JS.
  Please move the backend code to a separate file (e.g., server.js).
*/
const base = window.BACKEND_URL || "http://localhost:3000";

function sendEmail(payload) {
  return fetch(`${base}/send-email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).then(r => r.json()).catch(err => ({ error: err?.message || String(err) }));
}