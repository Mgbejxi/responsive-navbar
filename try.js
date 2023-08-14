function openCity(cityName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++)
    tabcontent[i].style.display = "none";

  // Remove the background-color of all tablinks
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  // show the specific tab content
  document.getElementById(cityName).style.display = "block";

//   Add the specific color to the button used to open the tab content
elmnt.style.backgroundColor = color;
}
