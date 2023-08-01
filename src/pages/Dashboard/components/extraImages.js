import { Card, Col, Row } from "react-bootstrap";
const ExtraImages = ({ images }) => {
  return (
    <Row className="m-0 p-0 mt-4 d-flex justify-content-center">
      {images.map((image, index) => (
        <Col key={index} xs={3}>
          <Card.Img
            src={image}
            alt={`Extra Image ${index}`}
            className="img-fluid"
            style={{ height: "50px" }}
          />
        </Col>
      ))}
      <Col xs={3} style={{ position: "relative" }}>
        <Card.Img
          src={images[0]}
          alt={`Extra Image Blur`}
          className="img-fluid opacity-25"
          style={{ height: "50px" }}
        />
        <p
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          +5
        </p>
      </Col>
    </Row>
  );
};

export default ExtraImages;
