import React from "react";
import {Card} from "react-bootstrap"
function user({el}) {
  return (
    <Card style={{ width: "18rem",marginBottom:"50px",marginTop:"50px",backgroundColor:"#adb5bd" }}>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{el.username}</Card.Subtitle>
        <Card.Text>
         {el.email}
        </Card.Text>
        <Card.Text>
         {el.phone}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default user;
