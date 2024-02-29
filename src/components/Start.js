import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {startQuiz} from '../store-app/slices/InterviewSlice';
import { useDispatch, useSelector } from "react-redux";

function Start(props) {
  const {showStart} = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
    return (
      <>
        <section className="text-white text-center" style={{ display: `${showStart ? 'block' : 'none'}` }}>
          <Container>
            <Row className="justify-content-center align-items-center row-item">
              <Col>
                  <h1 className="mb-4">{props.title}</h1>
                  <Button onClick={() => dispatch(startQuiz())}>Start Interview</Button>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
    
}

export default Start;