// SIDEBAR TOGGLE

// var searchVisible = false; // menentukan apakah input pencarian terlihat atau tidak

// function toggleSearch() {
//   var searchInput = document.getElementById("searchInput");
//   if (!searchVisible) { // jika input pencarian tidak terlihat
//     searchInput.style.display = "inline-block"; // tampilkan input pencarian
//     searchVisible = true; // set searchVisible menjadi true
//     searchInput.focus(); // beri fokus pada input pencarian
//   } else {
//     // jika input pencarian terlihat dan ikon pencarian diklik lagi, sembunyikan input pencarian
//     searchInput.style.display = "none";
//     searchVisible = false; // set searchVisible menjadi false lagi
//   } 

// }

// var submitVisible = false;

// function toggleSubmit() {
//   var btnSubmit = document.getElementById("btnSubmit");
//   if (!submitVisible) { // jika input pencarian tidak terlihat
//     btnSubmit.style.display = "inline-block"; // tampilkan input pencarian
//     submitVisible = true; // set searchVisible menjadi true
//     btnSubmit.focus(); // beri fokus pada input pencarian
//   } else {
//     // jika input pencarian terlihat dan ikon pencarian diklik lagi, sembunyikan input pencarian
//     btnSubmit.style.display = "none";
//     submitVisible = false; // set searchVisible menjadi false lagi
//   }
// }

var notificationsVisible = false; // menentukan apakah panel notifikasi terlihat atau tidak

function toggleNotifications() {
  var notificationsPanel = document.getElementById("notificationsPanel");
  if (!notificationsVisible) { // jika panel notifikasi tidak terlihat
    notificationsPanel.style.display = "inline-block"; // tampilkan panel notifikasi
    notificationsVisible = true; // set notificationsVisible menjadi true
  } else {
    // jika panel notifikasi terlihat dan ikon notifikasi diklik lagi, sembunyikan panel notifikasi
    notificationsPanel.style.display = "none";
    notificationsVisible = false; // set notificationsVisible menjadi false lagi
  }
}

// Menutup panel notifikasi saat mengklik di luar
window.onclick = function(event) {
  if (!event.target.matches('.notification-icon')) {
    var notificationsPanel = document.getElementById("notificationsPanel");
    if (notificationsPanel.style.display === "block") {
      notificationsPanel.style.display = "none";
      notificationsVisible = false;
    }
  }
}

var emailVisible = false; // menentukan apakah panel email terlihat atau tidak

function toggleEmailPanel() {
  var emailPanel = document.getElementById("emailPanel");
  if (!emailVisible) { // jika panel email tidak terlihat
    // Cek apakah ada pesan email, jika tidak, tampilkan pesan bahwa tidak ada pesan email
    var hasEmails = true; // Ganti dengan logika sesuai dengan aplikasi Anda
    if (hasEmails) {
      emailPanel.innerHTML = "<a href='#'>Email 1</a><a href='#'>Email 2</a><a href='#'>Email 3</a>";
      emailPanel.style.display = "inline-block"; // tampilkan panel email
      emailVisible = true; // set emailVisible menjadi true
    } else {
      emailPanel.innerHTML = "<p>Tidak ada pesan email baru.</p>";
      emailPanel.style.display = "block"; // tampilkan panel email dengan pesan bahwa tidak ada pesan email baru
      emailVisible = true; // set emailVisible menjadi true
    }
  } else {
    // jika panel email terlihat dan ikon email diklik lagi, sembunyikan panel email
    emailPanel.style.display = "none";
    emailVisible = false; // set emailVisible menjadi false lagi
  }
}

// Menutup panel notifikasi dan email saat mengklik di luar
window.onclick = function(event) {
  if (!event.target.matches('.notification-icon') && !event.target.matches('.email-icon')) {
    var notificationsPanel = document.getElementById("notificationsPanel");
    var emailPanel = document.getElementById("emailPanel");
    if (notificationsPanel.style.display === "block") {
      notificationsPanel.style.display = "none";
      notificationsVisible = false;
    }
    if (emailPanel.style.display === "block") {
      emailPanel.style.display = "none";
      emailVisible = false;
    }
  }
}

var accountVisible = false; // menentukan apakah panel notifikasi terlihat atau tidak

function toggleAccountPanel() {
  var accountPanel = document.getElementById("accountPanel");
  if (!accountVisible) { // jika panel notifikasi tidak terlihat
    accountPanel.style.display = "inline-block"; // tampilkan panel notifikasi
    accountVisible = true; // set notificationsVisible menjadi true
  } else {
    // jika panel notifikasi terlihat dan ikon notifikasi diklik lagi, sembunyikan panel notifikasi
    accountPanel.style.display = "none";
    accountVisible = false; // set notificationsVisible menjadi false lagi
  }
}

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}