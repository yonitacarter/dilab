import React from "react";
import { Button } from "react-bootstrap";

function handleClick(e) {
  alert("Clicked!");
}

export const ReusableButton = (props) => {
  return (
    <div>
      <Button variant="light" size="sm" block onClick={handleClick}>
        {props.title}
      </Button>{" "}
    </div>
  );
};
