$(document).ready(function(){
  $('.hamburger').click(function(){
    $('.hamburger-dropdown-menu').slideToggle('slow');
  })
});

$(document).ready(function(){
  $('.ham-browse').click(function(){
    $('.ham-community-menu').slideUp('slow');
    $('.ham-account-menu').slideUp('slow');
    $('.ham-browse-menu').slideToggle('slow');
  })
});

$(document).ready(function(){
  $('.ham-community').click(function(){
    $('.ham-browse-menu').slideUp('slow');
    $('.ham-account-menu').slideUp('slow');
    $('.ham-community-menu').slideToggle('slow');
  })
});

$(document).ready(function(){
  $('.ham-account').click(function(){
    $('.ham-browse-menu').slideUp('slow');
    $('.ham-community-menu').slideUp('slow');
    $('.ham-account-menu').slideToggle('slow');
  })
});





// SLICK CAROUSEL SLIDER jQuery
$(document).ready(function(){
  $('.hero').slick({
    autoplay:true,
    autoplaySpeed:10000,
    arrows:true,
    dots:true,
    speed:1000
  });
});






// BOOKSHELF SORTING jQuery
$(document).ready(function(){
  $('#haveread, #toread').hide();
  $('#changeShelf').change(function() {
      if ($(this).find(':selected').val() === 'toread') {
          $('div#all, div#haveread').hide();
          $('div#toread').show();

      } else if ($(this).find(':selected').val() === 'haveread') {
          $('div#all, div#toread').hide();
          $('div#haveread').show();

      } else {
        $('div#haveread, div#toread').hide();
        $('div#all').show();
      }
  });
});
