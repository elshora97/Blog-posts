import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const PostCard = ({ post }) => {
  return (
    <div className="cards">
      <Card className="postCard">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
          <Button style={{ marginLeft: "1050px" }} variant="outline-primary">
            Edit Post
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          {post.createdAt}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PostCard;
