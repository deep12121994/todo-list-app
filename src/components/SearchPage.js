import React,{useState} from 'react';
import WareHouseList from '../warehouse.json'
import WareHouse from './WareHouseList';


const SearchPage = () => {
    const[searchWareHouse,setSearchWareHouse] = useState("");
    const [wareHouse,setWareHouse] = useState([]);
    const [filterValue, setFilterValue] =  useState("name");


    const getWarehouseDetails = async () => {
        const lowercasedFilter = searchWareHouse.toLowerCase();
        const filteredData = WareHouseList.filter(item => {
        return Object.keys(item).some(key =>
            typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedFilter)
         );
        });
        console.log("fitered: ", filteredData)
        if (filteredData.length === 0) {
            setWareHouse([]);
            alert("No Warehouse found with such name");
            return;
        }
        // console.log(result)
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
                val={wareHouse}
                onChange = {e => setSearchWareHouse(e.target.value)}
                />
                <button id="btn-search">Search</button>
                <select className='filter-options'>
                    <option onClick={() => setFilterValue("name")}>name</option>
                    <option onClick={() => setFilterValue("city")}>city</option>
                    <option onClick={() => setFilterValue("cluster")}>cluster</option>
                    <option onClick={() => setFilterValue("Space_available")}>Space_available</option>
                </select>
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