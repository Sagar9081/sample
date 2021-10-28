import React from "react";
import "./index.css";

import {
  SiReact,
  SiBootstrap,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostman,
} from "react-icons/si";
import { DiMongodb, DiMysql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";

export class About extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="hometag">
          <p>
            <span className="p1">Hello !</span>
            <br />
            <span className="p2"> I'm Sagar</span>
            <br />
            <span className="p3">
              {" "}
              I'm a <span className="full">full stack</span> developer.
            </span>
            <br />
            <span className="p4">
              {" "}
              I specialize in developing and deploying responsive websites and
              web applications.
            </span>
          </p>
        </div>
        &nbsp;
        <div>
          <p className="hometag1">Skills </p>
        </div>
        <div className="skills">
          <Row xs="auto">
            <Col>
              {" "}
              <div className="reactlogo">
                <i className="reactlogo1">
                  <SiReact />
                </i>
                React
              </div>
            </Col>

            <Col>
              {" "}
              <div className="jslogo">
                <i className="jslogo1">
                  <SiJavascript />
                </i>
                JavaScript
              </div>{" "}
            </Col>

            <Col>
              {" "}
              <div className="bootstrap">
                <i className="bootstrap1">
                  <SiBootstrap />
                </i>
                Bootstrap
              </div>
            </Col>

            <Col>
              {" "}
              <div className="node">
                <i className="icon1">
                  <FaNodeJs />
                </i>
                Node.Js
              </div>
            </Col>
          </Row>
          &nbsp;
          <Row xs="auto">
            <Col>
              <div className="icon">
                Express
                <i className="icon1">
                  <FaNodeJs />
                </i>
              </div>
            </Col>

            <Col>
              {" "}
              <div className="icon">
                MongoDB
                <i className="icon1">
                  <DiMongodb />
                </i>
              </div>
            </Col>

            <Col>
              <div className="mysql">
                MySQL
                <i className="mysql1">
                  <DiMysql />
                </i>
              </div>
            </Col>

            <Col>
              {" "}
              <div className="html">
                <i className="html1">
                  <SiHtml5 />
                </i>
                HTML
              </div>
            </Col>
          </Row>
          &nbsp;
          <Row xs="auto">
            <Col>
              <div className="css">
                <i className="css1">
                  <SiCss3 />
                </i>
                CSS
              </div>
            </Col>

            <Col>
              {" "}
              <div className="postman">
                <i className="postman1">
                  <SiPostman />
                </i>
                Postman
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default About;
