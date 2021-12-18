import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import WareHouseList from '../warehouse.json'
import WareHouse from './WareHouseList';


const SearchPage = () => {
    const[searchWareHouse,setSearchWareHouse] = useState("");
    const [wareHouse,setWareHouse] = useState([]);
    const [filterValue, setFilterValue] =  useState("");


    const getWarehouseDetails = async () => {
        
        console.log("filter value", filterValue, " ", searchWareHouse)
        let value = filterValue;
        const lowercasedFilter = filterValue === "space_available" ? 
                            parseInt(searchWareHouse) : searchWareHouse.toLowerCase();
        const filteredData = WareHouseList.filter(item => { 
            if(filterValue !== "space_available")
                return item[value].toLowerCase() === lowercasedFilter
            else return item[value] === lowercasedFilter  
        });
        if (filteredData.length === 0) {
            setWareHouse([]);
            alert("No Warehouse found with such name");
            return;
        }
        setWareHouse(filteredData);
    }; 


    const onSubmitData = (e) => {
        e.preventDefault();
        getWarehouseDetails();
    };

    return(
        <div className="search-container">
            <form className="form-container" onSubmit={onSubmitData}>
            <input type="text" 
                className="search-bar" 
                placeholder="Search Warehouse...."
                autoComplete="off"
                val={searchWareHouse}
                onChange = {e => setSearchWareHouse(e.target.value)}
                />
                <button id="btn-search">Search</button>
                <select className='filter-options' value={filterValue} onChange={(e) => setFilterValue(e.target.value)}> 
                    <option value="name">name</option>
                    <option value="city">city</option>
                    <option value="cluster">cluster</option>
                    <option value="space_available">space_available</option>
                </select>
                <Link id="btn-item" to="/details">Add Item</Link>
            </form>
            
            <div>
            {wareHouse.length === 0 ? 
                <div className="warehouse-container">
                    {WareHouseList !== [] &&
                            WareHouseList.map(val => {     
                                return <WareHouse className='' key={val.id} wareHouseList={val}/>
                            })
                    }
                </div>:
                <div className="warehouse-container">
                    {wareHouse.map(val => {
                            return <WareHouse className='' key={val.id} wareHouseList={val}/>
                        })
                    } 
                </div>
            } 
            </div>
        </div>
    )
}

export default SearchPage;