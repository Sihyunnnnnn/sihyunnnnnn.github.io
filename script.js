function openPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function saveMessage() {
  let message = document.getElementById("guestMessage").value;
  if (!message) {
    alert("Please write something!");
    return;
  }

  let messages = JSON.parse(localStorage.getItem("guestMessages") || "[]");
  messages.push(message);
  localStorage.setItem("guestMessages", JSON.stringify(messages));
  alert("Message saved!");
  closePopup();
}
