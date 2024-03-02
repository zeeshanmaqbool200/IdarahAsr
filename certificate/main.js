const output = document.getElementById("output");
const input = document.getElementById("input");
const downloadBtn = document.getElementById("btn");


function generateCertificates() {
  let image = new Image();
  image.src = 'certificate.jpg';
  image.onload = function() {
    let inputValue = input.value;
    let splitValue = inputValue.split(',');
if (inputValue.length == 0) {
input.style.borderColor = "crimson";
  input.placeholder = "Please Enter Any Data";
} else{
  input.style.borderColor = "white";
  input.placeholder = ""
    for (var i = 0; i < splitValue.length; i++) {
      let canvas = document.createElement("canvas");
      let button = document.createElement('button');
      let certificateName = 'certificate_of_' + splitValue[i] + '.png';
      button.innerHTML = "Download";
      let ctx = canvas.getContext("2d");

      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0);
      ctx.font = '15rem cursive';
      ctx.fillStyle = '#022A3E';
      ctx.fillText(splitValue[i], 1500, 2100);
      output.appendChild(canvas);
      output.appendChild(button);

      // Append to the document body
      button.addEventListener('click', function (event) {
        // Get the index of the clicked button
        let index = Array.from(output.children).indexOf(event.target);
        

        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = certificateName;
        link.click();
      });
    }
  }
  }
}

function clearOutput() {
  output.innerHTML = "";
  input.value = "";
}