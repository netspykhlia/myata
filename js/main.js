function initialize_owl(el) {
    el.owlCarousel({
        margin: 10,
        nav: true,
        navText: ["<",">"],
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 800,
        loop: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
}

function destroy_owl(el) {
    el.trigger("destroy.owl.carousel");
    el.find('.owl-stage-outer').children(':eq(0)').unwrap();

}


$(document).ready(function () {

    initialize_owl($('#owl-example1'));

    $('a[href="#hits"]').on('shown.bs.tab', function () {
        initialize_owl($('#owl-example1'));
    }).on('hide.bs.tab', function () {
        destroy_owl($('#owl-example1'));
    });

    $('a[href="#stocks"]').on('shown.bs.tab', function () {
        initialize_owl($('#owl-example2'));
    }).on('hide.bs.tab', function () {
        destroy_owl($('#owl-example2'));
    });

    $('a[href="#newItems"]').on('shown.bs.tab', function () {
        initialize_owl($('#owl-example3'));
    }).on('hide.bs.tab', function () {
        destroy_owl($('#owl-example3'));
    });

});
window.onload = function() {
  var goTop = document.getElementById('toTop');
  goTop.onclick = function() {
    window.scrollTo(0,0);
  };
  window.onscroll = function () {
    if ( window.pageYOffset > 0 ) {
      goTop.style.display = 'block';
    } else {
      goTop.style.display = 'none';
    }
  };
};