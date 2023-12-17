import Shoppingcards from "./ShoppingCard";
import shopdata from "../Common/MockData";
const Body = () =>{
    return(
    <>
      <div className='search-bar'>
        <input type="text"></input>
        <button>SEARCH</button>
      </div>
      <div className='material-container'>
      {
        shopdata.map(shop =>{
          return <Shoppingcards  
          key={shop.id}shop_details={shop}/>
        })
      }
      </div>
      </>
      )
  }

export default Body;