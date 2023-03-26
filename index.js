const saveButton = document.querySelector(".save");

function saveReciept(event) {
  // Testing function, comment later:
  // alert("Button clicked");

  // needed to change the query selector dom
  domtoimage
    .toJpeg(document.querySelector(".reciept"), { quality: 0.95 })
    .then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "my-image-name.jpeg";
      link.href = dataUrl;
      link.click();
    });
}

saveButton.addEventListener("click", saveReciept);
