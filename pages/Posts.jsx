import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { Button, Container } from "react-bootstrap";
import { posts } from "../data";
import CreatePostModal from "../components/CreatePostModal";

const Posts = () => {
  const [posts, setposts] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const openModal = () => setShowCreateModal(true);
  const closeModal = () => setShowCreateModal(false);

  const loadLocalstorage = () => {
    const { posts } = JSON.parse(localStorage.getItem("posts"));
    setposts(posts);
  };

  useEffect(() => {
    loadLocalstorage();
  }, []);

  return (
    <>
      {showCreateModal && (
        <CreatePostModal
          showCreateModal={showCreateModal}
          setShowCreateModal={setShowCreateModal}
          closeModal={closeModal}
        />
      )}

      <Container className="mt-5">
        <header>
          <h3>User Name</h3>
          <Button onClick={openModal}>Create Post</Button>
        </header>

        <div className="mb-5">
          {posts.length == 0 && <div> there is no posts</div>}
          {posts.length > 0 &&
            posts.map((post) => <PostCard post={post} key={post.id} />)}
        </div>
      </Container>
    </>
  );
};

export default Posts;
