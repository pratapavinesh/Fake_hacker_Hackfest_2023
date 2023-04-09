
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="">
              Fake Hackers
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/admin/about">
              About Us
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href=""
            target="_blank"
          >
            Fake Hackers
          </a>{" "}
          for a better Finance.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
