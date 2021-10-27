var $headerIcons = document.getElementsByClassName("icon");
var $main = document.getElementsByTagName("main")[0];
var $footer = document.getElementsByTagName("footer")[0];
var $bottomNav = document.getElementById("bottom_nav");
var $btnTimbrature = document.getElementById("btnTimbrature");
var $btnRichieste = document.getElementById("btnRichieste");
var $btnDocumenti = document.getElementById("btnDocumenti");
var $btnUserSettings = document.getElementById("btnUserSettings");

function clearContent() {
  $main.innerHTML = "";
  $footer.innerHTML = "";
}

function changeActiveBtnBottom(btnToActivate) {
  $btnTimbrature.classList.remove("active");
  $btnRichieste.classList.remove("active");
  $btnDocumenti.classList.remove("active");
  $btnUserSettings.classList.remove("active");
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
  $main.innerHTML += floatingButton("add_location", "Timbra");
  $main.innerHTML += title('Timbrature', 'Queste sono le tue timbrature');
  var timbrature = "";
  timbrature += '<h5>Oggi</h5>';
  timbrature += timbratura("presenza", "in", "Ufficio INFO-BIT", "8:30");
  timbrature += timbratura("attivita", "in", "Analisi", "8:36");
  timbrature += timbratura("attivita", "out", "Analisi", "12:23");
  timbrature += timbratura("presenza", "out", "Ufficio INFO-BIT", "12:30");
  timbrature += timbratura("presenza", "in", "Ufficio INFO-BIT", "14:00");
  timbrature += timbratura("attivita", "in", "Sviluppo", "14:07");
  timbrature += timbratura("attivita", "out", "Sviluppo", "16:03");
  timbrature += timbratura("attivita", "in", "Testing", "16:03");
  timbrature += timbratura("attivita", "out", "Testing", "17:58");
  timbrature += timbratura("presenza", "out", "Ufficio INFO-BIT", "18:00");
  $main.innerHTML += '<div class="timbrature">' + timbrature + '</div>';
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

function goToUserSettings() {
  clearContent();
  $main.innerHTML += title('Impostazioni utente', 'Qui puoi modificare modificare la configurazione dell\'app');
  changeActiveBtnBottom($btnUserSettings);
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

function floatingButton(icon, text, onclick) {
  return '<button class="floating-button" onclick="' + onclick + '"><span class="material-icons-outlined">' + icon + '</span>' + text + '</button>';
}

function timbratura(tipo, verso, luogo, ora) {
  var html = "";
  html += '<div class="timbratura ' + verso + ' ' + tipo + '">';
  html += '  <div class="line-connection"></div>';
  html += '  <div class="icon"><span class="material-icons-round">chevron_' + (verso == "in" ? "right" : "left") + '</span></div>';
  html += '  <span class="primary">' + luogo + '</span>';
  html += '  <span class="secondary">' + ora + '</span>';
  html += '</div>';
  return html;
}

goToLogin();