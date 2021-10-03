import { useState, useEffect } from 'react';
import { Button, } from 'semantic-ui-react'

function Quiz({quizquestions, course, user, usercourse, setUserCourse}) {

    const questions = quizquestions.map((question) => {
        return {questionText: `${question.question}`,
                answerOptions: question.quiz_answers.map((x) => (
                    {answerText: `${x.answer}`, isCorrect: x.correct}
                ))}
    })

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}		
	};

	useEffect(() => {
		fetch('/user_courses')
		.then(res => res.json())
		.then(usercourses => setUserCourse(usercourses.filter(
			usercourse => {
				if (usercourse.user_id === user.id && usercourse.course_id === course.id) {
					return usercourse}})))
	}, [])

	if (score === 3) {
        fetch("/user_courses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: user.id,
                course_id: course.id,
            }),
            })
            .then((resp) => resp.json())
            .then((x) => {
            });
    }

	function handleDeleteClick(id) {
        fetch(`/user_courses/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => {setUserCourse([])});
      }

	  function clicker() {
		handleDeleteClick(usercourse[0].id)
		setUserCourse([])
	  }

	return (
		<div className='quiz'>
			{usercourse.length>0 ? 
						<h1 className='retakesection'>							
							<p className="youpassed">You passed the course!</p>
							<img className = "rechungus" src ="https://c.tenor.com/JUiXaPL-bNoAAAAd/big-chungus.gif" alt="bigchungus"/>
							<Button size='huge' className = "retake" onClick={() => clicker()}>Retake the course</Button>
						</h1>
						:
			<>
			{showScore ? (
				<h1 className='scoresection'>
					You scored {score} out of {questions.length}
					{score === 3 ? (
						<>
							<p className="youpassed">You passed the course!</p>
							<img className = "passchungus" src ="https://c.tenor.com/-zRUM3RMM64AAAAM/big-chungus.gif" alt="bigchungus"/>
						</>
						):(<>
								<p className="youpassed">Keep Studying!</p>
								<img className = "passchungus" src ="https://i.imgflip.com/31ihns.jpg" alt="bigchungus"/>
							</>)}
				</h1>
			) : (
				<div className = "quizsection">
					<div>
						<div className="questionnumber">
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className="quesitontext">{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answers'>
						{questions[currentQuestion].answerOptions.map((answerOption, index) => (
							<Button size='huge' className = "quizbutton" key = {`${index}+${answerOption}`} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{index+1}. {answerOption.answerText}</Button>
						))}
					</div>
				</div>
			)}
			</>}
		</div>
	);
}

export default Quiz