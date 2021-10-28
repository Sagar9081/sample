import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

export function ProjectExp() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="warning" onClick={() => setShow(true)}>
        Project Experience
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
            <Card.Header as="h5">Project Experience</Card.Header>
            <Card.Body>
              <Card.Title> Customer Relationship Management</Card.Title>
              <Card.Text>
                <p>
                  • First step to enter in this application you have to register
                  yourself after that you can login into software. In this
                  project ticket system is created. If client have any issue,
                  they can generate ticket in this application.
                </p>
                <p>
                  • Ticket search menu is created in ticket list option. For
                  reply to ticket or close ticket option directly click on
                  ticket subject. After Resolved the client issue they can close
                  the ticket.
                </p>
                <p>
                  • To add ticket and close ticket crud operation is performed.
                </p>
                <p>
                  • Technologies used: 1. React.Js 2. React Router Dom 3.React
                  Bootstrap 4. Node.Js 5. Express.Js 6. Mongo Atlas 7. Postman
                  API 8.NPM Packages.
                </p>
              </Card.Text>
              <a
                href="https://crm-tickets.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="secondary">Project Link</Button>
              </a>

              <hr />
              <Card.Title>Login Authentication</Card.Title>
              <Card.Text>
                <p>
                  • The main objective of the Login Authentication System is to
                  manage the details of username,Permission and Authorization,
                  Email, Changing Password, Password.
                </p>
                <p>
                  • Login authentication system generates the web token after
                  registration and login which valids for 10 minutes only.
                </p>
                <p>
                  • It also manage the reset password for registered users.If
                  user forget the password then it can be reset only with
                  registered and valid E-mail Id.
                </p>
                <p>
                  • Backend sends the reset link on registered Mail Id for reset
                  the password.
                </p>
                <p>
                  • Technologies used: 1. React.Js 2. React Router Dom 3.React
                  Bootstrap 4. Node.Js 5. JsonWebToken 6. Nodemailer 7.
                  Express.Js 8. Mongo Atlas 9. Postman API 10.NPM Packages.
                </p>
              </Card.Text>
              <a
                href="https://login-auth12.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="secondary">Project Link</Button>
              </a>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectExp;
