/* coded by Aru*/

/*Used images and logo belong to their respective owners*/

const projectName = 'Landing Page'

const menuWindow = document.querySelector('.nav-bar ul');
const toggleButton = document.querySelector('.fa-bars');
const backgroundGray = document.querySelector('.gray-background')


  document.onclick = (e) => {
    if (e.target !== menuWindow && e.target !== toggleButton ) {
      menuWindow.classList.remove('clicked');
      backgroundGray.classList.remove('active');
    }
  }

  toggleButton.onclick = () => {
    menuWindow.classList.toggle('clicked');
    backgroundGray.classList.toggle('active');
}






