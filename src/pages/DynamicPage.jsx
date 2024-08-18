import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const DynamicPage = () => {


  const params = useParams()
  



  const getData = async () =>{
    try {
      const response = await axios.get(`https://e6144872aa102f69.mokky.dev/products/${params.id}`)
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getData()
  },[params.id])
  return <div>DynamicPage</div>
  
}

export default DynamicPage