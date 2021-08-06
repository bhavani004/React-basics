import userEvent from '@testing-library/user-event'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'

export default function UserData() {
    const [showData,setshowData]=useState()
    // const params.id=useParams()
    const {id}= useParams()//destructuring
    console.log(id)

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData=async ()=>{
        await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        //await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)related to line 8
        .then(res=>{
         // setshowData(JSON.stringify(res.data))for showing api objects in UI
          setshowData(res?.data)
          console.log(res)
          
          })
         .catch(err=>{
             console.log(err)
         }

          )
        }
    return (
        <div>
           <table>
               <tr>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Username</th>
               </tr>
             <tr><td>{showData?.name}</td>
             <td>{showData?.email}</td>
             <td>{showData?.username}</td></tr>                 
                
                

                </table>
        </div>
    )
}
