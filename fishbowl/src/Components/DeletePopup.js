import React, {useState} from "react";

export default function DeletePopup(props) {
    const classes = ['cs 180', 'cs m152a', 'cs 111', 'class 4', 'office hours', 'meeting 1', 'meeting 2', 'meeting 3'] 

    const [checkedState, setCheckedState] = useState(
        new Array(classes.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }

    return (
        <div className="delete-section">
            <div>
                <ul className="delete-classes-list">
                    {classes.map((name, index) => {
                    return (
                        <li key={index}>
                            <div className="classes-list-item">
                                <input
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name={name}
                                    value={name}
                                    checked={checkedState[index]}
                                    onChange={() => handleOnChange(index)}
                                />
                                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                            </div>
                        </li>
                    );
                    })}
                </ul>
            </div>

            <div className="button-wrapper">
                <button className="delete-button" onClick={props.handleClose}>delete</button>
            </div>
        </div>
    );
}


    