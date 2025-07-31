document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Input values
  const name = document.querySelector('input[name="name"]').value.trim();
  const dob = document.querySelector('input[name="dob"]').value; // optional
  const birthTime = document.querySelector('input[name="birthTime"]').value; // optional
  const birthPlace = document.querySelector('input[name="birthPlace"]').value.trim(); // optional
  const mobile = document.querySelector('input[name="mobile"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim(); // optional
  const question = document.querySelector('textarea[name="question"]').value.trim(); // optional

  // ✅ Only Name and Mobile Required
  if (name === "" || mobile === "") {
    alert("कृपया नाम और मोबाइल नंबर अनिवार्य रूप से भरें।");
    return;
  }

  // ✅ Validate Mobile Number (10-digit starting from 6-9)
  if (!/^[6-9]\d{9}$/.test(mobile)) {
    alert("कृपया वैध 10 अंकों का मोबाइल नंबर दर्ज करें।");
    return;
  }

  // ✅ Email format check only if provided
  if (email !== "") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("कृपया सही ईमेल आईडी दर्ज करें या इसे खाली छोड़ें।");
      return;
    }
  }

  const data = {
    name,
    dob,
    birthTime,
    birthPlace,
    mobile,
    email,
    question
  };

  // WhatsApp redirect first
  //const whatsappNumber = '919911366916';
  //const message = `नमस्ते! मेरा नाम ${name} है। मैंने वेबिनार के लिए रजिस्ट्रेशन किया है।`;
  //const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = 'https://whatsapp.com/channel/0029VbBaNYq1iUxYyMleuF20';

  // Send data to Google Sheet in background
  const scriptURL = 'https://script.google.com/macros/s/AKfycbziaE5vCb370pahjyVlIKH1pF5k-gdho5n2FUOd5XIKqdiyyE_7Pwrpc3FME3wGtzxn5g/exec';
  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data)
  }).catch(error => {
    console.error('Error!', error.message);
  });
});
