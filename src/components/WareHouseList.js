import React from 'react';

const WareHouse = ({wareHouseList}) =>{
    const {name, city, type, cluster, code, space_available, is_live, is_registered} = wareHouseList;
    return(
        <div className='warehouse-card'>
            <h3>{name}</h3>
            <h5>{city}</h5>
            <h5>{type}</h5>
            <h5>{cluster}</h5>
            <h5>{code}</h5>
            <h5>{space_available}</h5>
            <h5>{is_live}</h5>
            <h5>{is_registered}</h5>
        </div>
    )
}

export default WareHouse;