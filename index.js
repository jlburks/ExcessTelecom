function openNav() {
  document.getElementById("mySidenav").style.width = "50%";
  // document.getElementById("mainContent").style.marginLeft = "55%";
  document.body.style.backgroundColor = "rgba(17, 31, 68,0.85)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mainContent").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
  document.body.style.backgroundColor = "rgba(17, 31, 68)";
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
