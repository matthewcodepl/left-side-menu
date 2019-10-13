const menu = document.getElementById('toggle');
const toggleMenu = document.getElementById('sub');

const handleClick = () => {

    toggleMenu.classList.toggle('add');

}


menu.addEventListener('click', handleClick)