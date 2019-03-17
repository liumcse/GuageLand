import React from "react";
import { Link } from "react-router-dom";

const PageProfile = () => (
  <div>
    <div>Hello, World!</div>
    <div>This is your profile page!</div>
    <div>🚀</div>
    <Link to="/profile/tasks">GO TO TASKS</Link>
  </div>
);

export default PageProfile;
