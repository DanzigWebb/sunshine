// мобильное меню
function openSidebar () {
  let buttonMenu = document.querySelector('.my-menu-button');
  let sidebar = document.querySelector('.sidebar');

  buttonMenu.onclick = function(e) {
    // задержка анимации гамбургера
    function openOnClick () {
      buttonMenu.classList.toggle('is-active');

    };
    setTimeout(openOnClick, 100)
    sidebar.classList.toggle('is-active');
  }
}
openSidebar ();

// активная ссылка
function takeLink () {
  let links = document.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    let linksUrl = links[i].href;
    if (linksUrl == window.location.href || linksUrl+"/" == window.location.href) {
      links[i].classList.add('site-link--active');
      }
    }
  }
takeLink ();