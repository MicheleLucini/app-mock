var $headerIcons = document.getElementsByClassName("icon");
var $main = document.getElementsByTagName("main")[0];
var $footer = document.getElementsByTagName("footer")[0];
var $bottomNav = document.getElementById("bottom_nav");
var $btnTimbrature = document.getElementById("btnTimbrature");
var $btnRichieste = document.getElementById("btnRichieste");
var $btnDocumenti = document.getElementById("btnDocumenti");

function clearContent() {
  $main.innerHTML = "";
  $footer.innerHTML = "";
}

function changeActiveBtnBottom(btnToActivate) {
  $btnTimbrature.classList.remove("active");
  $btnRichieste.classList.remove("active");
  $btnDocumenti.classList.remove("active");
  btnToActivate.classList.add("active");
}

function goToLogin() {
  clearContent();
  for (var i = $headerIcons.length; i--;) {
    $headerIcons[i].style.display = "none";
  }
  $main.innerHTML += title('Accedi', 'Inserisci le tue credenziali per accedere all’app');
  $main.innerHTML += '<label for="email" class="inp"><input type="text" id="email" placeholder="&nbsp;"><span class="label">Email</span><span class="focus-bg"></span></label>';
  $main.innerHTML += '<label for="pwd" class="inp"><input type="password" id="pwd" placeholder="&nbsp;"><span class="label">Password</span><span class="focus-bg"></span></label>';
  $main.innerHTML += button('Accedi', 'goToInformativa()');
  $footer.innerHTML += '<span class="frgt-pwd">Ho dimenticato la password</span>';
  $bottomNav.style.display = "none";
}

function goToInformativa() {
  clearContent();
  $main.innerHTML += title('Informativa', 'I termini e condizioni sono cambiati, prima di proseguire è necessario leggerli e accettarli:');
  $main.innerHTML += checkBox("Ho letto e accetto la nomina responsabile del trattamento.");
  $main.innerHTML += checkBox("Ho letto e accetto i termini e condizioni di utilizzo.");
  $main.innerHTML += checkBox("Ho letto e accetto l'informativa sulla privacy.");
  $main.innerHTML += checkBox("Ho letto e accetto l'utilizzo dei cookie come specificato nella cookie policy.");
  $main.innerHTML += button('Prosegui', 'goToTimbrature()');
}

function goToTimbrature() {
  clearContent();
  for (var i = $headerIcons.length; i--;) {
    $headerIcons[i].style.display = "grid";
  }
  $main.innerHTML += title('Timbrature', 'Queste sono le tue timbrature');
  $bottomNav.style.display = "grid";
  changeActiveBtnBottom($btnTimbrature);
}

function goToRichieste() {
  clearContent();
  $main.innerHTML += title('Richieste', 'Ecco le tue richieste di ferie e permessi');
  changeActiveBtnBottom($btnRichieste);
}

function goToDocumenti() {
  clearContent();
  $main.innerHTML += title('Documenti', 'Qui raccogliamo tutti i tuoi documenti');
  changeActiveBtnBottom($btnDocumenti);
}

function title(title, subtitle) {
  return '<div class="title"><h1>' + title + '</h1><span>' + subtitle + '</span></div>';
}

function button(text, onclick) {
  return '<button class="simple-button" onclick="' + onclick + '">' + text + '</button>';
}

function checkBox(text) {
  return '<label class="pure-material-checkbox"><input type="checkbox"><span>' + text + "</span></label>";
}


goToLogin();