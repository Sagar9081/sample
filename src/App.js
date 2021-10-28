import "./App.css";
import { Row, Col, Button } from "react-bootstrap";
import { WorkExp } from "../src/work";
import ProjectExp from "../src/project";
import { Achieve } from "../src/achievements";
import { FiMail } from "react-icons/fi";
import { MdCall } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <img
        className="aboutimage"
        src="../IMG_20200514_152434.jpg"
        alt="loading"
      />
      <h1 id="name">Sagar Chandore</h1>
      <h4 id="name1">Full Stack Javascript Developer</h4>

      <div className="workbutton">
        <Row xs="auto">
          <Col>
            <WorkExp />
          </Col>
          &nbsp;
          <Col>
            <ProjectExp />
          </Col>
          &nbsp;
          <Col>
            <Achieve />
          </Col>
        </Row>
      </div>
      <div className="workbutton1">
        <Row xs="auto">
          <Col>
            <a
              href=" https://drive.google.com/file/d/1LvS-Ht-jHFr1L3vNJhWHkcLYONUIu5qm/view"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="info">Resume</Button>
            </a>
          </Col>
        </Row>
      </div>
      <div className="links">
        <Row xs="auto">
          <Col>
            <a
              href=" https://github.com/Sagar9081/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="github">
                <BsGithub />
              </i>
            </a>
          </Col>
          <Col>
            <a href="mailto:sagarch9081@gmail.com" target="-blank">
              <i className="mail">
                <FiMail />
              </i>
            </a>
          </Col>
          <Col>
            <a href="tel:8830558357" target="-blank">
              <i className="call">
                <MdCall />
              </i>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
