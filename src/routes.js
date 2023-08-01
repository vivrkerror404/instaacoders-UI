import Shop from "pages/Dashboard/components/productsList";
import { Container } from "react-bootstrap";
export const routes = [
  {
    EventKey: "Shop",
    Title: "Shop",
    Component: Shop,
  },
  {
    EventKey: "Plant Care",
    Title: "Plant Care",
    Component: () => <Container>Plant care component</Container>,
  },
  {
    EventKey: "Workshops",
    Title: "Workshops",
    Component: () => <Container>Workshops component</Container>,
  },
  {
    EventKey: "Blogs",
    Title: "Blogs",
    Component: () => <Container>Blogs component</Container>,
  },
];
