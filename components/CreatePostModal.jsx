import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CreatePostModal = ({
  showCreateModal,
  setShowCreateModal,
  closeModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });
  return (
    <Modal show={showCreateModal} onHide={closeModal} centered size="lg">
      <Modal.Header>
        <Modal.Title>Create New Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              {...register("title", { required: "Required Field" })}
              type="text"
              placeholder="Enter title"
            />
            <p className="error-msg">{errors.title?.message}</p>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register("content", {
                required: "Required Field",
                maxLength: {
                  value: 150,
                  message: "Max Length must be 150",
                },
              })}
              type="text"
              placeholder="Enter content"
            />
            <p className="error-msg">{errors.content?.message}</p>
          </Form.Group>

          <div className="btn-container">
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add Post
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreatePostModal;
