import React from 'react';
import AddedTravelDestination from '../AddedTravelDestination/AddedTravelDestination';
import './TravelCart.css';
const TravelCart = (props) => {
    const {travelCart} = props;
    //console.log(travelCart);
    let total = 0;
    /*for ( const destination of travelCart){
        total = total + destination.travelCost;
    }*/
    // const count = travelCart.reduce((previous, district)=> previous+district.quantity, 0);
    let count =0;
    for(const district of travelCart){
        if(!district.quantity){
            district.quantity = 1;
        }
        count = count+ district.quantity;
        total =total + district.travelCost* district.quantity;
    }
    return (
        <div>
            <div className="mb-5 text-center gradient p-2 rounded-2 fw-bold ">
                <h4 className="text-center">Travel summary</h4>
                <h5 className="fst-italic font-color">Destination Added : <span>{count}</span></h5>
                { <h4>Total cost: <span>{total}</span></h4> }
            </div>
            <div>
                {
                    //added selected carts
                     travelCart.map(district => <AddedTravelDestination
                         key= {district.areaId}
                         travelDestination = {district}
                     ></AddedTravelDestination>)
                }
            </div>
        </div>
    );
};

export default TravelCart;