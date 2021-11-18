function prepareText(text) {
  return text = text.replaceAll(/[^\w]/g, "").toLowerCase();
}

function encryptSquare(text) {
  text = prepareText(text);
  let column = Math.ceil(Math.sqrt(text.length));
  let row = Math.floor(Math.sqrt(text.length));
  let message = [];
  let codedMessage = [];
  for (let i = 0; i < text.length; i += column) {
    message.push(text.substring(i, i + column));
  }
  for (let x = 0;  x < column; x++) {
    message.forEach(function(element) {
      for (let i = 0; i < column; i += column) {
        codedMessage.push(element.charAt(x));
      }
    });
  }
  let result = codedMessage.join("").match(/.{1,5}/g);
  return result.join(" ");

}