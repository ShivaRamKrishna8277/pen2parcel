function hideAll() {
    var allContentDivs = document.querySelectorAll('.content_wrappers_group');
    var allmenulinks = document.querySelectorAll('.menu_link');
    for (var i = 0; i < allContentDivs.length; i++) {
        allContentDivs[i].style.display = "none";
    }
    for (var i = 0; i < allmenulinks.length; i++) {
        allmenulinks[i].classList.remove('active');
    }
    closeMenu()
}
var content_title = document.getElementById("content_title");
function openCart(){
    hideAll();
    content_title.innerHTML = 'Cart';
    var cart_link = document.getElementById("cart");
    var cart_content = document.getElementById("cart_content");
    cart_link.classList.add('active');
    cart_content.style.display = "block";
}
function openDelorders(){
    hideAll();
    content_title.innerHTML = 'Delivered Orders';
    var delorder_link = document.getElementById("delivered-orders");
    var delorder_content = document.getElementById("delivered_orders_content");
    delorder_link.classList.add('active');
    delorder_content.style.display = "block";
}
function openInorders(){
    hideAll();
    content_title.innerHTML = 'In-Transit Orders';
    var inorder_link = document.getElementById("in-transit-orders");
    var inorder_content = document.getElementById("in_transit_orders_content");
    inorder_link.classList.add('active');
    inorder_content.style.display = "block";
} 
function openCnclorders(){
    hideAll();
    content_title.innerHTML = 'Cancelled Orders';
    var cnclorder_link = document.getElementById("cancelled-orders");
    var cnclorder_content = document.getElementById("cancelled_orders_content");
    cnclorder_link.classList.add('active');
    cnclorder_content.style.display = "block";
} 
function openPerinfo(){
    hideAll();
    content_title.innerHTML = 'Personal Information';
    var perinfo_link = document.getElementById("personal-info");
    var perinfo_content = document.getElementById("personal_info_content");
    perinfo_link.classList.add('active');
    perinfo_content.style.display = "block";
} 
function openManaddress(){
    hideAll();
    content_title.innerHTML = 'Manage Addresses';
    var manadd_link = document.getElementById("manage-addresses");
    var manadd_content = document.getElementById("manage_address_content");
    manadd_link.classList.add('active');
    manadd_content.style.display = "block";
} 
function openOthers(){
    hideAll();
    content_title.innerHTML = 'Others';
    var others_link = document.getElementById("others");
    var others_content = document.getElementById("others_content");
    others_link.classList.add('active');
    others_content.style.display = "block";
} 


function openMenu() {
    var menu_bar = document.getElementById("menu_bar_wrapper");
    menu_bar.style.display = "block";
    document.body.style.overflow = "hidden";
}
function closeMenu() {
    var menu_bar = document.getElementById("menu_bar_wrapper");
    menu_bar.style.display = "none";
    document.body.style.overflow = "auto";
}
