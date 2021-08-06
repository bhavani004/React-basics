import axios from 'axios'
import React, { useState } from 'react'

const Demo = () => {
     const [data,setData]=useState()

        const fetchData = async () => { 
            const res =  await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`)
            console.log(res)
            // setData(res.data)
           }
         fetchData()

        //  console.log(data);
        

    return (
        <div>
           
        </div>
    )
}

export default Demo
