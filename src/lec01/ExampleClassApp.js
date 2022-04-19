import React from "react";
import UserDetails from "./UserDetails";
class ExampleClassApp extends React.Component {
  constructor() {
    console.log("CONSTRUCTOR");
    super();
    this.state = {
      name: "dina",
      position: "developer",
    };
  }
  componentDidMount() {
    console.log("DID Mount");
  }
  componentDidUpdate() {
    console.log("DID UPDATE");
  }
  componentWillUnmount() {
    console.log("DID UNMOUT");
  }
  changeName = (name) => {
    console.log("clicked");
    this.setState({
      name: name,
    });
  };
  render() {
    console.log("RENDER");
    return (
      <>
        <h1>Hello From Class Component</h1>
        {/* <UserDetails name={this.state.name} position={this.state.position}/> */}
        <UserDetails UserData={this.state} />

        <button type="button" class="btn btn-primary"onClick={() => this.changeName("Ahmed")}>Change Name</button>
        <button type="button" class="btn btn-secondary"onClick={() => this.changeName("Reda")}>Change Name</button>
      </>
    );
  }
}
export default ExampleClassApp;
