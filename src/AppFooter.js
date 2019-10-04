import React, { Component } from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";

class Appfooter extends Component {
  render() {
    return (
      <div className="fixed-bottom">
        <Navbar color="dark" dark>
          <Container>
            <NavbarBrand></NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Appfooter;
