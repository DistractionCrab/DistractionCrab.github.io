const TEMPLATE = `
<!DOCTYPE HTML>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<style>
		body {
			color: white;
			background-color: rgba(0, 0, 0, 0);
		}
		p {
			text-align: center;
			font-size: 60px;
			margin-top: 0px;
		}
	</style>
</head>
<body>
	<p id="demo"></p>
	<script>
		const START_TIME = {_START_TIME_SUBSTITUTION_};
		// Set the date we're counting down to
		//var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
		//var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
		var now = new Date();
		var countDownDate = new Date(now);
		countDownDate.setMinutes(now.getMinutes() + 5);

		// Update the count down every 1 second
		var x = setInterval(function() {			  
			// Find the distance between now and the count down date
			var now = new Date().getTime();
			var distance = countDownDate - now;

			// Time calculations for days, hours, minutes and seconds
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			
			if (minutes > 0) {
				document.getElementById("demo").innerHTML 
				= minutes + "m " + seconds + "s ";	
			} else {
				document.getElementById("demo").innerHTML = seconds + "s ";
			}

			// Output the result in an element with id="demo"
			
			    
			// If the count down is over, write some text 
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("demo").innerHTML = "Starting Soon!";
			}
		}, 250);
	</script>
</body>
</html>
`;

function generate_timer() {
	const minute_submit = Math.ceil(document.getElementById('minutes_box').value);
	const file_body = TEMPLATE.replace('{_START_TIME_SUBSTITUTION_}', minute_submit.toString());
	const data = new Blob([file_body], {type: 'text/plain'});


	document.getElementById('download_area').append(file_body);
}