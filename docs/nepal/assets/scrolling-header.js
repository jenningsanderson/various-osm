//web.archive.org/web/20150927040505/http://Wait for the document to finish loading, then build a dynamic header and add
// it to the top
$(document).ready(function(){

  $('h1.title').click(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  })

  var all_headings = $("h1");
  var scrolling_list = $("#scrolling_nav");

  all_headings.each(function(idx, heading){
    if (idx > 1){
      elem = all_headings[idx]
      var top = $(elem).offset().top
      var li = $('<li/>')
        .addClass('ui-menu-item')
        .addClass('scrolling-nav-item')
        .attr('role', 'menuitem')
        .addClass('ui-all')
        .html(elem.innerHTML)
        .click(function() {
          $('html, body').animate({
            scrollTop: top - 50
          }, 500);
        })
        .appendTo(scrolling_list)
    }

  })

});

//web.archive.org/web/20150927040505/http://TODO: Make it highlight headings...
// $(document).scroll(function(data){
//   console.log(data)
// })

/*
     FILE ARCHIVED ON 04:05:05 Sep 27, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:36:15 Apr 06, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/