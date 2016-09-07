$(document).ready(function() {

    /*****************
        Variables
    ******************/
    var $nav = $('.nav');
    var $icon = $('.icon');
    var animSlideSpeed = 500;

    $icon.click(function(event) {
      $nav.slideToggle(animSlideSpeed, function() {
        console.log('animation ended');

      });
      console.log('icon clicked');
    });

    //nav.hide();

});
