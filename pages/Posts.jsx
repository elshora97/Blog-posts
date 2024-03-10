import React from "react";
import PostCard from "../components/PostCard";
import { Button, Container } from "react-bootstrap";

const Posts = () => {
  const posts = [
    {
      id: 456,
      title: "Sports",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar, odio porta auctor gravida, purus augue accumsan tortor, cursus rhoncus magna felis ac turpis. Sed porttitor dui sit amet risus suscipit, ut lobortis nisl sodales. Sed ut rhoncus sem, sit amet gravida tortor. Nulla eget velit accumsan, eleifend quam finibus, lacinia metus",
      createdAt: "20/10/2024",
    },
    {
      id: 259,
      title: "Sports",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar, odio porta auctor gravida, purus augue accumsan tortor, cursus rhoncus magna felis ac turpis. Sed porttitor dui sit amet risus suscipit, ut lobortis nisl sodales. Sed ut rhoncus sem, sit amet gravida tortor. Nulla eget velit accumsan, eleifend quam finibus, lacinia metus",
      createdAt: "20/10/2024",
    },
    {
      id: 888,
      title: "Sports",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar, odio porta auctor gravida, purus augue accumsan tortor, cursus rhoncus magna felis ac turpis. Sed porttitor dui sit amet risus suscipit, ut lobortis nisl sodales. Sed ut rhoncus sem, sit amet gravida tortor. Nulla eget velit accumsan, eleifend quam finibus, lacinia metus",
      createdAt: "20/10/2024",
    },
  ];

  return (
    <Container className="mt-5">
      <header>
        <h3>User Name</h3>
        <Button>Create Post</Button>
      </header>
      <div className="mb-5">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </Container>
  );
};

export default Posts;
