const menu = document.getElementById('toggle');
const toggleMenu = document.getElementById('sub');
const bar = document.getElementById('burger');
const topMenu = document.getElementById('all');
const handleClick = () => {

    toggleMenu.classList.toggle('add');

}

const handleBarClick = () => {
    topMenu.classList.toggle('right');
    bar.classList.toggle('slow');
}


bar.addEventListener('click', handleBarClick)
menu.addEventListener('click', handleClick)