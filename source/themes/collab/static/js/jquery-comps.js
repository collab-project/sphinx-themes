$(document).ready(function()
{
	var actionUrl = "";

    $("input#date").datepicker({
    	minDate: new Date(2003, 1 - 1, 1),
    	buttonText: 'Choose Date',
    	showOn: 'both',
    	buttonImageOnly: true,
    	buttonImage: '/images/icon_date_picker.jpg',
    	dateFormat: 'dd/mm/yy',
    	constrainInput: true,
    	autoSize: true,
    	changeYear: true
    });
    
    $('#deleteDialog').dialog({
		autoOpen: false,
		height: 'auto',
		maxHeight: 400,
		width: 300,
		maxWidth: 600,
		modal: true,
		position: 'center',
		closeOnEscape: true,
		resizable: false,
		buttons: {
			"Ok": function() {
				window.location.href = actionUrl;
				$(this).dialog("close"); 
			}, 
			"Cancel": function() { 
				$(this).dialog("close"); 
			} 
		}
	});
	
	$('#radio4').click(function(){
		$('#deleteDialog').dialog('open');
		return false;
	});
	
	$('#radio4, ul#icons li').hover(
		function() { $(this).addClass('ui-state-hover'); }, 
		function() { $(this).removeClass('ui-state-hover'); }
	);
				
    $("button, input:submit", "form").button();
    
    $('textarea').elastic();
    
    $("#accordion").accordion({
    	fillSpace: true
    });
     
    $("#pageEditor").buttonset();
    
    $('#radio1, #radio2, #radio3, #radio4').click(function() {
      var link = $(this).attr("link")
      if ( link != "#confirm" )
      {
	  	window.location.href = link;
	  }
	  else
	  {
	  	actionUrl = $(this).attr("actionUrl")
	  }
	});

});

