import { useEffect, useState } from "react"



const Restaurantmenu = () => {

    const [phone, setPhone] = useState([]);


    useEffect(() => {
        fetchdata()
    }, []);
    const fetchdata = async () => {
        const data = await fetch("https://e221fbc79131409499061a2a232826c4.api.mockbin.io/")
        const json = await data.json();
        console.log(json)
        setPhone(json);
    }
    // console.log(phone.productData[0].items[0].products)
    phone.productData[0].items[0].products.map(item => console.log(item.productName))
    return (
        <>
            <div className="containerX">


                <div className="containerJ">

                    <h1>Helloworld</h1>
                    <p>Menu</p>

                    {
                        phone && phone.productData && phone.productData.length > 0 &&
                        (
                            <>
                                <div className="container2">
                                    <p>{phone.productData[0].cat_name}</p>
                                    <p>{phone.productData[0].id}</p>
                                    <img src={phone.productData[0].image} alt="image" />

                                </div>

                                <div className="containerJ">
                                    {

                                        phone.productData[0].items[0].products[0].map((product, index) => (
                                            <div key={index} className="conatianer2">
                                                <p>{phone.productData[0].items[0].cat_name}</p>
                                                <p>{product.productName}</p>
                                                <p>{product.price}</p>
                                                <p>{product.oldPrice}</p>
                                                <p>{product.weigth[0]}</p>
                                                <p>{product.weight[1]}</p>
                                                <img className="contain1" src={product.catImg} alt="image1" />
                                                <p>{product.discount}</p>
                                                <p>{product.brand}</p>
                                                <p>{product.type}</p>
                                                {
                                                    product.productImages.map((image, i) => (
                                                        <img key={i} className="contain1" src={image} />
                                                    ))
                                                }


                                            </div>
                                        ))

                                    }
                                </div>
                                \</>
                        )}


                </div>
            </div>
        </>
    )

}
export default Restaurantmenu