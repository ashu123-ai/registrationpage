document.addEventListener('DOMContentLoaded', function () {
  // 🔊 AUDIO CODE - Play in loop after first click
  const audio = new Audio('Praveen ji.mp3');
  audio.loop = true;

  document.addEventListener('click', function () {
    audio.play().catch((err) => {
      console.warn('Audio play failed:', err);
    });
  }, { once: true }); // Only first click triggers it

  // ✅ FORM SUBMISSION CODE
  document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const dob = document.querySelector('input[name="dob"]').value;
    const birthTime = document.querySelector('input[name="birthTime"]').value;
    const birthPlace = document.querySelector('input[name="birthPlace"]').value.trim();
    const mobile = document.querySelector('input[name="mobile"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const question = document.querySelector('textarea[name="question"]').value.trim();

    if (name === "" || mobile === "") {
      alert("कृपया नाम और मोबाइल नंबर अनिवार्य रूप से भरें।");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert("कृपया वैध 10 अंकों का मोबाइल नंबर दर्ज करें।");
      return;
    }

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

    // WhatsApp redirect
    window.location.href = 'https://whatsapp.com/channel/0029VbBaNYq1iUxYyMleuF20';

    // Send data to Google Sheet
    const scriptURL = 'https://script.google.com/macros/s/AKfycbziaE5vCb370pahjyVlIKH1pF5k-gdho5n2FUOd5XIKqdiyyE_7Pwrpc3FME3wGtzxn5g/exec';
    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(data)
    }).catch(error => {
      console.error('Error!', error.message);
    });
  });
});
