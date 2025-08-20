const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

// ✅ Create PDF function
function createAttendancePDF(studentName, reportData, month = "August 2025") {
    const doc = new PDFDocument({ margin: 50 });

    // Save file inside reports/ folder
    const filePath = path.join(__dirname, "reports", `${studentName}_monthly.pdf`);
    if (!fs.existsSync("reports")) fs.mkdirSync("reports");
    doc.pipe(fs.createWriteStream(filePath));

    // ================== HEADER ==================
    const logoPath = path.join(__dirname, "logo.png"); // <-- Put your logo here

    if (fs.existsSync(logoPath)) {
        doc.image(logoPath, 50, 40, { width: 60 });
    }

    doc.fontSize(22)
       .fillColor("#2E86C1")
       .text("Saamarthya Academy", 120, 50, { align: "left" });

    doc.moveDown(2);

    doc.fontSize(18)
       .fillColor("#000")
       .text("📊 Monthly Attendance Report", { align: "center" });

    doc.moveDown(2);

    // ================== STUDENT INFO ==================
    doc.fontSize(14).fillColor("#333").text(`👦 Student Name: ${studentName}`);
    doc.text(`📅 Report Month: ${month}`);
    doc.moveDown(2);

    // ================== ATTENDANCE TABLE ==================
    const tableTop = 200;
    const rowHeight = 25;
    const col1 = 50;
    const col2 = 200;
    const col3 = 350;

    // Table header
    doc.fontSize(12).fillColor("#fff").rect(col1, tableTop, 500, rowHeight).fill("#2E86C1").stroke();
    doc.fillColor("#fff").text("Date", col1 + 10, tableTop + 7);
    doc.text("Status", col2 + 10, tableTop + 7);
    doc.text("Remarks", col3 + 10, tableTop + 7);

    // Table rows
    let y = tableTop + rowHeight;
    doc.fontSize(11).fillColor("#000");

    reportData.forEach((day, index) => {
        const bgColor = index % 2 === 0 ? "#f9f9f9" : "#ffffff";
        doc.rect(col1, y, 500, rowHeight).fill(bgColor).stroke();
        doc.fillColor("#000").text(day.date, col1 + 10, y + 7);
        doc.text(day.status, col2 + 10, y + 7);
        doc.text(day.remarks || "-", col3 + 10, y + 7);
        y += rowHeight;
    });

    doc.moveDown(3);

    // ================== SUMMARY SECTION ==================
    const totalPresent = reportData.filter(d => d.status.includes("Present")).length;
    const totalAbsent = reportData.filter(d => d.status.includes("Absent")).length;
    const totalLate = reportData.filter(d => d.status.includes("Late")).length;

    doc.fontSize(14).fillColor("#2E86C1").text("📌 Monthly Summary", { underline: true });
    doc.moveDown(1);

    doc.fontSize(12).fillColor("#000");
    doc.text(`✅ Total Present: ${totalPresent}`);
    doc.text(`❌ Total Absent: ${totalAbsent}`);
    doc.text(`⏰ Total Late: ${totalLate}`);
    doc.moveDown(3);

    // ================== FOOTER ==================
    doc.fontSize(10)
       .fillColor("#888")
       .text("This is a system-generated attendance report. For queries, contact Saamarthya Academy.", 50, 750, { align: "center" });

    doc.end();

    return filePath;
}

module.exports = { createAttendancePDF };
