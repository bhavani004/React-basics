import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'



function Api(){
    const [sample,setsample]=useState()

    useEffect(()=>{
        fetchData()
    },[])

        const fetchData= async ()=>{
            await axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res=>{
                setsample(res.data)
                // console.log(res.data)
            })
            .catch(err=>{
             console.log(err)
            })
        }
     
        //  console.log(sample)
    return(
        <div>
           <table>
               <tr>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Username</th>
               </tr>
               {
                  
                   sample?.map((user,index)=>(
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
export default Api;