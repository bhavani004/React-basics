import React, { useState } from 'react'
import {useEffect} from 'react'
import axios from 'axios';



export default function Fetchdata() {
    const [userData,setUserData]=useState()
    const [clickedURL,setClickedURL]=useState("")

    useEffect(() => {
        const fetchData = async () =>{
            await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`)
            .then(res=>{
                // console.log(res.data.results)
                setUserData(res.data.results)
            })
            .catch(err =>{
                console.log(err)
            }) 
           }

           console.log(userData);
         fetchData()
        },[]);

            const showUrl = (url) => {
            console.log(url);
            setClickedURL(url)
            }
        

          

        //  console.log(clickedURL);
    return (
        <div>
      

             <ul>
              {userData?.map((user ,index )=> (
            <>
              <li key={index} style={{fontSize:25,color:"skyblue",margin:"10px"}} onClick={() => showUrl(user.url)} >{index + 1} : {user.name}</li>
              <h1>{clickedURL}</h1>
            </>
              ))}
             
            </ul> 
        </div>
    )
}
