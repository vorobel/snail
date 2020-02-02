



$('.know-more-btn').on('click', function (e) {
    e.preventDefault();
    $('.hidden-item').toggleClass('hidden');
   if (!$('.hidden-item').hasClass('hidden')) {
      var element = document.querySelector('.know-more-btn');
      element.innerHTML = 'KNOW LESS';
    }else {
      var element = document.querySelector('.know-more-btn');
      element.innerHTML = 'KNOW MORE';
    }
  });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuXHJcbiQoJy5rbm93LW1vcmUtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5oaWRkZW4taXRlbScpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgaWYgKCEkKCcuaGlkZGVuLWl0ZW0nKS5oYXNDbGFzcygnaGlkZGVuJykpIHtcclxuICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua25vdy1tb3JlLWJ0bicpO1xyXG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9ICdLTk9XIExFU1MnO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rbm93LW1vcmUtYnRuJyk7XHJcbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJ0tOT1cgTU9SRSc7XHJcbiAgICB9XHJcbiAgfSk7Il0sImZpbGUiOiJhcHAuanMifQ==
