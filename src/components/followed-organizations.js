import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { Link } from "react-router-dom";
import OrganizationCard from "./organization-card";
import "../stylesheets/followed-orgs.css";

export default function FollowedOrgs(props) {

    // PRODUCTION TODO --> currently getting all orgs, need to refactor to
    // get only user followed orgs

    const [orgs, setOrgs] = useState([]);

    const fetchData = async () => {
        const request = await axios(`${API_BASE_URL}/follow/user`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        });
        setOrgs(request.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const followedOrgCards = orgs.map((org, index) =>
        org.organizationId ? (
            <OrganizationCard
                key={index}
                history={props.history}
                org={org.organizationId}
            />
        ) : null
    );

    if (orgs === null || orgs.length === 0) {
        return (
            <section className='followed-orgs-container'>
                <h2>Followed Organizations</h2>
                <p>Looks like you haven't followed any organizations yet...</p>
                <Link className='dashboard-link' to='/search'> Search for Organizations near you!</Link>
            </section>
        );
    }

    return (
        <React.Fragment>
            <section className='followed-orgs-container'>
                <h2 className='dashboard-title'>Followed Organizations</h2>
                <div className='event-list'>{followedOrgCards}</div>
            </section>
        </React.Fragment>
    );
}
