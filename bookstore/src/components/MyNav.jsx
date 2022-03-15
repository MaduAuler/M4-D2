import { Nav, Navbar} from "react-bootstrap";


const MyNav = () => (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Book Store</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Browse</Nav.Link>
    </Nav>
  </Navbar>
  
  );

export default MyNav;