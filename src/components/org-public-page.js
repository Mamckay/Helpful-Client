import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import UserCanRateOrg from "./user-can-rate-org";
// import UserComments from "./usercomments";
import "../stylesheets/org-public-page.css";
import getOrgs from "../utils/fetchOrg";
import getOrgEvents from "../utils/fetchEvent";
import { PointMap } from "./map";

export default function OrgPublicPage(props) {
    const [following, setFollowing] = useState(false);
    const [followData, setFollowdata] = useState(null);
    const [orgs, setOrgs] = useState(null);
    const [orgEvents, setOrgEvents] = useState(null);
    const [orgMap, setOrgMap] = useState(null);

    const orgId = props.match.params.id;

    const fetchData = props => {
        getOrgs(orgId).then(res => setOrgs(res.data));
    };
    const fetchEvents = () => {
        getOrgEvents(orgId).then(res => {
            let newList = res.data.map((event, index) => {
                return (
                    <li key={index}>
                        <a href={`/event/${event.id}`}>{event.name}</a>
                    </li>
                );
            });
            setOrgEvents(newList);
        });
    };

    const generateFollowButton = () => {
        if (!following) {
            return (
                <button
                    className='follow-button button-center event-public-rsvp-button'
                    onClick={() => followOrg()}>
                    Follow
                </button>
            );
        } else if (following) {
            return (
                <button
                    className='unfollow-button button-center event-public-rsvp-button'
                    onClick={() => unFollowOrg()}>
                    Unfollow
                </button>
            );
        }
    };

    // check to see if user is following this org or not, and call generateFollowButton()
    const fetchFollow = async () => {
        await axios(`${API_BASE_URL}/follow/following/${orgId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        }).then(res => {
            if (res.data) {
                setFollowing(true);
                setFollowdata(res.data);
            } else if (!res.data) {
                setFollowing(false);
            }
        });
    };

    // follow an organization
    const followOrg = async () => {
        await axios({
            method: "post",
            url: `${API_BASE_URL}/follow`,
            data: { orgId },
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        }).then(res => {
            if (res.status === 200) {
                setFollowing(true);
                setFollowdata(res.data);
            }
        });
    };

    const unFollowOrg = async () => {
        await axios({
            method: "delete",
            url: `${API_BASE_URL}/follow`,
            data: {
                followId: followData.id,
            },
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        }).then(res => {
            if (res.status === 200) {
                setFollowing(false);
            }
        });
    };

    if (orgMap === null) {
        if (orgs) {
            setOrgMap(
                <PointMap
                    marker={orgs}
                    isMarkerShown
                    googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            );
        }
    }

    useEffect(() => {
        fetchFollow();
        fetchData(props);
        fetchEvents();
    }, [props.match.params.id]);

    if (orgs) {
        return (
            <section className='org-public-page containerB'>

                {/* <div className='org-public-content container'> */}
                <div className='row'>
                    <div className='org-public-text-area'>
                        <h2 className='text-center'>{orgs.name}</h2>
                        <img
                            alt='Organization Logo'
                            className='responsive-img'
                            src={orgs.imgUrl}
                        />
                        {/* <UserComments/> */}
                        {/*orgMap*/}
                        <div className='event-public-container'>
                            <div className='event-public-description'>
                                <div className='event-public-date'><span>Mission:</span> {orgs.description}</div>
                                <div className='event-public-date'><span>Where:</span> {orgs.location}</div>
                                <div className='event-public-date'><span>Contact:</span> {orgs.contact}</div>
                                <div>
                                    <span className='logo-style-two'>Events List: </span>{" "}
                                    <ul className='reset-ul'>{orgEvents}</ul>

                                </div>
                                <div className='button-center'>
                                    {generateFollowButton()}
                                </div>
                                <UserCanRateOrg orgId={orgId} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    return (
        <section>
            <p>Loading...</p>
        </section>
    );
}
