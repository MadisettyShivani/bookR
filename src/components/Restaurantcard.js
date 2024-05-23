// import { Link } from "react-router-dom";

const Restaurantcard = ({resdata}) => {

    return(
    <div  className='res-card'>
     
     
  
     <h3>{resdata.id}</h3>
     <p>{resdata.type}</p>
     <h4>{resdata.title}</h4>
     <p>{resdata.desc}</p>
     <img src={resdata.img} alt="some"/>
    
  
    </div>
    )
  }
  export default Restaurantcard;

  
