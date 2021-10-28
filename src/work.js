import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

export function WorkExp() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="success" onClick={() => setShow(true)}>
        Work Experience
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Button variant="danger" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Header as="h5">Work Experience</Card.Header>
            <Card.Body>
              <Card.Title> Full Stack JavaScript Trainee</Card.Title>
              <Card.Text> GUVI GEEK NETWORK PRIVATE LIMITED</Card.Text>
              <Card.Text>
                <p>(16 April 2021 – To till date) </p>
                <p>• Created simple projects with HTML, CSS and JavaScript.</p>
                <p>
                  •Participated in hackathons with task to fetch data from
                  YouTube API and Ticket booking app with MERN stack.
                </p>
                <p>
                  • Developing frontend website architecture. • Designing user
                  interaction on web pages.
                </p>
                <p>• Developing Back-end website application.</p>
                <p> • Creating server and database for functionality.</p>
                <p>
                  • Designing and developing APIs using Node.Js and Express.Js.
                </p>
                <p> • Ensuring responsiveness of application.</p>
                <p>
                  • Created sample database for storage purpose with the help of
                  MySQL and MongoDB (NoSQL).
                </p>
                <p>
                  • Connected Mongo Atlas cloud database to the backend
                  application.
                </p>
                <p> • Developed many simple UI and CRUD App in react.</p>
              </Card.Text>
              <hr />
              <Card.Title>Project Engineer</Card.Title>
              <Card.Text>ELECTRO VECTOR ENTERPRISES </Card.Text>
              <Card.Text>
                <p>(10 June 2018 – 20 March 2021) </p>
                <p>
                  • Responsible for maintain, monitoring and performing
                  preventive maintenance of all the critical and Non-critical
                  equipment’s such as fire & life safety equipment’s, UPS,
                  Generators, HT-LT Panel, Synchronizing panel, Fire Alarm
                  system, BMS System, etc.
                </p>
                <p>
                  • Responsible for preparation of critical spare list for all
                  installation as per manufacturer’s recommendation and plan for
                  the inventory where the Maintenance is carried out with
                  in-house team.
                </p>
                <p>
                  • Implement and oversee the preventive maintenance programme
                  to reduce risk of sudden failures of critical equipment’s.
                </p>
                <p>
                  • Maintain the logbooks, checklist, and ppm schedules for all
                  M&E installations.
                </p>
                <p>
                  {" "}
                  • Maintaining all equipment’s in healthy condition and
                  providing technical support to the electricians. Maintaining
                  structure by carrying out regular repairs/maintenance.{" "}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}
