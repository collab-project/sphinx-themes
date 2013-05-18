// Copyright Collab 2012-2013
!function ($) {

  $(function(){

    var $window = $(window)

    // bootstrap pimping
    
    // table
    $("table[class!='docutils field-list']").removeClass("docutils").addClass("table table-striped table-bordered");
    $("table[class!='field-list']").removeAttr("border");
    
    // code
    $('span[class="pre"]').wrapInner('<code />');
  })

  
}(window.jQuery)