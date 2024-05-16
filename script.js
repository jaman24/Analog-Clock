let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
  let date = new Date();
  // Getting hour, min, sec from date
  let hh = date.getHours();
  let mi = date.getMinutes();
  let se = date.getSeconds();

  // Finding Rotation
  let hourRotation = 30 * hh + mi / 2;
  let minuteRotation = 6 * mi;
  let secondRotation = 6 * se;

  hr.style.transform = `rotate(${hourRotation}deg)`;
  min.style.transform = `rotate(${minuteRotation}deg)`;
  sec.style.transform = `rotate(${secondRotation}deg)`;
}
setInterval(displayTime, 1000);
