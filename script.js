let text=""
let i=""

{
    let i=0;
    while (i <= 10) {
      text += `${i} <br>`;
      i++;
    }
}

document.getElementById("demo").innerHTML = text;

document.getElementById("h2").style = "text-align: center; font-family: Arial, Helvetica, sans-serif;"

document.getElementById("demo").style = "font-family: Arial, Helvetica, sans-serif;"
