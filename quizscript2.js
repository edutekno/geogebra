function submitAnswers() {
		var total = 4;
		var score = 0;

		//Get User Input
		var q1 = document.forms['quizForm']['q1'].value;
		var q2 = document.forms['quizForm']['q2'].value;
		var q3 = document.forms['quizForm']['q3'].value;
		var q4 = document.forms['quizForm']['q4'].value;
		//var q5 = document.forms['quizForm']['q5'].value;

		//Validation
			//Looping through the question
		for (var i = 1; i <= total; i++) {

			//If we miss one, we output an alert box
			if(eval('q' + i) == null || eval('q' + i) == ''){
				alert('Anda belum mengerjakan soal ' + i);
				return false;
			}
		}

		//Set Correct Answers
		var answers = ['d', 'a', 'b', 'd'];

		//Check Answers

		for (i = 1; i <= total; i++) {

				if(eval('q' + i) == answers[i - 1]) {
					score++;
				}

		}

		//Display Results
		var results = document.getElementById('results');

		results.innerHTML = '<h3> Nilai Anda <strong>' + score + '</strong> dari <strong>' + total + '</strong> soal</h3>';
		alert('Nilai Anda '  + score + ' dari ' + total);
		return false;
}
