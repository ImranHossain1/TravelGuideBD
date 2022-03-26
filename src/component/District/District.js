import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrain } from '@fortawesome/free-solid-svg-icons';
import './District.css';


const District = (props) => {
    const {areaName, division,  established, flag, population ,travelCost}= props.district;
    
    const train = <FontAwesomeIcon icon={faTrain} className='train-icon'/>

    // console.log(props);
    return (
        <div className='card border-0 py-3'>
            <div className="card district-container background" >
                <img src={flag} alt="" className="w-75 mx-auto mt-2 rounded-3"/>
                <div className="card-body fw-bold text-center">                   
                    <h5 className="card-title fw-bold text-center">Name: <span className="fw-normal">{areaName}</span></h5>
                    <p className="card-text">Division: <span className="fw-normal">{division}</span></p>
                    <p className="card-text">Established: <span className="fw-normal">{established}</span></p>
                    <p className="card-text">Totol Population: <span className="fw-normal">{population}</span></p>
                    <p className="card-text">Travel Cost: <span className="fw-normal">{travelCost} Taka </span></p>
                    <button 
                        onClick={()=>props.handleAddToCart(props.district)}
                        className='btn-success border-1 rounded p-2'>
                            {train} Add Destination
                    </button>
                    <div className='mt-2'>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram mx-4"></i>
                    <i className="fab fa-twitter"></i>
                    </div>
               
                </div>
            </div>
        </div>
    );
};

export default District;