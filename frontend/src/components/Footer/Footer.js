/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
             <h5>AIOT - All in one Trade</h5>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.creative-tim.com/presentation?ref=bdr-user-archive-footer">
              About Us
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href="https://github.com/pratapavinesh/Fake_hacker_Hackfest_2023"
            target="_blank"
          >
           Fake_Hacker
          </a>{" "}
          for a better Finance.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
