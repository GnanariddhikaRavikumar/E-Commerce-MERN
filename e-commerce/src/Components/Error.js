import { useRouteError } from "react-router-dom";

const Error = () =>{

    const error = useRouteError();
    
    return(
        <>
        <h1>Oops....Something went wrong </h1>
        <h2>Unexpected Error Occur,Please check the Url...</h2>
        <h2>{error.status}-{error.error.message}</h2>
        </>
    )
}

export default Error;