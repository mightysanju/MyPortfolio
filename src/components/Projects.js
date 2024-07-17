import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import projImg4 from "../assets/img/project-img4.png";
import cert1 from "../assets/img/cert1.jpeg";
import cert2 from "../assets/img/cert2.jpeg";
import cert3 from "../assets/img/cert3.jpeg";
import cert4 from "../assets/img/cert4.png";
import cert5 from "../assets/img/cert5.png";
import cert6 from "../assets/img/cert6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "My Portfolio",
      description: "React | Node | Github Pages",
      imgUrl: projImg1,
    },
    {
      title: "DDO Tool | Amazon",
      description: "Critical Thinking | Problem Solving using python, tkinter, multiprocessing, SQL, Database, CRUD Operations",
      imgUrl: projImg2,
    },
    {
      title: "Network App @ Amazon",
      description: "Problem Solving, Efficiency improvement, Business growth, Headcount Save",
      imgUrl: projImg3,
    },
    {
      title: "RAG Chat Bot ",
      description: "Retreival Augmented Generation based BOT Deployed on Heroku",
      imgUrl: projImg4,
    },
    {
      title: "Upcoming . . .",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Upcoming . . .",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const certificates = [
    {
      title: "Git Hub",
      description: "Git, GitHub Repos, Github Pages",
      imgUrl: cert1,
    },
    {
      title: "Tableau",
      description: "Data Visualization, Excel, Data Presentation",
      imgUrl: cert2,
    },
    {
      title: "SQL",
      description: "SQL Certification course, with real time project experiance at amazon",
      imgUrl: cert3,
    },
    {
      title: "Python",
      description: "Selenium, Pandas, Tkinter, SQLlite, Database Connections, Data Cleaning, Data Manipulation, Machine Learning experianced gained post and prior to this certification",
      imgUrl: cert4,
    },
    {
      title: "Advanced SQL",
      description: "Created a Database for Tech Event registration at Trine University",
      imgUrl: cert5,
    },
    {
      title: "Network Management",
      description: "Part of curriculam , At the end of course designed a Network for Trine University as part of final project submission.",
      imgUrl: cert6,
    },
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My Projects section showcases my technical skills through IT projects and my experience with IoT/electronics. I'll also highlight relevant certifications for added credibility.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">IT Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Electronics</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Certifications</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          certificates.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
