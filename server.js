// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Configuration
const CONFIG = {
  EMAIL: "gone123456006@gmail.com", // your Gmail
  PASSWORD: "oedf hfkd svys qaai",  // Gmail App Password
  REPORT_DIR: path.join(__dirname, "reports"),
  PORT: 3000
};

// ✅ Ensure reports folder exists
if (!fs.existsSync(CONFIG.REPORT_DIR)) {
  fs.mkdirSync(CONFIG.REPORT_DIR);
}

// ✅ Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: CONFIG.EMAIL,
    pass: CONFIG.PASSWORD
  }
});

// ✅ Utility: send attendance email
async function sendAttendanceEmail(studentId, studentName, parentEmail, time) {
  const mailOptions = {
    from: CONFIG.EMAIL,
    to: parentEmail,
    subject: "Attendance Notification",
    text: `Dear Parent,

Your child ${studentName} (ID: ${studentId}) is marked Present at Saamarthya Academy on ${time}.

Regards,
Saamarthya Academy`
  };

  return transporter.sendMail(mailOptions);
}

// ✅ Utility: generate PDF report
function generateMonthlyReport(studentName, reportData) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(CONFIG.REPORT_DIR, `${studentName}_monthly.pdf`);
    const doc = new PDFDocument();

    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    // Title
    doc.fontSize(18).text("📘 Monthly Attendance Report", { align: "center" });
    doc.moveDown();

    // Content
    doc.fontSize(12).text(`Student: ${studentName}`);
    doc.text(`Generated On: ${new Date().toLocaleString()}`);
    doc.moveDown();

    doc.text("Attendance Records:");
    doc.text(reportData, { align: "left" });

    doc.end();

    stream.on("finish", () => resolve(filePath));
    stream.on("error", reject);
  });
}

// ✅ Utility: send PDF email
async function sendPDFEmail(studentName, parentEmail, reportData) {
  const filePath = await generateMonthlyReport(studentName, reportData);

  const mailOptions = {
    from: CONFIG.EMAIL,
    to: parentEmail,
    subject: "Monthly Attendance Report",
    text: "Attached is your child's monthly attendance report.",
    attachments: [{ filename: path.basename(filePath), path: filePath }]
  };

  return transporter.sendMail(mailOptions);
}

// ✅ API: attendance notification
app.post("/send-email", async (req, res) => {
  const { studentId, studentName, parentEmail, time } = req.body;

  try {
    const info = await sendAttendanceEmail(studentId, studentName, parentEmail, time);
    console.log("✅ Attendance Email sent:", info.response);
    res.json({ success: true, message: "Attendance email sent!" });
  } catch (err) {
    console.error("❌ Email error:", err.message);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// ✅ API: monthly PDF report
app.post("/send-pdf-email", async (req, res) => {
  const { studentName, parentEmail, reportData } = req.body;

  try {
    const info = await sendPDFEmail(studentName, parentEmail, reportData);
    console.log("✅ Report email sent:", info.response);
    res.json({ success: true, message: "Monthly report sent!" });
  } catch (err) {
    console.error("❌ PDF Email error:", err.message);
    res.status(500).json({ success: false, message: "Failed to send PDF report" });
  }
});

// ✅ Start server
app.listen(CONFIG.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${CONFIG.PORT}`);
});



