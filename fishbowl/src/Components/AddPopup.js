import React from "react";

export default function AddPopup(props) {
    return(
        <div className="add-section">
            <div className="add-section-div">
                <label htmlFor="className"></label>
                <input className="add-field" placeholder="class name"></input>
            </div>
            <div className="add-section-div">
                <label htmlFor="classCode"></label>
                <input className="add-field" placeholder="class code"></input>
            </div>
            <div className="add-section-div">
                <select className="add-field">
                    <option selected value="days"> select day</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>
            </div>
            <div className="button-wrapper">
                <button className="add-button" onClick={props.handleClose}>save</button>
            </div>
        </div>
    );
}

