import React from "react";
import { useFormik } from "formik";
import WareHouseList from '../warehouse.json'; 
import fs from 'fs';

const filename = '../warehouse.json'
const DetailsPage = () => {
    let wareHouse = [WareHouseList];

    const formik = useFormik({
        initialValues:{
            name: "",
            code: "",
            id: WareHouseList.length + 1,
            city: "",
            space_available: "",
            type: "",
            cluster: "",   
            is_registered: "",
            is_available: "",
        },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        const fileData = JSON.stringify(values);
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `${filename}.json`;
        link.href = url;
      }});


    
    return(
        <div className="detail-container">
            <h3>Enter WareHouse Details...</h3>
            <form onSubmit={formik.handleSubmit} className="detail-form">

                <label>Id:</label>
                <input className="detail-input" type="text" name="id" onChange={formik.handleChange} value={formik.values.id}/>
            
                <label>Warehouse name:</label>
                <input className="detail-input" type="text" name="name" onChange={formik.handleChange} value={formik.values.name}/>
            
                <label>Code:</label>
                <input className="detail-input"  type="text" name="code" onChange={formik.handleChange} value={formik.values.code}/>
                
                <label>City:</label>
                <input className="detail-input" type="text" name="city" onChange={formik.handleChange} value={formik.values.city}/>
            
                <label>Cluster:</label>
                <input className="detail-input" type="text" name="cluster" onChange={formik.handleChange} value={formik.values.cluster}/>
            
                <label>Type:</label>
                <input className="detail-input" type="text" name="type" onChange={formik.handleChange} value={formik.values.type}/>
            
                <label>Space_available:</label>
                <input className="detail-input" type="text" name="space_available" onChange={formik.handleChange} value={formik.values.space_available}/>
                
                <label>Is_registered:</label>
                <input className="detail-input" type="text" name="is_registered" onChange={formik.handleChange} value={formik.values.is_registered}/>
                
                <label>Is_available:</label>
                <input className="detail-input" type="text" name="is_avaiable" onChange={formik.handleChange} value={formik.values.is_available}/>
                
                <button id="btn-submit">Submit</button>
            </form>

        </div>
    )
}

export default DetailsPage;