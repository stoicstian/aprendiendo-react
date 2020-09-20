import React from "react";
import { Card, Button } from "react-bootstrap";

const Post = (props) => {
  return (
    <Card style={{ width: "50%", margin: "0 auto" }} className="mb-3">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button onClick={props.likePost} variant="primary" className="mr-1">
          {props.liked ? "Unlike" : "Like"}
        </Button>
        <Button onClick={props.delete} variant="danger" className="ml-1">
          Delete
        </Button>
      </Card.Body>
      <Card.Text>{props.likes}</Card.Text>
    </Card>
  );
};

export default Post;
