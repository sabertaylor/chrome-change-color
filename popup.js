$("#bg-colorpicker").spectrum({
  color: "#000"
});

$("#bg-colorpicker").spectrum({
  change: function (color) {
    let color2 = color.toHexString();
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        { code: 'document.body.style.backgroundColor = "' + color2 + '";' });
    });
  }
});

$("#fg-colorpicker").spectrum({
  color: "#000"
});

$("#fg-colorpicker").spectrum({
  change: function(color) {
    let color2 = color.toHexString();
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        { code: 'document.body.style.color = "' + color2 + '";' });
    });  
  }
});
