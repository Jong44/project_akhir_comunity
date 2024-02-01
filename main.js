let kondisiMenu = false;

function toggleMenu(){
    const menu = document.getElementById('menu__phone');

    kondisiMenu = !kondisiMenu;

    if(kondisiMenu){
        menu.style.display = 'flex';
    }else{
        menu.style.display = 'none';
    }
}