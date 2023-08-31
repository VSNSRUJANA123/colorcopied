function component(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbTOHex(r, g, b) {
  return "#" + component(r) + component(g) + component(b);
}
export default rgbTOHex;
