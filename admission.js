document.getElementById('admissionForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let name = document.getElementById('name').value.trim();
  let phone = document.getElementById('phone').value.trim();
  let studentClass = document.getElementById('class').value.trim();
  let course = document.getElementById('course').value;
  let message = document.getElementById('message').value.trim();

  if (phone.length !== 10) {
    alert("Please enter a valid 10 digit mobile number");
    return;
  }

  let text = "🔥 *NEW ADMISSION ENQUIRY* 🔥%0A%0A" +
    "👤 *Name:* " + name + "%0A" +
    "📞 *Mobile:* " + phone + "%0A" +
    "🎓 *Class / Age:* " + (studentClass || "Not Mentioned") + "%0A" +
    "📚 *Course:* " + course + "%0A" +
    "💬 *Message:* " + (message || "No Message") + "%0A%0A" +
    "Sent from Website Admission Form.";

  document.getElementById('successMsg').style.display = 'block';

  setTimeout(function() {
    window.open("https://wa.me/919614126284?text=" + text, "_blank");
  }, 800);
});