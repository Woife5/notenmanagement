$(document).ready(function() {
  navBar()
  Klassendropdown()
})


function navBar() {
  let gen = ''
  gen += '<nav class="teal navbar-material darken-3"><div class="nav-wrapper"><a href="/calendar" class="brand-logo right"><img class="responsive-img" src="./Images/HTL-Logo-weiss-transparent.png"></a><ul id="nav-mobile" class="left">'+ activeTab() +'</ul></div></nav>'
  document.getElementById('navDiv').innerHTML = gen;
}
