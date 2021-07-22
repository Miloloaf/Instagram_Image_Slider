import React from 'react'
import axios from "axios"

export const FetchData = async() => {
    let url = ""

    const result = await axios(url)


    console.log("Fetching JSON:", url)
    


// setTimeout(() => {return (result)}, 1000)


    return (
        result
    )



}