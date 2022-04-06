$(document).ready(function(){
    var i;
    for(i=1; i<13; i++)
        {   
            $("#gallerie1").append("<figure class='gallery__item gallery__item--"+i+"'><br><a target='_blank' href='../media/"+i+".jpg' ><br><img src='../media/"+i+".jpg'  class='gallery__img'><br></figure><br>");
        }
    
    for(i=13; i<18; i++)
        {   
            $("#gallerie2").append("<figure class='gallery__item gallery__item--"+i+"'><br><a target='_blank' href='../media/"+i+".jpg' ><br><img src='../media/"+i+".jpg'  class='gallery__img'><br></figure><br>");
        }
   
});


$(window).on("load",function() {
  /*  var boxDraw = $(".fade");
    var boxDrawTop = boxDraw.offset().top;
    var windowHeight = $(window).height();
  */  
    
          $(window).scroll(function() {
  //  var scroll = $(window).scrollTop();
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $(".fade").each(function() {
              /* Check the location of each desired element */
              //var objectBottom = $(this).offset().top + $(this).outerHeight();
var objectBottom = $(this).offset().top;
              /* If the element is completely within bounds of the window, fade it in */
              if (objectBottom < windowBottom)
   //   if ( scroll >= ( boxDrawTop - windowHeight ))        
              { //object comes into view (scrolling down)
                if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
              } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
              }
            });
          }).scroll(); //invoke scroll-handler on page-load
        });