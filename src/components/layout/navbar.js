import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const NavBar = props => {
    const [navClass, setNavClass] = useState("false");
    let token = localStorage.getItem("jwtToken");
    let navRight, sideNav;

    if (token) {

        navRight = (
            <ul>
                <li>
                    <a
                        className='nav-tag'
                        href='#dashboard'
                        onClick={() => props.history.push("/dashboard")}>
                        Dashboard
                    </a>
                </li>

                <li>
                    <a
                        className='nav-tag'
                        href='#createorganization'
                        onClick={() => props.history.push("/createorgform")}>
                        Create Org
                    </a>
                </li>

                <li>
                    <a
                        className='nav-tag'
                        href='#search'
                        onClick={() => props.history.push("/search")}>
                        Search
                    </a>
                </li>

                <li>
                    <a
                        className='nav-tag'
                        href='#logout'
                        onClick={() => logoutUser()}>
                        Logout
                    </a>
                </li>
            </ul>
        );
        sideNav = (
            <a
                onClick={e => {
                    e.preventDefault();
                    setNavClass("true");
                }}
                href='#menu'
                id='hamburger'
                data-target='slide-out'
                className='sidenav-trigger'
            >
                <i className='material-icons hamburger'>menu</i>
            </a>
        );
    }

    const logoutUser = async () => {
        await localStorage.removeItem("jwtToken");
        props.history.push("/");
    };

    return (
        <React.Fragment>
            <section className="header-container">
                <header>
                    <span className="logo">
                        <a href="/">
                            <h1>
                                <span className='logo-style-one'>Help</span>
                                <span className='logo-style-two'>full</span>
                            </h1>
                        </a>
                    </span>

                    <nav>
                        {navRight}
                    </nav>
                    {sideNav}
                </header>
            </section>

            <ul id='mySidenav' className={navClass}>

                <a href="#closemenu" className="closebtn"
                    onClick={e => {
                        e.preventDefault();
                        setNavClass("false");
                    }}
                >
                    &times;
                </a>

                <li>
                    <a
                        href='#dashboard'
                        // className='waves-effect waves-teal'
                        onClick={() => {
                            props.history.push("/dashboard");
                            setNavClass("false");
                        }}
                    >
                        <i className='material-icons'>dashboard</i>Dashboard
                    </a>
                </li>
                <li>
                    <div className='divider' />
                </li>
                <li>
                    <a
                        href='#createorganization'
                        // className='waves-effect'
                        onClick={() => {
                            props.history.push("/createorgform")
                            setNavClass("false");
                        }}
                    >
                        <i className='material-icons black-text'>create</i>
                        Create Org
                    </a>
                </li>
                <li>
                    <div className='divider' />
                </li>
                <li>
                    <a
                        href='#search'
                        // className='waves-effect'
                        onClick={() => {
                            props.history.push("/search")
                            setNavClass("false");
                        }}
                    >
                        <i className='material-icons'>search</i>Search Tool
                    </a>
                </li>
                <li>
                    <div className='divider' />
                </li>
                <li>
                    <a
                        href='#logout'
                        // className='waves-effect'
                        onClick={() => {
                            logoutUser()
                            setNavClass("false");
                        }}
                    >
                        <i className='material-icons'>power_settings_new</i>
                        Logout
                    </a>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default withRouter(NavBar);
