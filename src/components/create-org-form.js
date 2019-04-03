import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import "../stylesheets/create-org-form.css";

export default function CreateOrgForm() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        location: "",
        contact: "",
        imgUrl: "",
    });

    const [success, setSuccess] = useState(false);

    const createOrg = async () => {
        const createOrgResult = await axios({
            method: "post",
            url: `${API_BASE_URL}/org`,
            data: formData,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        })
            .then(res => {
                console.log("tag");
                setSuccess(true);
            })
            .catch(err => {
                console.log("tag");
                alert("Organization already Exists");
                setSuccess(false);
            });
        if (createOrgResult) {
            console.log('success');
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        createOrg();
    };

    if (success) {
        return (
            <p className='orgCreateSuccess'>Organization created succefully!</p>
        );
    }
    return (
        <section className='create-org-form-container'>
            <form
                action='submit'
                className='create-org-form'
                id='createOrgForm'
                onSubmit={e => handleSubmit(e)}>
                <h1>Create a new Organization</h1>
                {/* <div class='form-row'> */}
                <label htmlFor='org-name'></label>
                <input
                    className='org-form-center-text'
                    required
                    type='text'
                    placeholder='Organization name'
                    onChange={e =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                />
                {/* </div> */}
                {/* <div class='form-row'> */}
                <label htmlFor='org-description'></label>
                <textarea
                    required
                    className="creatOrgForm-desc org-form-center-text"
                    type='text'
                    form='createOrgForm'
                    rows='5'
                    placeholder='Describe the organization'
                    onChange={e =>
                        setFormData({
                            ...formData,
                            description: e.target.value,
                        })
                    }
                />
                {/* </div> */}
                {/* <div class='form-row'> */}
                <label htmlFor='org-location'></label>
                <input
                    className='org-form-center-text'
                    required
                    type='textarea'
                    placeholder='Location'
                    onChange={e =>
                        setFormData({
                            ...formData,
                            location: e.target.value,
                        })
                    }
                />
                {/* </div> */}

                {/* <div class='form-row'> */}
                <label htmlFor='org-contact'></label>
                <input
                    className='org-form-center-text'
                    required
                    type='text'
                    placeholder='Contact info'
                    onChange={e =>
                        setFormData({
                            ...formData,
                            contact: e.target.value,
                        })
                    }
                />
                {/* </div> */}

                {/* <div class='form-row'> */}
                <label htmlFor='orgImg'></label>
                <input
                    className='org-form-center-text'
                    type='text'
                    placeholder='Paste Image URL here!'
                    onChange={e =>
                        setFormData({ ...formData, imgUrl: e.target.value })
                    }
                />
                {/* </div> */}

                <button className='create-org-form-button' type='submit'>
                    Submit
                </button>
            </form>
        </section>
    );
}
