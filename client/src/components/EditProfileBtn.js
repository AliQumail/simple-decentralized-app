import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./styles.css";

const EditProfileBtn = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [quote, setQuote] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (name !== props.name && name !== "") {
      await props.contract.setName(name);
    }
    if (bio !== props.bio && bio !== "") {
      await props.contract.setBio(bio);
    }
    if (quote !== props.quote && quote !== "") {
      await props.contract.setQuote(quote);
    }
    if (country !== props.country && country !== "") {
      await props.contract.setCountry(country);
    }
  };

  return (
    <div className="edit-btn">
      <Button variant="secondary" className="btn-lg" onClick={handleShow}>
        Edit My Profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="edit-btn">Edit My Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="edit-btn" onSubmit={handleSubmit}>
            <div class="form-group mt-2">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="form-group mt-4">
              <label for="exampleInputEmail1">Country</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div class="form-group mt-4">
              <label for="exampleInputEmail1">Bio</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            <div class="form-group mt-4">
              <label for="exampleInputEmail1">Quote</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter a Quote"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
              />
            </div>

            <button type="submit" class="btn btn-primary mt-4">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditProfileBtn;
