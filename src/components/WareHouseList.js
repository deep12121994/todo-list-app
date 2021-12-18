import React from 'react';

const WareHouse = ({wareHouseList}) =>{
    const {name, city, type, cluster, code, space_available} = wareHouseList;
    return(
        <div className='warehouse-card'>
           <h3>Name: {name}</h3>
            <h5>City: {city}</h5>
            <h5>Type: {type}</h5>
            <h5>Cluster: {cluster}</h5>
            <h5>Code: {code}</h5>
            <h5>Space_available: {space_available}</h5>
        </div>
    )
}

export default WareHouse;