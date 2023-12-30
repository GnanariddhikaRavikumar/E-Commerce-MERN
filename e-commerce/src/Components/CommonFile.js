const Commoncards = (props) =>{
  
    const {name, price, Rating, imageUrl} = props.common_details;
  
    return(
      <div className='shopping-card'>
      <img 
      src={imageUrl} alt="online-shopping-cards"></img>
       <div className='card-details'>
        <div>
          <h2>{name}</h2>
          <h3>{price}</h3>
       </div>
       <div>
       <h3>{Rating}</h3>
       </div>
       </div>
      </div>
    )
  }

  export default Commoncards;