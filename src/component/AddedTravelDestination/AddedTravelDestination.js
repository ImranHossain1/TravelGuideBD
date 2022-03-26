import React from 'react';
import './AddedTravelDestination.css';
const AddedTravelDestination = (props) => {
    //console.log(props.travelDestination);
    const {areaName,flag} = props.travelDestination;
    return (
        <div className= 'd-flex flex-row align-items-center mb-2 gradient p-1 rounded-3'>
            <img src={flag} alt="" className="rounded-3 me-2"/>
            <h5 className="">{areaName}</h5>   
        </div>
    );
};

export default AddedTravelDestination;