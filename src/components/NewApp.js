import React, { useState, useEffect } from 'react';
import "./App.css"
function Newapp() {
  const [data, setData] = useState([])

  const[number,setNumber]=useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json');
        const jsonData = await response.json();
        const dataArray = Object.entries(jsonData).map(([key, value]) => ({ key, value }));

        // dataArray[0].value[0].items.map(item => console.log(item))

        // setData(dataArray[0].value[0].items[0].products)
        setData(dataArray[0].value[number])

        // setData(dataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      }
    };

    fetchData();
  }, [number]);

  // data && console.log(data[0].value)
  console.log(data)
  // data.map(item => console.log(item))
  Object.entries(data).map(([key, value]) => {
    console.log(key + ":")
    console.log(value)

    // value[0].products&& console.log(value[0].products[0])
  })
  return (
    <div>
<button onClick={()=>setNumber(0)}>Groceries</button>
<button onClick={()=>setNumber(1)}>Electronics</button>
<button onClick={()=>setNumber(2)}>Fashon</button>
      {
        Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <h1>{key == 'cat_name' && value} </h1>
            <img src={key=='image' && value} />
            <h4>{value[0].cat_name}</h4>
            {
              value[0].products && value[0].products.map((item) => (
                <div>
                  <h2>{item.productName}</h2>
                  <h3>{item.description}</h3>
                <img src={item.catImg} />
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
}

export default Newapp;