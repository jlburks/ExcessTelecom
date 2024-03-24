function openNav() {
  document.getElementById("mySidenav").style.width = "30%";
  document.getElementById("mainContent").style.marginLeft = "35%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mainContent").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

function toHomePage() {
  document.getElementById("homePage").style.display = "block";
  document.getElementById("aboutPage").style.display = "none";
  document.getElementById("devicesPage").style.display = "none";
  document.getElementById("internetPage").style.display = "none";
  closeNav();
}

function toInternetPage() {
  document.getElementById("internetPage").style.display = "block";
  document.getElementById("aboutPage").style.display = "none";
  document.getElementById("devicesPage").style.display = "none";
  document.getElementById("homePage").style.display = "none";
  closeNav();
}

function toAboutPage() {
  document.getElementById("aboutPage").style.display = "block";
  document.getElementById("internetPage").style.display = "none";
  document.getElementById("devicesPage").style.display = "none";
  document.getElementById("homePage").style.display = "none";
  closeNav();
}
function toDevicesPage() {
  document.getElementById("devicesPage").style.display = "block";
  document.getElementById("internetPage").style.display = "none";
  document.getElementById("aboutPage").style.display = "none";
  document.getElementById("homePage").style.display = "none";
  closeNav();
}
