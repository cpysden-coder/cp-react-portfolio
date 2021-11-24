import { Container, Col, Row } from 'react-bootstrap'
import headshot from '../c-pysden-hs.jpg';
import './Profile.css';


function Profile() {
    return (

        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={12} md={8}>
                    <h2 id="about-me">About Me</h2>
                    <p>
                        After building a career in pre-sales with outstanding reputation for providing client focused technology strategy aligned to business, I am now looking to pivot into developing full stack applications, ideally pursuing my passion by developing solutions for Smart, Sustainable and Livable Cities
                    </p>
                    <p>
                        Highly accomplished professional with demonstrated experience coordinating and directing various projects and presales campaigns, specifically related to the technology sector. Exceptional Project Leader and Consultant with significant expertise throughout the entire project lifecycle, including requirements definition, analysis, and workflow processes. Substantial exposure to diverse business practices and personnel; able to thrive within ever changing environments.
                    </p>
                    <ul id="ul-hero" class="list-style-type: square">
                        <li>Full Stack Developer</li>
                        <li>HTML, CSS, Javascript, MySql, Node.js</li>
                        <li>MVC, Agile, Git</li>
                        <li>Program / Project Management</li>
                        <li>Strategic Planning & Implementation</li>
                        <li>A good learner, teacher and communicator</li>
                        <li>Business Specifications & Requirements</li>
                        <li>A designer of liveable sustainable cities</li>
                        <li>An advocate of community green spaces over parking lots</li>
                        <li>A part time musician</li>
                    </ul>

                </Col>
                <Col xs={6} md={4}>
                    <img className="responsive-img hide-on-small-only" src={headshot} alt="" id="headshot" />
                </Col>
            </Row>


        </Container>
    )
}

export default Profile;