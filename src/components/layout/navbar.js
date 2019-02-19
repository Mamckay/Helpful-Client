import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import EventList from "../event-list";
import FollowedOrgs from "../followed-organizations";
import CreateOrgForm from "../../components/creat-org-form";
import M from "materialize-css";

const NavBar = props => {
  const logoutUser = async () => {
    await localStorage.removeItem("jwtToken");
    props.history.push("/");
  };

  useEffect(() => {
    let elems = document.querySelectorAll(".sidenav");
    let instances = M.Sidenav.init(elems, {});
    return instances;
  }, []);
  return (
    <div className="navbar-fixed">
      <nav className="white" role="navigation">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo-container">
              <a href="/" className="">
                <img
                  className="logo hide-on-med-and-down"
                  id="logo"
                  src="/icon.png"
                  alt="helpful"
                />
              </a>
              <a href="/" className="brand-logo black-text">
                Helpful
              </a>
            </div>

            <ul
              id="nav-mobile"
              className="right hide-on-med-and-down text-black"
            >
              <li>
                <a
                  href="#events"
                  className="text-black"
                  onClick={() => props.history.push("/event")}
                >
                  My Events
                </a>
              </li>

              <li>
                <a
                  className="waves-effect"
                  onClick={() => props.history.push("/createorgform")}
                >
                  Create Organization
                </a>
              </li>

              <li>
                <a
                  className="waves-effect"
                  onClick={() => props.history.push("/followedorgs")}
                >
                  Followed
                </a>
              </li>
              <li>
                <a
                  className="waves-effect"
                  onClick={() => props.history.push("/search")}
                >
                  Search Tool
                </a>
              </li>

              <li>
                <a className="waves-effect" onClick={logoutUser}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul id="slide-out" className="sidenav">
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
            href="#events"
            className="waves-effect"
            onClick={() => props.history.push("/event")}
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
            onClick={() => props.history.push("/createorgform")}
          >
            <i className="material-icons black-text">create</i>Create
            Organization
          </a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a
            className="waves-effect"
            onClick={() => props.history.push("/followedorgs")}
          >
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
        id="hamburger"
        href="#"
        data-target="slide-out"
        className="sidenav-trigger hide-on-large-only text-teal darken-4"
      >
        <i className="material-icons hamburger">menu</i>
      </a>
    </div>
  );
};

export default withRouter(NavBar);
