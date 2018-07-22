import React from 'react';
import './index.css';

const TherapyListItem = ({ therapy }) => (
    <li>
        <p>{therapy.FirstName} {therapy.LastName}</p>
    </li>
)

const TherapiesList = (props) => {
    return (
        <div>
            <ul className="therapy-list">
                {props.list.map(therapy => (
                    <TherapyListItem therapy={therapy} key={therapy.NPI}/>
                ))}
            </ul>
        </div>
    )
}

export default TherapiesList;