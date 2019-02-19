import React, { useState, useEffect } from "react";
import EventList from "./event-list";
import FollowedOrgs from "./followed-organizations";
import CreateOrgForm from "./creat-org-form";
import M from "materialize-css";
import { API_BASE_URL } from "../config";

export default function UserDashboard(props) {
  const [showView, setView] = useState(<EventList />);

  const logoutUser = async () => {
    await localStorage.removeItem("jwtToken");
    props.history.push("/");
  };

  document.addEventListener("DOMContentLoaded", function() {
    let elems = document.querySelectorAll(".sidenav");
    let instances = M.Sidenav.init(elems, {
      draggable: true
    });
  });
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function() {
      let elems = document.querySelectorAll(".sidenav");
      let instances = M.Sidenav.init(elems, {
        draggable: true
      });
    });
  }, []);

  // setView((<EventList />, 'url-string')=>(component,url){ ... } );
  return (
    <div className="dashboard center container">
      <ul id="slide-out" className="sidenav sidenav-fixed">
        <li>
          <div className="user-view">
            <div className="background">
              <img src="http://lorempixel.com/300/300" alt="user background" />
            </div>
            <a href="#user">
              <img
                className="circle"
                src="http://lorempixel.com/150/150"
                alt="user profile"
              />
            </a>
            <a href="#name">
              <span className="white-text name">Johnny User</span>
            </a>
            <a href="#email">
              <span className="white-text email">johnnyquest@test.com</span>
            </a>
          </div>
        </li>

        <li>
          <a
            href="events"
            className="waves-effect"
            onClick={() => setView(<EventList />)}
          >
            <i className="material-icons">assignment</i>My Events
          </a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a
            className="waves-effect"
            onClick={() => setView(<CreateOrgForm />)}
          >
            <i className="material-icons">create</i>Create Organization
          </a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="waves-effect" onClick={() => setView(<FollowedOrgs />)}>
            <i className="material-icons">subscriptions</i>Followed
            Organizations
          </a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a
            className="waves-effect"
            onClick={() => props.history.push("/search")}
          >
            <i className="material-icons">search</i>Search Tool
          </a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="waves-effect" onClick={logoutUser}>
            <i className="material-icons">power_settings_new</i>Logout
          </a>
        </li>
      </ul>
      <a
        href="#"
        data-target="slide-out"
        className="sidenav-trigger hide-on-large-only"
      >
        <i className="material-icons">menu</i>
        {/* you really shouldnt click me */}
      </a>
      <div className="container center">{showView}</div>
    </div>
  );
}
