$(document).ready(function(){
  $('.chars__list').slick({
    fade: true,
    draggable: false,
    focusOnSelect: true,
    prevArrow: '.chars__prev .btn-img__act',
    nextArrow: '.chars__next .btn-img__act',
    dots: true,
    dotsClass: 'chars__heros',
    customPaging: function(slider, i) {
      var className = '';

      switch (i) {
        case 1:
          className = ' chars__hero_type_pamela'
          break;
        case 2:
          className = ' chars__hero_type_lleyn'
          break;
      }

      return (
        '<div class="chars__hero btn-img' + className +'">' +
          '<button class="btn-img__act" aria-label="Изольда"></button>' +
          '<span class="btn-img__inner">' +
            '<span class="btn-img__bg"></span>' +
          '</span>' +
        '</div>'
      );
    }
  });

  $('.section__scroll a').on('click', function() {
    var id = $(this).attr('href');
    var offset = $(id).offset().top;

    $('html, body').animate({scrollTop: offset}, 300, 'swing');
  });
});
