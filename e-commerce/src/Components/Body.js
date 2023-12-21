import Shoppingcards from "./ShoppingCard";
import shopdata from "../Common/MockData";
import { useState } from "react";
import { Link } from "react-router-dom";


const Body = () =>{
    
    const [searchtext ,setsearchtext] = useState(""); 
    const [filteredtext ,setfilteredname]=useState(shopdata);

    function handleOnChange (e){
      setsearchtext(e.target.value);

    }

    function filtername(){

      const filteredname =shopdata.filter(shops =>{
        return shops.name.toLowerCase().includes(searchtext.toLowerCase());
      });
      setfilteredname(filteredname);

    }

    return(
    <>
      <div className='search-bar'>
        <input type="text" onChange={handleOnChange}>
        </input>
        <button onClick={filtername} className="search-button">SEARCH</button>
      </div>
      <div className='material-container'>
      {
        filteredtext.map(shop => {
          return (
          <Link key={shop.id}to={"/shop/"+shop.id }>
            <Shoppingcards  
            key={shop.id}shop_details={shop}/>
          </Link>
          
          );
        })
      }
      </div>
      </>
      )
  }

export default Body;