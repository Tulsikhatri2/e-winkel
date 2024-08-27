import axios from "axios"

export const countries = async () => {
    const response = await axios.get("https://node-js-wse4.onrender.com/common/countries");
    return response.data.data
}

export const states = async () => {
    const response = await axios.get("https://node-js-wse4.onrender.com/common/states/101");
    console.log(response,"states data")
    // console.log(response.data.data)
}