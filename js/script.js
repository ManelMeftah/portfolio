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