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
// Product Page
document.addEventListener('DOMContentLoaded', () => {
    const products = {
        coffee: [
            { name: 'Drip Coffee', image: 'assets/drip-coffee.png', description: 'Classic, rich brew from freshly ground beans.', price: '$2.50' },
            { name: 'Gourmet Brewed Coffee', image: 'assets/gourmet-brewed.png', description: 'Luxurious, full-bodied coffee from select beans.', price: '$2.20' },
            { name: 'Barista Espresso', image: 'assets/barista-espresso.png', description: 'A strong, concentrated coffee brewed.', price: '$4.25' },
            { name: 'Organic Brewed Coffee', image: 'assets/organic-brewed-coffee.png', description: 'Certified organic beans for guilt-free enjoyment.', price: '$3.00' },
            { name: 'Premium Brewed Coffee', image: 'assets/premium-brewed-coffee.png', description: 'Exceptional blend for superior taste and aroma.', price: '$3.50' },
        ],
        tea: [
            { name: 'Brewed Black Tea', image: 'assets/brewed-black-tea.png', description: 'Robust, comforting black tea infusion.', price: '$3.00' },
            { name: 'Brewed Green Tea', image: 'assets/brewed-green-tea.png', description: 'Refreshing, delicate green tea brewed perfectly.', price: '$3.00' },
            { name: 'Brewed Chai Tea', image: 'assets/brewed-chai-tea.png', description: 'Warm, aromatic chai tea with spices.', price: '$3.10' },
            { name: 'Brewed Herbal Tea', image: 'assets/brewed-herbal-tea.png', description: 'Natural herbal infusion for soothing flavor.', price: '$2.50' },
        ],
        bakery: [
            { name: 'Biscotti', image: 'assets/biscotti.png', description: 'Italian twice-baked biscuits, contains almonds and chocolate chunks', price: '$3.50' },
            { name: 'Pastry', image: 'assets/pastry.png', description: 'Croissants, danishes, or cream puffs.', price: '$3.75' },
            { name: 'Scone', image: 'assets/scone.png', description: 'Traditional British baked goods, served with jam and fresh cream.', price: '$3.00' }
        ],
        'drinking-chocolate': [
            { name: 'Hot Chocolate', image: 'assets/hot-choco.png', description: 'Rich and creamy hot chocolate.', price: '$4.50' }
        ],
        flavours: [
            { name: 'Regular Syrup', image: 'assets/regular-syrup.png', description: 'Sweet and aromatic regular syrup.', price: '$0.80 per serving' },
            { name: 'Sugar Free Syrup', image: 'assets/sugar-free-syrup.png', description: 'Perfect for those seeking a guilt-free indulgence.', price: '$0.80 per serving' }
        ],
        'coffee-beans': [
            { name: 'Espresso Beans', image: 'assets/espresso-beans.png', description: 'A blend of Arabica and Robusta beans.', price: '$3.00' },
            { name: 'Gourmet Beans', image: 'assets/gourmet-beans.png', description: 'High-quality beans with distinct flavors, perfect for coffee connoisseurs.', price: '$2.50' },
            { name: 'Green Beans', image: 'assets/green-beans.png', description: 'Raw, unroasted beans ideal for home roasting enthusiasts.', price: '$2.00' },
            { name: 'House Blend Beans', image: 'assets/house-blend-beans.png', description: 'A balanced mix of beans, offering smooth and consistent flavors.', price: '$3.50' },
            { name: 'Organic Beans', image: 'assets/organic-beans.png', description: 'A friendly coffee beans.', price: '$2.50' },
            { name: 'Premium Beans', image: 'assets/premium-beans.png', description: 'Top-tier beans with exceptional flavor and aroma.', price: '$4.00' }
        ],
        'loose-tea': [
            { name: 'Black Tea', image: 'assets/black-tea.png', description: 'Robust flavor and higher caffeine, served with milk or lemon', price: '$2.00' },
            { name: 'Chai Tea', image: 'assets/chai-tea.png', description: 'Brewed with a mix of cinnamon, and ginger.', price: '$2.80' },
            { name: 'Green Tea', image: 'assets/green-tea.png', description: 'Classic Green tea.', price: '$2.50' },
            { name: 'Herbal Tea', image: 'assets/herbal-tea.png', description: 'Made from dried fruits, flowers, or herbs', price: '$3.00' }
        ],
        branded: [
            { name: 'Clothing', image: 'assets/clothing.png', description: 'Stylish t-shirt.', price: '$8.00' },
            { name: 'Housewares', image: 'assets/housewares.png', description: 'Coffee mug.', price:'$10.00' }
        ],
        'packaged-chocolate': [
            { name: 'Drinking Chocolate', image: 'assets/drinking-choco.png', description: 'Rich and fresh drinking chocolate.', price: '$3.00' },
            { name: 'Organic Chocolate', image: 'assets/organic-choco.png', description: 'Smooth and sweet milk chocolate.', price: '$3.5' }
        ]
    };

    for (const category in products) {
        const categorySection = document.getElementById(category);
        const productContainer = categorySection.querySelector('.products');

        products[category].forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = 
            `<img src="${product.image}" alt="${product.name}">
             <h3>${product.name}</h3>
             <p>${product.description}</p>
             <h1>${product.price}</h1>`
            ;
            productContainer.appendChild(productElement);
        });
    }
});