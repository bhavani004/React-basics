import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

export default function Showdata() {
    const [showdata,setshowdata] = useState()
    const { id } = useParams()//destructuring
    console.log(id)

    useEffect(()=>{
        const fetchdata=async()=>{
            await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res=>{
                setshowdata(res?.data)
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        fetchdata()
    },[])

    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                </tr>
                
               <tr><td>{showdata?.name}</td>
             <td>{showdata?.email}</td>
               <td>{showdata?.username}</td></tr>
                
            </table>
        </div>
    )
}
