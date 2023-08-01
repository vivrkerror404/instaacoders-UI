import { Col, Tab, Tabs, Image, Row, Badge } from "react-bootstrap";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import User from "assets/user.png";
import LeafIcon from "assets/leaf-icon.png";
import { routes } from "routes";

import "./customNavbar.css";
function Navbar({ cart, ...props }) {
  return (
    <Row className="p-0 m-0">
      <Col xs={2} md={3}>
        <Image width="50px" src={LeafIcon} />
        <span className="fw-bold mx-3">OYOTEE</span>
      </Col>
      <Col
        xs={9}
        md={6}
        className="py-2"
        style={{ maxHeight: "100vh", overflow: "auto" }}
      >
        <Tabs
          defaultActiveKey="Shop"
          className="m-0 p-0"
          onSelect={(data) => console.log("data is ", data)}
        >
          {routes.map(({ EventKey, Title, Component, ...rest }) => (
            <Tab eventKey={EventKey} title={Title}>
              <Component {...rest} {...props} />
            </Tab>
          ))}
        </Tabs>
      </Col>
      <Col xs={1} md={3} className="text-md-end text-xs-center">
        <span style={{ position: "relative" }}>
          <BsHandbag size="24" />{" "}
          <Badge
            bg="danger"
            className="p-1 rounded-circle"
            style={{ position: "absolute", right: "0px", bottom: "-12px" }}
          >
            {Object.keys(cart)?.length}
          </Badge>
        </span>
        <AiOutlineHeart size="29" className="mx-md-3" />
        <Image width="45px" roundedCircle src={User} />
      </Col>
    </Row>
  );
}

export default Navbar;
