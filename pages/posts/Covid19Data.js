import React, { useEffect } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import utilStyles from '../../styles/utils.module.css'

const Axios=require('axios');

export const Covid19Data = () => {


  var config = {
    method: 'get',
    url: 'https://api.covid19api.com/country/italy/status/confirmed/live?from=2020-08-01T00:00:00Z&to=2020-11-06T00:00:00Z',
    headers: { }
  };

    const [data,setData]=React.useState([])

    useEffect(()=>{
      Axios(config)
      .then(response=>{
          setData(response.data)
          console.log(response.data)
      })
      .catch((err)=>{
          console.log(err)
      })
    },[])

    return (
        <Layout >
          <Head>
            <title>Covid-19 Data</title>
          </Head>

          <h1>Covid-19 Data</h1>
          <ul className={utilStyles.blogContainer}>
              {
               
                data.map( (el,i) => {
                return <li className={utilStyles.li}>Cases: {el.Cases} </li>
                })
              }
          </ul>
          
        </Layout>
      )
}
export default Covid19Data;