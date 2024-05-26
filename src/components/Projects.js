import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Projects = () => {
  const projects = [
    {
      title: 'Food Order App',
      description: 'Design & Development',
      imgUrl:
        'https://images.pexels.com/photos/4344573/pexels-photo-4344573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Event Management App',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'The Final Coundown',
      description: 'Design & Development',
      imgUrl:
        'https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    // {
    //   title: 'Portfolio Website',
    //   description: 'Design & Development',
    //   imgUrl:
    //     'https://user-images.githubusercontent.com/50160672/174933373-1ba6cadf-1c9a-48c3-aa58-984d0bd62d82.png',
    // },
  ]

  const experiences = [
    {
      title: 'IIT Patna',
      description: 'ML Research Intern',
      imgUrl:
        'https://caerusexplore.files.wordpress.com/2020/08/img-20190530-wa0038-774449.jpg',
    },
    {
      title: 'SuperDev Pro',
      description: 'Full Stack Developer Intern',
      imgUrl:
        'https://media.licdn.com/dms/image/D560BAQEo-PptsGpp2Q/company-logo_200_200/0/1708925284606/superdevpro_logo?e=2147483647&v=beta&t=yoE3AvhoIOtFUm-1khbokgofWtOsnPnEggIXxtwF-U0',
    },
    {
      title: 'Enactus JMI',
      description: 'Development of E-Commerce Website',
      imgUrl: 'https://logowik.com/content/uploads/images/552_enactus.jpg',
    },
  ]

  const coding = [
    {
      title: 'Leetcode',
      description: 'Solved more than 600 questions',
      imgUrl: 'https://interviewguide.dev/images/leetcode.png',
    },
    {
      title: 'Github',
      description: 'See my repositories',
      imgUrl:
        'https://github.blog/wp-content/uploads/2023/01/1200x640.png?fit=1200%2C640',
    },
    {
      title: 'Geeks for Geeks',
      description: 'I remain active on gfg',
      imgUrl:
        'https://miro.medium.com/v2/resize:fit:799/0*ilw552fVUGbwIzbE.jpg',
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Experineces</h2>
                  <p>
                    I build web applications, including event management and
                    food order apps, focusing on responsive design, seamless
                    navigation, efficient state management, and enhanced user
                    interaction.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Experiences</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Coding Stats</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {experiences.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {coding.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
