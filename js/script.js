var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1.5,
    loop:true,
    dots:false,
    nav:false,
    margin:10,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})