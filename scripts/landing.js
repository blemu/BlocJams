var pointsArray = document.getElementsByClassName('point');
//var animatePoints = function(points) {
    var animatePoints = function() {
   // var revealPoint = function(point) {
     //   point.style.opacity = 1;
       //  point.style.transform = "scaleX(1) translateY(0)";
         //point.style.msTransform = "scaleX(1) translateY(0)";
        // point.style.WebkitTransform = "scaleX(1) translateY(0)";
         var revealPoint = function() {
         // #7
         $(this).css({
             opacity: 1,
             transform: 'scaleX(1) translateY(0)'
         });
    }
    
   // for(var i = 0; i < points.length; i++) {
     //   revealPoint(points[i]);
    //}
         // #6
     $.each($('.point'), revealPoint);
};
//window.onload = function() {
$(window).load(function() {
    //if (window.innerHeight > 950) {
       //  animatePoints(pointsArray);
            // #1
        if ($(window).height() > 950) {
         animatePoints();
     }
   // var sellingPoints = document.getElementsByClassName('selling-points')[0];
    //var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    // #2
    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

   // window.addEventListener("scroll", function(event) {
        // #3
     $(window).scroll(function(event) {
       // if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
        // animatePoints(pointsArray);  
         // #4
         if ($(window).scrollTop() >= scrollDistance) {
             animatePoints();
         }
    });
});