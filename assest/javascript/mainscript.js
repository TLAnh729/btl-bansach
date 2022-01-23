var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

// Đóng mở menu Mobile
mobileMenu.onclick = function(){
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"')
// console.log(menuItems)
for (var i=0; i<menuItems.length; i++) {
    var menuItem = menuItems[i];
    // console.log(menuItem.nextElementSibling)
    menuItem.onclick = function(checkNav) {
        // console.log(this)
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            checkNav.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}


