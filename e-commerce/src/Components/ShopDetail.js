/*import { Outlet, useParams } from "react-router-dom";
import Commoncards from "./CommonFile";
import commondata from "../Common/CommonData";
const ShopDetail = () => {
  const {shopid} = useParams();
  return (
    
    <div className="material-container">
      <h3>Id : {shopid}</h3>
      {commondata.map((common) => 
      (<Commoncards key={common.id} common_details={common}/>))}
      
      <Outlet/>
    </div>
  );
  
};

export default ShopDetail;*/

import { Outlet, useParams } from "react-router-dom";
import Commoncards from "./CommonFile";
import commondata from "../Common/CommonData";

const ShopDetail = () => {
  const { shopid } = useParams();

  const filteredCommon = commondata.find((common) => common.id === parseInt(shopid));

  return (
    <div className="material-container">
      <h3>Id: {shopid}</h3>
      {filteredCommon ? (
        <Commoncards key={filteredCommon.id} common_details={filteredCommon} />
      ) : (
        <p>No common data found for shop ID {shopid}</p>
      )}
      <Outlet />
    </div>
  );
};

export default ShopDetail;

