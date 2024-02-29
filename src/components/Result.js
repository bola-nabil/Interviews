import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import {resetQuiz} from "../store-app/slices/InterviewSlice";

function Result() {
    const { quizData, showResult, marks } = useSelector((state) => state.quiz);
    const dispatch = useDispatch();

      const handleReset = () => {
        dispatch(resetQuiz());
      };

    return (
      <>
        <section
          className="bg-dark text-white"
          style={{ display: `${showResult ? "block" : "none"}` }}
        >
          <Container>
            <div className="row vh-100 align-items-center justify-content-center">
              <div className="col-lg-6">
                <div
                  className={`text-light text-center p-5 rounded ${
                    marks > (quizData.length * 5) / 2 ? "bg-success" : "bg-danger"
                  }`}
                >
                  <h1 className="mb-2 fw-bold">
                    {marks > (quizData.length * 5) / 2 ? "Awesome!" : "Oops!"}
                  </h1>
                  <h3 className="mb-3 fw-bold">
                    Your score is {marks} out of {quizData.length * 5}
                  </h3>
                  <button onClick={handleReset} className="btn btn-light text-bold">Start Again</button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </>
    );
}

export default Result;