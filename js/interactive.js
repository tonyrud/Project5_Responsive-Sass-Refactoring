$(document).ready(function() {

    /*****************
        Variables
    ******************/
    var $nav = $('.nav');
    var $icon = $('.icon');
    var animSlideSpeed = 400;
    var lineTop = $('.line-top');
    var lineMid = $('.line-mid');
    var lineBottom = $('.line-bottom');

    //click event for nav icon
    $icon.click(function(event) {
      var style = $nav.css('display');

      lineTop.toggleClass('line-top-anim');
      lineMid.toggleClass('line-mid-anim');
      lineBottom.toggleClass('line-bottom-anim');

      $nav.slideToggle(animSlideSpeed, function() {
        // add end animation code here
        if(style !== "none"){
          $nav.css('display','');
        }
      });

    });

    //nav.hide();

});
