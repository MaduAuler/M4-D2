import books from "../data/fantasy.json"
import { Container, Card, Row, Col} from "react-bootstrap";



const LatestRelease = () => (
 
 
    <Container>
    <Row>
          {books.map((book) => (
             <Col key={book.asin} Row xs={1} md={3} className="g-4" >
                
                    <Card style={{ height: '30rem' }} className="m-2">
                <Card.Img variant="top" src={book.img} style={{ height: '60%'}} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    {book.category}
                    {book.price}
                  </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                
          ))}
     </Row>
 </Container>
  );

export default LatestRelease;