// Shamelessly copied from w3schools...
let i = 0;
const txt = 'futura...'; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */
let header = document.getElementById("header_id");

function type() {
  if(i < txt.length) {
    header.innerHTML += txt.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}
type();