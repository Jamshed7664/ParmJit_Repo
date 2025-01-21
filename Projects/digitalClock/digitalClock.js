

function showTime() {
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds();  // 0 - 59
    let session = "AM"; // AM - PM

    if (h === 0) { // 12:00 AM
        h = 12;
    }

    if (h > 12) { // 1:00 PM
        h = h - 12; // 1:00 PM
        session = "PM"; // 1:00 PM
    }

    h = (h < 10) ? "0" + h : h; // 01:00 PM
    m = (m < 10) ? "0" + m : m; // 01:01 PM
    s = (s < 10) ? "0" + s : s; // 01:01:01 PM

    let time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("clockDisplay").innerText = time;

    setTimeout(showTime, 1000);
}
showTime()
