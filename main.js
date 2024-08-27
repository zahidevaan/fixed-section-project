document.addEventListener('DOMContentLoaded', () => {
    const drowerMenuWrapper = document.querySelector('.drower-menu');
    const mainMenuCol = document.querySelector('.main-menu-wrapper');
    const closeIcon = document.querySelector('.close-icon');
    const rightFixedCol = document.querySelector('.right-fixed-col');
    const logo = document.querySelector('.logo');
    const menuItems = document.querySelectorAll('.menu-item-link');


    drowerMenuWrapper.addEventListener('click', () => {  
            mainMenuCol.style.left = "0px";
            mainMenuCol.style.width = "200px";
            rightFixedCol.style.width = "200px";
            drowerMenuWrapper.style.display = "none";
            closeIcon.style.display = "block";
            logo.style.fontSize = "72px"

            menuItems.forEach(item => {
                const menuText = item.querySelector('.menu-text');
                const menuIcon = item.querySelector('.menu-icon');
                menuText.style.display = "block";
                menuIcon.style.display = "none";
            });
        });
        
        closeIcon.addEventListener('click', () => {
            mainMenuCol.style.width = "80px";
            rightFixedCol.style.width = "80px";
            drowerMenuWrapper.style.display = "block";
            closeIcon.style.display = "none";
            logo.style.fontSize = "42px"
            
            menuItems.forEach(item => {
                const menuText = item.querySelector('.menu-text');
                const menuIcon = item.querySelector('.menu-icon');
                menuText.style.display = "none"
                menuIcon.style.display = "block"
        });
    });
});