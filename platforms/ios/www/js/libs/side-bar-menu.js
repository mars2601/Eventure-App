$(document).ready(function() {
  // populate the menu
  $('#left-menu').sidr({
    name: 'sidr-left',
    side: 'left',
    source: '#remote-left-menu'
  });
  $('#right-menu').sidr({
    name: 'sidr-right',
    side: 'right',
    source: '#remote-right-menu'
  });

  // close the menu on click item
  $('.sidr-class-ember-view').click(function() {
    $.sidr('close', 'sidr-left');
    $.sidr('close', 'sidr-right');
  });

  // close the menu on swipe page
  var page = $('#page');
  page.hammer().on("panleft", function(ev){
    $.sidr('close', 'sidr-left');
  });
  page.hammer().on("panright", function(ev){
    $.sidr('close', 'sidr-right');
  });
});
