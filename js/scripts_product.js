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

// Header

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