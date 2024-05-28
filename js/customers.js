//NAVBAR

var searchVisible = false; // menentukan apakah input pencarian terlihat atau tidak

function toggleSearch() {
  var searchInput = document.getElementById("searchInput");
  if (!searchVisible) { // jika input pencarian tidak terlihat
    searchInput.style.display = "inline-block"; // tampilkan input pencarian
    searchVisible = true; // set searchVisible menjadi true
    searchInput.focus(); // beri fokus pada input pencarian
  } else {
    // jika input pencarian terlihat dan ikon pencarian diklik lagi, sembunyikan input pencarian
    searchInput.style.display = "none";
    searchVisible = false; // set searchVisible menjadi false lagi
  } 
}

function toggleSearch() {
  var searchInput = document.getElementById('searchInput');
  var btnSearch = document.getElementById('btnSearch');
  if (searchInput.style.display === 'none' || searchInput.style.display === '') {
      searchInput.style.display = 'inline-block';
      btnSearch.style.display = 'inline-block';
  } else {
      searchInput.style.display = 'none';
      btnSearch.style.display = 'none';
  }
}

document.getElementById('searchIcon').addEventListener('click', function(event) {
  event.preventDefault();
  toggleSearch();
});

function toggleNotifications() {
  var notificationsPanel = document.getElementById('notificationsPanel');
  if (notificationsPanel.style.display === 'none' || notificationsPanel.style.display === '') {
      notificationsPanel.style.display = 'block';
  } else {
      notificationsPanel.style.display = 'none';
  }
}

document.querySelector('.notifications').addEventListener('click', function(event) {
  event.preventDefault();
  toggleNotifications();
});

// Optional: Close the notification panel when clicking outside
window.addEventListener('click', function(event) {
  var notificationsPanel = document.getElementById('notificationsPanel');
  var notificationIcon = document.querySelector('.notification-icon');
  if (event.target !== notificationsPanel && event.target !== notificationIcon) {
      notificationsPanel.style.display = 'none';
  }
});

function toggleEmailPanel() {
  var emailPanel = document.getElementById('emailPanel');
  if (emailPanel.classList.contains('active')) {
      emailPanel.classList.remove('active');
  } else {
      emailPanel.classList.add('active');
  }
}

function toggleAccountPanel() {
  var accountPanel = document.getElementById('accountPanel');
  if (accountPanel.classList.contains('active')) {
      accountPanel.classList.remove('active');
  } else {
      accountPanel.classList.add('active');
  }
}

// Optional: Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.material-icons-outlined')) {
      var dropdowns = document.getElementsByClassName('dropdown');
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('active')) {
              openDropdown.classList.remove('active');
          }
      }
  }
}
//END NAVBAR
//
// SIDEBAR TOGGLE

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

const sidebarLinks = document.querySelectorAll('.sidebar-link');

sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    const page = link.getAttribute('data-page');
    if (page) {
      window.location.href = page;
    }
  });
});