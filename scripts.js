$(document).ready(function(){
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('4000');
            $('.filter').filter('.'+value).show('4000'); 
        }
    });
    $(".btn").each(function(){
       $(this).click(function(){
          $(this).addClass("active");
          $(this).siblings().removeClass("active");
       });
    });
});

 $(document).ready(function(){
        $("area[rel^='prettyPhoto']").prettyPhoto(); 
        $(".galleryh:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: true});
        $(".galleryh:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
    });