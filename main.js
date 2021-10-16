var $headerIcons = document.getElementsByClassName("icon");
var $main = document.getElementsByTagName("main")[0];
var $footer = document.getElementsByTagName("footer")[0];

function clearContent() {
  $main.innerHTML = "";
  $footer.innerHTML = "";
}

function goToInformativa() {
  clearContent();
  $main.innerHTML += '<div class="title"><h1>Informativa</h1><span>I termini e condizioni sono cambiati, prima di proseguire è necessario leggerli e accettarli:</span></div>';
  $main.innerHTML += checkBox("Ho letto e accetto la nomina responsabile del trattamento.");
  $main.innerHTML += checkBox("Ho letto e accetto i termini e condizioni di utilizzo.");
  $main.innerHTML += checkBox("Ho letto e accetto l'informativa sulla privacy.");
  $main.innerHTML += checkBox("Ho letto e accetto l'utilizzo dei cookie come specificato nella cookie policy.");
  $main.innerHTML += '<button class="simple-button" onclick="goToHome()">Prosegui</button>';
}

function goToHome() {
  clearContent();
  for (var i = $headerIcons.length; i--; ) {
    $headerIcons[i].style.display = "grid";
  }
}

function checkBox(text) {
  return '<label class="pure-material-checkbox"><input type="checkbox"><span>' + text + "</span></label>";
}
