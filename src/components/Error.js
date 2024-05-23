import { useInRouterContext } from "react-router-dom";

const Error =()=>{
    const err = useInRouterContext();
console.log(err);
    return(
        <>
        <h1>OOPS!!</h1>
        <h3>Something Went wrong!!!</h3>
        
        </>
    )
}
export default Error;