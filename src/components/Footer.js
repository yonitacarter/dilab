import React from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components";
import { Subscribe } from "./Subscribe";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import SocialButtonsPage from "./SocialButtonsPage";

var style = {
  backgroundColor: "#707B7C",
  color: "#F2F4F4",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "relative",
  left: "0",
  bottom: "0",
  height: "210px",
  width: "100%",
};

var layout = {
  display: "block",
  padding: "20px",
  height: "100px",
  width: "100%",
};

const StyledLink = styled(Nav)`
  a:visited {
    text-decoration: none;
    background-color: transparent;
    color: #faf5f2;
  }
  a:link {
    text-decoration: none;
    background-color: transparent;
    color: #faf5f2;
  }
  color: #faf5f2;
  text-decoration: none;
  position: relative;
`;

const Footer = () => {
  return (
    <MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-left text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">diLab on Social Media</h5>
            {/* <p>
              <em>“The value of an idea lies in the using of it.“</em>
              <br />
              <small>Thomas Edison</small>
            </p> */}

            <SocialButtonsPage />

            {/* <MDBIcon fab icon="facebook-f" />
            <MDBIcon fab icon="twitter" /> */}
            <br />
            <p>
              {" "}
              <br />
            </p>
          </MDBCol>
          <MDBCol md="4">
            <StyledLink>
              <Nav.Link href="/#/terms">
                <em>Terms & Conditions</em>
              </Nav.Link>
              <Nav.Link href="/#/about">
                <em>About us</em>
              </Nav.Link>
              <Nav.Link href="/#/contact">
                <em>Contact us</em>
              </Nav.Link>
            </StyledLink>
          </MDBCol>

          <MDBCol md="4">
            <h5 className="text-uppercase">Newsletter</h5>
            <Subscribe />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="#"> dilab.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;

// const Footer = () => (
//   <div>
//     {" "}
//     <div style={layout} className="fixed-bottom"/>
//     <footer style={style} className="page-footer font-small blue pt-4">
//       <div className="container-fluid text-center text-md-left">
//         <div className="row">
//           <div className="col-md-3 mt-md-0 mt-3">
//             <div className="footer-copyright text-center py-3">
//               © 2021 Copyright:
//               <a href="https://dilab.com/"> dilab.com</a>
//             </div>
//           </div>

//           <hr className="clearfix w-100 d-md-none pb-0" />

//           <div className="col-md-3 mb-md-0 mb-3">
//             <h5 className="text-uppercase">Links</h5>
//             {/* <ul className="list-unstyled"> */}
//             {/* <li> */}
//             <StyledLink>
//               <Nav.Link href="/terms">Terms & Conditions</Nav.Link>
//             </StyledLink>
//             {/* </li> */}
//             {/* <li><a href="/contact">Contact us</a></li> */}

//             {/* </ul> */}
//           </div>

//           <div className="col-md-3 mb-md-0 mb-3">
//             <h5 className="text-uppercase">Newsletter</h5>

//             <Subscribe />
//           </div>
//         </div>
//       </div>
//     </footer>{" "}
//   </div>
// );

// export default Footer;
