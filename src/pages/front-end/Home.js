import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import '../../css/home.css';

function Home() {
    const interviewsInfo = [
      {
        imageUrl: "html.jpg",
        title: "Html Interview",
        btnUrl: "html",
      },
      {
        imageUrl: "../../../public/images/css.jpg",
        title: "Css Interview",
        btnUrl: "css",
      },
      {
        imageUrl: "../../../public/images/javascript.jpg",
        title: "Javascript Interview",
        btnUrl: "javascript",
      },
      {
        imageUrl: "../../../public/images/react.jpg",
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
                  className="mt-4 d-flex justify-content-center align-items-center col-item"
                >
                  <Card style={{ width: "20rem" }} className="card-home">
                    <Card.Img
                      src={`../../../public/images/${card.imageUrl}`}
                      alt="not found"
                      variant="top"
                      className="img-home"
                    />
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <hr />
                      <div className="d-flex justify-content-center">
                        <Button href={card.btnUrl}>Start Interview</Button>
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