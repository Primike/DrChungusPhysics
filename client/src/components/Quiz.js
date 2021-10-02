import { useState, useEffect } from 'react';

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
						<>
							<p>You passed the course!</p>
							<img src ="https://c.tenor.com/JUiXaPL-bNoAAAAd/big-chungus.gif" alt="bigchungus"/>
							<button onClick={() => clicker()}>Retake the course</button>
						</>:
			<>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					{score === 3 ? (
						<>
							<p>You passed the course!</p>
							<img src ="https://c.tenor.com/JUiXaPL-bNoAAAAd/big-chungus.gif" alt="bigchungus"/>
						</>
						):(<></>)}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption, index) => (
							<button className = "quizbutton" key = {`${index}+${answerOption}`} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
			</>}
		</div>
	);
}

export default Quiz