document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {edge: 'right'});

    elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems, {});
  });