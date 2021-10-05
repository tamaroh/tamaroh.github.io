'use strict';
// please do not delete the 'use strict' line above
document.getElementById('color-button').addEventListener('click', changeColor)
function changeColor() {
  console.log('Button clicked!'); // feel free to change/delete this line
  const colors = [];
  for (let i=0;i<=5;i++){
    colors.push(_.random(0,255));
  }
  const color1 = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
  const color2 = `rgb(${colors[3]}, ${colors[4]}, ${colors[5]})`;
const gradient = "linear-gradient(-45deg, " + color1+ ", " + color2 + ")";
document.body.style.background = gradient;
  console.log(document.body.style.background);
}
