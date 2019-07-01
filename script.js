$(document).ready(function () {
		var attempt = [], compute = [],  score = 0; index = 0, flag = true, color = "", playerTurn = false;
		var slice = ["red", "blue", "yellow", "green"];

		$("#score").html("Score: "+ score);
		$(".slice").on("click", function(){
			console.log(playerTurn)
			if (playerTurn) {
				color  = $(this).attr("id")
				attempt.push(color)

				$(this).fadeOut(150).fadeIn(150);

				if(attempt[index] !== compute[index]) {
					alert('Incorrect, try again')

					patternBlink(compute);
					index = 0;
					attempt = []
				} else {
					if (index === compute.length - 1) {
						playerTurn = false;
						attempt = [];
						score= score + 2;
						$("#score").html("Score: "+ score);
						index = 0;
						color = slice[Math.floor(Math.random() * (4))];
						compute.push(color);
						patternBlink(compute);
					} else if (index !== compute.length - 1) {
						index++;
						return;
					}
				}
			}
		});

		$("#reset-btn").on('click', function () {
			if($(this).html() === "start") {
				compute = [];

				$(this).html("Reset");
				color = slice[Math.floor(Math.random() * (4))];
				compute.push(color);
				console.log(compute)
				patternBlink(compute);
			} else {
				reset();
			}
		});

		function patternBlink(simon) {
			setTimeout (function(){
				for (var i = 0; i < compute.length; i++) {
					console.log(i+ " "+ compute.length);
					(function(i) {
						setTimeout (function () {
							console.log(compute[i])
							$("#"+compute[i]).fadeOut(150).fadeIn(150);
						}, 800);
					})(i);
				}
			}, 1000);
			playerTurn = true;
		};
		function reset() {
			$("#reset-btn").html("start");
			level = 1;
			$("#level").html(level);
			//lives = 3;
			attempt = [];
			compute = [];
			index = 0;
		}
})