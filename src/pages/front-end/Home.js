import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import '../../css/home.css';
import { Link } from "react-router-dom";

function Home() {
    const interviewsInfo = [
      {
        imageUrl: "html.jpg",
        title: "Html Interview",
        btnUrl: "html",
      },
      {
        imageUrl: "css.jpg",
        title: "Css Interview",
        btnUrl: "css",
      },
      {
        imageUrl: "javascript.jpg",
        title: "Javascript Interview",
        btnUrl: "javascript",
      },
      {
        imageUrl: "react.jpg",
        title: "React Interview",
        btnUrl: "react",
      },
    ];
    return (
      <>
        <div className="content home-page row-item">
          <Container>
            <Row sm="2" lg="3">
              {interviewsInfo.map((card, index) => (
                <Col
                  key={index}
                  className="move-item d-flex justify-content-center align-items-center col-item"
                >
                  <Card style={{ width: "20rem" }} className="card-home">
                    <Card.Img
                      src={require(`../../../public/images/${card.imageUrl}`)}
                      alt="not found"
                      variant="top"
                      className="img-home"
                    />
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <hr />
                      <div className="d-flex justify-content-center">
                        <Link to={card.btnUrl}>
                            <Button>Start Interview</Button>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </>
    );
}

export default Home;