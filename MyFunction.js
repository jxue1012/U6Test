
console.log("is this code even executed?");

var SERVER_URL = "https://example.com/api";
function GetServerUrl() {
  console.log(SERVER_URL);
  return SERVER_URL;
}

function Hello() {
  console.log("Hello");
}

function FullScreen() {
  console.log("FullScreen");
  var value = window.uinstance;
  console.log("Global variable value:", value);
  value.SetFullscreen(1);
}

console.log("what scope am I currently in:");
console.log(this); // Should print out "Window".

//window.GetServerUrl = GetServerUrl();



