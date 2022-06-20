const toggleBtn = document.querySelector('.main-toggle');
const sidebar = document.querySelector('.main-sidebar');


toggleBtn.addEventListener("click" , function() {
    sidebar.classList.toggle("show-sidebar");
})