import React,{useState} from 'react';
import WareHouseList from '../warehouse.json'
import WareHouse from './WareHouseList';

const SearchPage = () => {
    const[searchWareHouse,setSearchWareHouse] = useState("");
    const [wareHouse,setWareHouse] = useState([]);
    const [alert, setAlert] = useState("");

    const getWarehouseDetails = async () => {
        // if (!result.data.more) {
        //     setWareHouse([]);
        //     return setAlert("No Warehouse found with such name");
            
        // }
        // console.log(result)
        setSearchWareHouse(WareHouseList);
        // setAlert("");

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
            </form>
            <div className="warehouse-container">
                {WareHouseList !== [] &&
                    WareHouseList.map(val => {
                        
                        return <WareHouse className='' key={val.id} wareHouseList={val}/>
                    })
                }
            </div>
        </div>
    )
}

export default SearchPage;