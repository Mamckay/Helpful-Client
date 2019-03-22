import React, { useEffect, useState } from "react";
import axios from "axios";
import OrganizationCard from "./organization-card";
import { API_BASE_URL } from "../config";
import { Link } from 'react-router-dom';

import "../stylesheets/created-organizations.css";

export default function CreatedOrgs(props) {

    const [orgs, setOrgs] = useState([]);

    const fetchData = async () => {
        const request = await axios(`${API_BASE_URL}/role/user`, {
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

    let orgCards;
    if (orgs) {
        orgCards = orgs.map((org, index) => {
            if (org.organizationId) {
                return (
                    <OrganizationCard
                        key={index}
                        history={props.history}
                        org={org.organizationId}
                        admin={org.role}
                    />
                );
            }
            return null;
        });
    }

    if (orgs === null || orgs.length < 1) {
        console.log(orgs === []);
        console.log(orgs);
        return (
            <section className='noFollowedOrgs'>
                <h2 className='dashboard-title'>My Organizations</h2>
                <p>Looks like you haven't created any organizations yet...</p>
                <p>
                    Click here to create an organization and start hosting
                    events
                </p>
                <Link className='dashboard-link' to='/createorgform'> Start your own organization!</Link>
            </section>
        );
    } else {
        console.log(orgs);
        return (
            <section className='created-orgs-container'>
                <h2 className='dashboard-title'>My Organizations</h2>
                <div>{orgCards}</div>
            </section>
        );
    }

}
