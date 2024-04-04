document.addEventListener("DOMContentLoaded", ()=> {
  (()=> {
    const gallery = document.querySelector('.js-gallery');

    if(gallery) {
      const items = gallery.querySelectorAll('.gallery-item');

      items.forEach((item)=> {
        item.addEventListener("click", ()=> {
          if (item.classList.contains('open')) {
            item.classList.remove('open');
          } else {
            item.classList.add('open');
          }
        })
      })
    }
  })();
})