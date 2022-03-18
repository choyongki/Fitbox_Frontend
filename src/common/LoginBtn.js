import React, { Component } from "react";
import LoginModal from "../pages/LoginModal";

class LoginBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <button onClick={this.openModal}>Modal Open</button>
        <LoginModal isOpen={this.state.isModalOpen} close={this.closeModal} />
      </>
    );
  }
}

export default LoginBtn;