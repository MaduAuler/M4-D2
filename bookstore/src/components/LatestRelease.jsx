import books from "../data/fantasy.json"
import { Container, Card, CardDeck } from "react-bootstrap";



const LatestRelease = () => (
 
   <Container>
      
            {books.map((book) => (
               
                  <CardDeck key= {book.asin}>
                      <Card>
                  <Card.Img variant="top" src={book.img} style={{ width: '200px' }}/>
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      {book.category}
                      {book.price}
                    </Card.Text>
                  </Card.Body>
                  </Card>
                  </CardDeck>
                  
                  
            ))}
       
   </Container>
  );

export default LatestRelease;