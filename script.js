const video = document.getElementById("astroVideo");

  // जैसे ही user कहीं क्लिक करे, आवाज़ चालू कर दो
  document.body.addEventListener("click", () => {
    video.muted = false;
    video.play();
  }, { once: true }) // सिर्फ एक बार ही execute हो
document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    name: document.querySelector('input[name="name"]').value,
    dob: document.querySelector('input[name="dob"]').value,
    birthTime: document.querySelector('input[name="birthTime"]').value,
    birthPlace: document.querySelector('input[name="birthPlace"]').value,
    mobile: document.querySelector('input[name="mobile"]').value,
    email: document.querySelector('input[name="email"]').value,
    question: document.querySelector('textarea[name="question"]').value
  };

  const scriptURL = 'https://script.google.com/macros/s/AKfycbziaE5vCb370pahjyVlIKH1pF5k-gdho5n2FUOd5XIKqdiyyE_7Pwrpc3FME3wGtzxn5g/exec';

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    //const whatsappNumber = 'https://whatsapp.com/channel/0029VbBaNYq1iUxYyMleuF20';
    //const message = `नमस्ते! मेरा नाम ${data.name} है। मैंने वेबिनार के लिए रजिस्ट्रेशन किया है।`;
    //const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = 'https://whatsapp.com/channel/0029VbBaNYq1iUxYyMleuF20';
  })
  .catch(error => {
    alert("रजिस्ट्रेशन में त्रुटि हुई, कृपया पुनः प्रयास करें।");
    console.error('Error!', error.message);
  });
});
