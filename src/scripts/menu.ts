const hamburger = document.querySelector('.hamburger')
const navBar = document.querySelector('.navbar-default')



if (hamburger && navBar) {
  hamburger.addEventListener('click', () => {
    navBar.classList.toggle('hidden')
  })
}
