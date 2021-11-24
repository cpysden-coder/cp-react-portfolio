import { Container, Col, Row, Image } from 'react-bootstrap'
import u2mini from '../u2mini.png';
import horiseon from '../Horiseon.png';
import imagefirstbc from '../imagefirstbc.png';
import pwdgen from '../pwdgen.png';
import ecomheroku from '../ecomheroku.png';
import project1 from '../project1.png';

function Portfolio() {
    return (

        <Container>
            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <Row>
                <Col xs={12} md={2}>
                    <h3>Other Works</h3>
                </Col>
                <Col xs={12} md={5}>
                <h3>CSS Cheatsheet Example</h3>
                    <a href="https://cpysden-coder.github.io/bc-unit2-mini-project/" target="_blank">More advanced HTML
                        content
                        and CSS styling</a>
                    <Image src={u2mini} alt=""fluid />
                </Col>
                <Col xs={12} md={5}>
                <h3>Responsive User Homepage</h3>
                
                    <a href="https://cpysden-coder.github.io/wk4-project-html/" target="_blank">Everything's About You Page</a>
                    <Image src={project1} alt="" fluid />
                </Col>
            </Row>

            {/* Columns are always 50% wide, on mobile and desktop */}
            <Row>
                <Col xs={12} md={2}>
                    <h3>More Works</h3>
                </Col>
                <Col xs={12} md={5}>
                <h3>eCommerce Backend PWA</h3>
                    <a href="https://cp-pwa-budget-tracker.herokuapp.com/" target="_blank">Heroku Deployed App</a>
                    <Image src={ecomheroku} alt="" fluid />
                </Col>
                <Col xs={12} md={5}>
                <h3>Password Generator</h3>
                    <a href="https://cpysden-coder.github.io/js-password-generator/" target="_blank">Random Password
                        Generator App</a>
                    <Image src={pwdgen} alt="password generator"
                        fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Portfolio;