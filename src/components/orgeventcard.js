import React from "react";
import UserComments from "./usercomments";
import "../stylesheets/org-dashboard-styles/eventcard.css";

export default function OrgEventCard() {
    return (
        <section>
            <div className='event-card'>
                Name: This is a Group
                <div className='org-event-description'>
                    Description: This is the event description
                </div>
                <div className='org-event-date'>Date: 03/11/2019</div>
                <div className='org-event-location'>
                    Location: 10003 N South St, Southtonville
                </div>
                <div className='org-event-contact'>Contact: Mr. B</div>
            </div>
            <div className='event-card'>
                Name: Event 2
                <div className='org-event-description'>
                    Description: This is the event description
                </div>
                <div className='org-event-date'>Date: 03/11/2019</div>
                <div className='org-event-location'>
                    Location: 10003 N South St, Southtonville
                </div>
                <div className='org-event-contact'>Contact: Mr. B</div>
            </div>
            <div className='event-card'>
                Name: Event 3
                <div className='org-event-description'>
                    Description: This is the event description
                </div>
                <div className='org-event-date'>Date: 03/11/2019</div>
                <div className='org-event-location'>
                    Location: 10003 N South St, Southtonville
                </div>
                <div className='org-event-contact'>Contact: Mr. B</div>
            </div>
            <UserComments />
        </section>
    );
}
