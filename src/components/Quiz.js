import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  setQuizData,
  nextQuestion,
  selectAnswer,
  showTheResult,
  incrementMarks,
} 
from "../store-app/slices/InterviewSlice";

function Quiz(props) {
    const dispatch = useDispatch();
    const {showQuiz, quizData, currentQuestionIndex} = useSelector((state) => state.quiz);

    useEffect(() => {
      fetch(props.url)
        .then((res) => res.json()).
        then(data => dispatch(setQuizData(data)));
  }, [dispatch]);

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setTimeout(() => {
        dispatch(nextQuestion());
      },700)
    }
  };

  const handleAnswer = (event, selected) => {
    dispatch(selectAnswer(selected));
    if(selected === quizData[currentQuestionIndex].answer) {
        event.target.classList.add("success");
        dispatch(incrementMarks(5));
    } else {
        event.target.classList.add("danger");
    }
  };

  const handleTheResult = () => {
    dispatch(showTheResult());
  }
  
  return (
    <>
      <section style={{ display: `${showQuiz ? "block" : "none"}` }}>
        <Container>
          <Row className="row-item align-items-center justify-content-center">
            <div className="col-lg-8">
              <Card
                className="p-4"
                style={{ background: "#3d3d3d", borderColor: "#646464" }}
              >
                <div className="d-flex justify-content-between gap-md-3">
                  <h5 className="mb-2 fs-normal lh-base text-light question">
                    {quizData[currentQuestionIndex]?.question}
                  </h5>
                  <h5
                    style={{
                      color: "#60d600",
                      width: "100px",
                      textAlign: "right",
                    }}
                  >
                    <div className="text-warning fs-5">
                      {quizData[currentQuestionIndex]?.id} / {quizData.length}
                    </div>
                  </h5>
                </div>
                <div>
                  <ul className="list-unstyled">
                    {quizData[currentQuestionIndex]?.options.map(
                      (option, index) => (
                        <li key={index} className="mt-3">
                          <button
                            onClick={(event) => {
                              handleAnswer(event, option);
                              handleNext();
                            }}
                            className={`w-100 btn-design light`}
                          >
                            {option}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                  {currentQuestionIndex + 1 === quizData.length && (
                    <button
                      onClick={handleTheResult}
                      className="btn btn-primary w-100"
                    >
                      Show Result
                    </button>
                  )}
                </div>
              </Card>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Quiz;
