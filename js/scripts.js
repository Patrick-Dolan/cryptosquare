function prepareText(text) {
  return text = text.replaceAll(/[^\w]/g, "").toLowerCase();
}

function encryptSquare(text) {
  text = prepareText(text);
  let column = Math.ceil(Math.sqrt(text.length));
  let row = Math.floor(Math.sqrt(text.length));
  console.log(column);
  console.log(row);
}