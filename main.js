var $headerIcons = document.getElementsByClassName("icon");
var $main = document.getElementsByTagName("main")[0];
var $footer = document.getElementsByTagName("footer")[0];

function clearContent() {
  $main.innerHTML = "";
  $footer.innerHTML = "";
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
}

function goToInformativa() {
  clearContent();
  $main.innerHTML += title('Informativa', 'I termini e condizioni sono cambiati, prima di proseguire è necessario leggerli e accettarli:');
  $main.innerHTML += checkBox("Ho letto e accetto la nomina responsabile del trattamento.");
  $main.innerHTML += checkBox("Ho letto e accetto i termini e condizioni di utilizzo.");
  $main.innerHTML += checkBox("Ho letto e accetto l'informativa sulla privacy.");
  $main.innerHTML += checkBox("Ho letto e accetto l'utilizzo dei cookie come specificato nella cookie policy.");
  $main.innerHTML += button('Prosegui', 'goToHome()');
}

function goToHome() {
  clearContent();
  for (var i = $headerIcons.length; i--;) {
    $headerIcons[i].style.display = "grid";
  }
  $main.innerHTML += title('Home', 'todo');
  $footer.innerHTML += button('Logout', 'goToLogin()');
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