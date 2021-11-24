import { Card, Button, Image } from 'react-bootstrap'
import birdsblog from '../birdsblog.png';

function Featured() {
  return (
<>
    <Card className="text-center">
      <Card.Header bg="dark">Featured Project</Card.Header>
      <Card.Body>
        <Card.Title id="#featured-work">BirdBlog - A community for local birdwatching</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Image src={birdsblog} alt="" id="headshot" fluid /> 
      </Card.Body>
      <Button variant="primary">Primary</Button>
      <Card.Footer className="text-muted">Class Project 2</Card.Footer>
    </Card>
    
    </>
  )
}

export default Featured;