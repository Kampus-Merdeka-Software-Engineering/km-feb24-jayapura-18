function openSidebar() {
  document.getElementById("sidebar").style.left = "0";
}

function closeSidebar() {
  document.getElementById("sidebar").style.left = "-260px";
}

function toggleNotifications() {
  var panel = document.getElementById("notificationsPanel");
  panel.style.display = panel.style.display === "block" ? "none" : "block";
}

function toggleEmailPanel() {
  var panel = document.getElementById("emailPanel");
  panel.style.display = panel.style.display === "block" ? "none" : "block";
}

function toggleAccountPanel() {
  var panel = document.getElementById("accountPanel");
  panel.style.display = panel.style.display === "block" ? "none" : "block";
}
