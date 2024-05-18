import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Home = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column">
        <div className="h-25 w-100 bg-white px-4">
          <h1>Online Chatting</h1>
        </div>
        <div className="bg-white p-4 m-2">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Sign In">
              <SignIn />
            </Tab>
            <Tab eventKey="profile" title="Sign Up">
              <SignUp />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Home;
