import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./navbar.css";
// import M from "materialize-css";

const NavBar = props => {
    let token = localStorage.getItem("jwtToken");
    let navRight, sideNav;
    //     <section class="header-container">
    //   <header>
    //     <span class="logo"><h1><span class='logo-style-one'>Help</span><span class='logo-style-two'>full</span></h1></span>
    //     <nav>
    //       <ul>
    //         <li><a href='./dashboard.html'>Dashboard</a></li>
    //         <li><a href="./creategroup">Create Group</a></li>
    //         <li><a href="./followed">Followed</a></li>
    //         <li><a href="./Search">Search</a></li>
    //         <li><a href="./myevents">My Events</a></li>
    //         <li><a href="./logout">Logout</a></li>
    //       </ul>
    //     </nav>
    //   </header>
    // </section>
    if (token) {
        navRight = (
            <ul
                id='nav-mobile'
                className='right hide-on-med-and-down text-black'>
                <li>
                    <a
                        href='#dashboard'
                        className=''
                        onClick={() => props.history.push("/dashboard")}>
                        Dashboard
                    </a>
                </li>

                <li>
                    <a
                        href='#events'
                        className=''
                        onClick={() => props.history.push("/events")}>
                        My Events
                    </a>
                </li>

                <li>
                    <a
                        href='#createorganization'
                        className=''
                        onClick={() => props.history.push("/createorgform")}>
                        Create Organization
                    </a>
                </li>

                <li>
                    <a
                        href='#meetup'
                        className=''
                        onClick={() => props.history.push("/create-meetup")}>
                        Create Meetup
                    </a>
                </li>

                <li>
                    <a
                        href='#createdorganizations'
                        className=''
                        onClick={() => props.history.push("/createdorgs")}>
                        My Created Organizations
                    </a>
                </li>

                <li>
                    <a
                        href='#followedorganizations'
                        className=''
                        onClick={() => props.history.push("/followedorgs")}>
                        Followed
                    </a>
                </li>
                <li>
                    <a
                        href='#search'
                        className=''
                        onClick={() => props.history.push("/search")}>
                        Search Tool
                    </a>
                </li>

                <li>
                    <a
                        href='#logout'
                        className=''
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
            <div className='navbar-fixed'>
                <nav className='white' role='navigation'>
                    <div className='container'>
                        <div className='nav-wrapper'>
                            <div className='logo-container'>
                                <a href='/' className=''>
                                    <img
                                        className='logo hide-on-med-and-down'
                                        id='logo'
                                        src='/icon.png'
                                        alt='helpful'
                                    />
                                </a>
                                <a href='/' className='brand-logo black-text'>
                                    Helpful
                                </a>
                            </div>
                            {navRight}
                        </div>
                    </div>
                    {sideNav}
                </nav>
            </div>

            {/* <ul id='slide-out' className='sidenav'>
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
                        className=''
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
            </ul> */}
        </React.Fragment>
    );
};

export default withRouter(NavBar);
