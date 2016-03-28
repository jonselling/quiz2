(function(){
	var cook = document.cookie;
	var MyData = new Array();
	if(cook != '')
	{
		$("#info").html(cook);
	}
	$("#Keep").hide();
	$("#TwoFacedButton").click(function(){
		if($(this).html() == "Get Title")
		{
			var rand;
			var forCook;
			$("#info").html("");
			$.getJSON("http://www.mattbowytz.com/simple_api.json?data=quizData", function(my_data){
				MyData = my_data.data;
				rand = Math.floor(Math.random() * (MyData.length+1));
				forCook = MyData[rand];
				$("#info").html(forCook);
			});
			$(this).html("Change It");
			$("#Keep").show();
		}
		else
		{
			rand = Math.floor(Math.random() * (MyData.length+1));
			forCook = MyData[rand];
			$("#info").html(forCook);
		}
	});
	$("#Keep").click(function(){
		forCook = $("#info").html();
		document.cookie = forCook;
	})
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	var $mouseover = $('.mouse-over');
	var $click     = $('.click');
	var $submit    = $('.submit');
	var $timeout   = $('.timeout');

	$mouseover.on('mouseover', function() {
		$this = $(this);
		$this.html('Scrooge McDuck!');
		$this.height($this.height() + 50); //I would like to just comment out this line since if you keep mouse overing it it keeps expanding!!!
	});

	$click.on('click', function() {
		$this = $(this);
		$this.html('Peace Out!')
		$this.fadeOut(1500);
	});

	$submit.submit(function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() != '') {
			$(this).find('input').each(function() {
				$(this).fadeOut("slow");
			});
			$(this).append('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});

	$(document).ready(function() {
		setTimeout(function(){
			$timeout.fadeIn('slow');
		}, 1000);
	});

})(jQuery);