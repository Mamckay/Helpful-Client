import React, { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "./eventcard";
import { API_BASE_URL } from "../config";
import "../stylesheets/event-list.css";

export default function EventList() {
    const [events, setEvents] = useState(null);
    const [rsvpEvents, setRsvpEvents] = useState(null);
    const [location, setLocation] = useState(null);

    // get user location
    const fetchUserLocation = async () => {
        if (!location) {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    let results = {
                        lat: Number(position.coords.latitude.toFixed(7)),
                        lng: Number(position.coords.longitude.toFixed(7)),
                    };
                    setLocation(results);
                });
            }
        }
    };

    // get all rsvp'd events
    const fetchRsvpData = async () => {
        const rsvpEventsRequest = await axios(`${API_BASE_URL}/rsvp/user`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        });
        setRsvpEvents(rsvpEventsRequest.data);
    };

    // get all events *filter if user allows location*
    const fetchEventData = async () => {
        if (!location) {
            axios(`${API_BASE_URL}/event/all`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(
                        localStorage.getItem("jwtToken")
                    ),
                },
            }).then(res => {
                if (res.data) {
                    setEvents(res.data);
                }
            });
        } else if (location) {
            axios
                .get(
                    `${API_BASE_URL}/event/location/2000/${location.lat}/${
                    location.lng
                    }`, // set at 2000 for testing
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer ".concat(
                                localStorage.getItem("jwtToken")
                            ),
                        },
                    }
                )
                .then(res => {
                    if (res.data) {
                        setEvents(res.data);
                    }
                });
        }
    };

    useEffect(() => {
        fetchUserLocation();
        fetchRsvpData();
        fetchEventData();
    }, [location]);

    // gets all the events out of each individual rsvp.eventId and into array
    let rsvpEventList = [];
    const generateRsvpEventList = rsvpData => {
        rsvpData.forEach(rsvp => {
            rsvpEventList.push(rsvp.eventId);
        });
    };


    // generate EventCard components with event data
    let rsvpEventCardList, localEventCardList;
    if (rsvpEvents) {
        generateRsvpEventList(rsvpEvents);
        rsvpEventCardList = rsvpEventList.map((event, index) => {
            return <EventCard key={index} event={event} />;
        });
    }

    if (events) {
        localEventCardList = events.map((event, index) => {
            return <EventCard key={index} event={event} />;
        });
    }
    return (
        <section className='event-container'>
            <div className='rsvp-events'>
                <h2 className='dashboard-title'>Upcoming Events</h2>
                <div className='event-list'>
                    {localEventCardList}
                    {rsvpEventCardList}
                </div>
            </div>
        </section>
    );
}

