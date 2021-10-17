// side nav tab
function openTab(evt, tabCol) {
  // Declare all variables
  var i, tabCol, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tab-col");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabCol).style.display = "block";
  evt.currentTarget.className += " active";
}

// side-nav toggle
function openNav() {
  document.getElementById("side-nav").style.width = "100%";
}

function closeNav() {
  document.getElementById("side-nav").style.width = "0";
}
