import React from 'react'
import Layout from './Layout'
import FetchData from '../components/fetchdata'

const ApiCall = () =>{
    return (
        <div>
            <Layout>
            <h2>Fetch data from APi</h2>
            <FetchData></FetchData>
            </Layout>
            
        </div>
        
    )
}

export default ApiCall