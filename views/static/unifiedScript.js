  const swup = new Swup({
    containers: ["#swup","#heading-wrapper","footer"],
    animateHistoryBrowsing: false
  });

  let elems;

  const init = ()  => {

    elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {edge: 'right'});

    elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems, {});

    window.scrollTo(0, 0);

  }

  swup.on('contentReplaced', init);

  document.addEventListener('DOMContentLoaded', function() {
    init();
  });