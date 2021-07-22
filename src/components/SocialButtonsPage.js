import React from "react";
import { MDBIcon, MDBContainer } from "mdbreact";

const SocialButtonsPage = () => {
  return (
    <MDBContainer>
      <MDBIcon fab size="lg" icon="facebook-f" style={{ padding: "10px" }} />

      <MDBIcon fab size="lg" icon="twitter" style={{ padding: "10px" }} />

      <MDBIcon fab size="lg" icon="linkedin-in" style={{ padding: "10px" }} />

      <MDBIcon fab size="lg" icon="instagram" style={{ padding: "10px" }} />

      <MDBIcon fab size="lg" icon="pinterest" style={{ padding: "10px" }} />

      <MDBIcon fab size="lg" icon="youtube" style={{ padding: "10px" }} />
    </MDBContainer>
  );
};

export default SocialButtonsPage;
