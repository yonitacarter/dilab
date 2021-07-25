import React from "react";
import ReactPlayer from "react-player";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import { MDBIcon } from "mdb-react-ui-kit";

const Styles = styled.div`
    .player-wrapper {
        position: relative;
        // padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
        
    }
    
    .react-player {
        position: relative;
        padding: 50px,
        top: 0;
        // left: 0;
    }

`;

function myFunction(id) {
  const x = document.getElementById(id).innerHTML;

  document.getElementById(id).innerHTML =
    x == "Follow" ? "Following" : "Follow";
}

export const VideoPost = (props) => {
  return (
    <Styles>
      <Container>
        <Row>
          <div className="player-wrapper">
            <ReactPlayer
              url={props.url}
              className="react-player"
              playing
              width="450px"
              height="253px"
              controls={false}
              muted={true}
            />
          </div>

          <Row>
            <Col>
              <Button
                id={props.id}
                floating
                tag="a"
                size="sm"
                variant="info"
                onClick={() => myFunction(props.id)}
                style={{ width: "170px" }}
              >
                Follow
              </Button>{" "}
              <Button floating tag="a" size="sm" variant="light">
                <MDBIcon fas icon="heart" color="danger" size="lg" />
              </Button>{" "}
              <Button variant="warning" size="sm">
                <MDBIcon fas icon="comment-slash" />
              </Button>{" "}
              <Button variant="success" size="sm">
                <MDBIcon fas icon="share-alt" />
              </Button>{" "}
            </Col>
          </Row>
        </Row>
      </Container>
    </Styles>
  );
};
