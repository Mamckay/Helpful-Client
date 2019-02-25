import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./navbar.css";

const NavBar = props => {
    let token = localStorage.getItem("jwtToken");
    let navRight, sideNav;
    if (token) {
        navRight = (
            <ul id='nav-mobile' className=''>
                <li>
                    <a
                        href='#dashboard'
                        className='waves-effect waves-teal'
                        onClick={() => props.history.push("/dashboard")}>
                        Dashboard
                    </a>
                </li>

                <li>
                    <a
                        href='#events'
                        className='waves-effect waves-teal'
                        onClick={() => props.history.push("/events")}>
                        My Events
                    </a>
                </li>

                <li>
                    <a
                        href='#createorganization'
                        className='waves-effect waves-teal'
                        onClick={() => props.history.push("/createorgform")}>
                        Make Group
                    </a>
                </li>

                <li>
                    <a
                        href='#meetup'
                        className='waves-effect waves-teal'
                        onClick={() => props.history.push("/create-meetup")}>
                        Make Meetup
                    </a>
                </li>

                <li>
                    <a
                        href='#createdorganizations'
                        className='waves-effect waves-teal'
                        onClick={() => props.history.push("/createdorgs")}>
                        My Groups
                    </a>
                </li>

                <li>
                    <a
                        href='#followedorganizations'
                        className='waves-effect waves-teal'
                        onClick={() => props.history.push("/followedorgs")}>
                        Followed
                    </a>
                </li>
                <li>
                    <a
                        href='#search'
                        className='waves-effect waves-teal'
                        onClick={() => props.history.push("/search")}>
                        Search Tool
                    </a>
                </li>

                <li>
                    <a
                        href='#logout'
                        className='waves-effect waves-teal'
                        onClick={() => logoutUser()}>
                        Logout
                    </a>
                </li>
            </ul>
        );
        sideNav = (
            <a
                href='#menu'
                id='hamburger'
                data-target='slide-out'
                className='sidenav-trigger hide-on-large-only text-teal darken-4'>
                <i className='material-icons hamburger'>menu</i>
            </a>
        );
    }

    const logoutUser = async () => {
        await localStorage.removeItem("jwtToken");
        props.history.push("/");
    };

    useEffect(() => {
        let elems = document.querySelectorAll(".sidenav");
        // let instances = M.Sidenav.init(elems, {});
        // return instances;
    }, []);
    return (
        <React.Fragment>
            <div className='navbar-container'>
                <nav role='navigation'>
                    <div className='logo-container'>
                        <a href='/' className=''>
                            <img
                                className='logo-img'
                                id='logo'
                                src='/icon.png'
                                alt='helpful'
                            />
                        </a>
                        <a href='/' className='brand-logo'>
                           <span id='logo1'> Help</span><span id='logo2'>full </span>
                        </a>
                    </div>
                    <div className='navRight'>{navRight}</div>
                    {/* {sideNav} */}
                </nav>
            </div>

            <ul id='slide-out' className='sidenav'>
                <li>
                    <div className='user-view'>
                        <div className='background'>
                            <img
                                src='http://lorempixel.com/300/300'
                                alt='user background'
                            />
                        </div>
                        <a href='#user'>
                            <img
                                className='circle'
                                src='http://lorempixel.com/150/150'
                                alt='user profile'
                            />
                        </a>
                        <a href='#name'>
                            <span className='white-text name'>Johnny User</span>
                        </a>
                        <a href='#email'>
                            <span className='white-text email'>
                                johnnyquest@test.com
                            </span>
                        </a>
                    </div>
                </li>

                <li>
                    <a
                        href='#dashboard'
                        className='waves-effect waves-teal'
                        onClick={() => props.history.push("/dashboard")}>
                        <i className='material-icons'>dashboard</i>Dashboard
                    </a>
                </li>
                <li>
                    <div className='divider' />
                </li>
                <li>
                    <a
                        href='#events'
                        className='waves-effect'
                        onClick={() => props.history.push("/event")}>
                        <i className='material-icons'>assignment</i>My Events
                    </a>
                </li>
                <li>
                    <div className='divider' />
                </li>
                <li>
                    <a
                        href='#createorganization'
                        className='waves-effect'
                        onClick={() => props.history.push("/createorgform")}>
                        <i className='material-icons black-text'>create</i>
                        Create Organization
                    </a>
                </li>
                <li>
                    <div className='divider' />
                </li>
                <li>
                    <a
                        href='#createmeetup'
                        className='waves-effect'
                        onClick={() => props.history.push("/create-meetup")}>
                        <i className='material-icons black-text'>create</i>
                        Create Meetup
                    </a>
                </li>
                <li>
                    <div className='divider' />
                </li>
                <li>
                    <a
                        href='#followedorganizations'
                        className='waves-effect'
                        onClick={() => props.history.push("/followedorgs")}>
                        <i className='material-icons'>subscriptions</i>Followed
                        Organizations
                    </a>
                </li>
                <li>
                    <div className='divider' />
                </li>
                <li>
                    <a
                        href='#search'
                        className='waves-effect'
                        onClick={() => props.history.push("/search")}>
                        <i className='material-icons'>search</i>Search Tool
                    </a>
                </li>
                <li>
                    <div className='divider' />
                </li>
                <li>
                    <a
                        href='#logout'
                        className='waves-effect'
                        onClick={() => logoutUser()}>
                        <i className='material-icons'>power_settings_new</i>
                        Logout
                    </a>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default withRouter(NavBar);
