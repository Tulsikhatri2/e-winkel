import axios from "axios"

export const productsDisplay = async (token) =>{
    const response = await axios.get("https://node-js-wse4.onrender.com/product?pageNumber=1&pageSize=10",{
        "headers":{
            "Authorization" : "Bearer " + token
        }
    })
    console.log(response,"products response")
}