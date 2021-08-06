import axios from 'axios';
import { useState,useEffect } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Apitask() {
   const [userData,setuserData]=useState()
//    const [userId,setuserId]=useState()

   useEffect(() => {
       const fetchdata=async ()=>{
           await axios.get(`https://jsonplaceholder.typicode.com/users`)
           .then(res=>{
            setuserData(res.data);
            // console.log(res);
           })
           .catch(err =>{
            console.log(err)
        }) 
       }
      fetchdata()
   },[]);
   
   console.log(userData);

    return (
        <div>
            
                        <table >
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>User Name</th>
                                <th>Operation</th>

                            </tr>
                {
                    userData?.map((user,index)=>(
                               <>
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>
                                    <Link to={`/user-data/${user.id}`}>Go to user details</Link>
                                    </td>
                            </tr>
                            </>                                 
                    )
                    )
                }
              </table> 
        </div>
    )
}
