import Restaurantcard from "./Restaurantcard.js"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmerui from "./Shimmerui.js";
import { useCollapse } from 'react-collapsed'


const Body = () => {

  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState([]);
  const [searchText, setSearch] = useState("");
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const fdata = await fetch("https://api.pizzahut.io/v1/content/products?sector=in-1&locale=en-in&type=promo");
    const json = await fdata.json();
    console.log(json)
    setdata(json)
    setfilter(json)
  };
  if (data.length === 0) {
    return (<Shimmerui />)
  }


  return (
    <div className="body">
      <div className='filter'>
        <div className="seaerchbox">
          <input
            type="text"
            className="seach"
            value={searchText}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />

          <button
            className="some"
            onClick={() => {
              console.log(searchText)
              const filteredata = data.filter((res) => res.id.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilter(filteredata)
            }}
          >search</button>
        </div>
        <div>
      <button
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? 'Collapse' : 'Expand'}
      </button> ``
      <section {...getCollapseProps()}>Collapsed content 🙈</section>
    </div>

      </div>

      <div className="res-container">
        
          {

            filter.map((item) => (
              <Link to="/Contact"><Restaurantcard key={item.id} resdata={item}/></Link>
            ))
          }
      
      </div>
    </div>

  )
}
export default Body