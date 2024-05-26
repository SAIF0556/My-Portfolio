import { Container, Row, Col } from 'react-bootstrap'
import { MailchimpForm } from './MailchimpForm'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <a
              style={{
                color: 'white',
                textDecoration: 'none',
                width: '10vh',
              }}
              href="https://drive.google.com/file/d/1rfHDA_sLbgkXrcPzuBfGaHWPxm10g8VL/view?usp=sharing"
            >
              <h1>RESUME</h1>
            </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/syed-mohd-saif-b46671217/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://twitter.com/SMSaif86121972"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="" />
                {/* <IoLogoLinkedin /> */}
              </a>
              <a
                href="https://github.com/SAIF0556"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
