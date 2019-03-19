import React from "react";
import { Link } from 'react-router-dom';
// import "../stylesheets/org-dashboard-styles/eventcard.css";

export default function MeetupCard(props) {
  const linkUrl = `/meetup/${props.event.id}`;

  if (!props.event) {
    return null;
  }

  return (
    <Link to={linkUrl}>
      <section className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.event.name}</span>
          <p>{props.event.description}</p>
        </div>
        <div className="card-action">
          <span>{props.event.date}</span>
          <span>{props.event.location}</span>
          <span>{props.event.contact}</span>
        </div>
      </section>
    </Link>
  );
}