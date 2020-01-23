import Layout from './Layout'
import Head from "next/head";
import fetch from 'isomorphic-unfetch'
import React,{useState} from "react"
import App from '../components/app'

import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import Contact from './Contact'
// import About from './About'
import Link from 'next/link';

const index = (props) => {
    const [state,setState]=useState({name:"",age:23})
    
   function updateState(){
      setState({
        ...state,name:"rajender"
      }
      )
    }
   
    return (

    <div>
        
        <Layout>
            <App></App>
            {state.name}
            <button type="button" onClick={()=>updateState()}>Update</button>
        <Post title="Hi this is vikas"></Post><br/>
        <Post title="Hi this is jagan"></Post>
        {/* <h1>Fetch data from API</h1>
        {
            props.data.map(data=>(
              <div className="row">
                   <div className="col-lg-3">
                   
                    <p>{data.id} {data.title}</p>
                </div>
              </div>
               
                
                    
              
            ))
        } */}
        </Layout>
       
    </div>
)
}

index.getInitialProps = async function()
{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    return {
        data
    }
}

// function Post(props){
//     return <div>
//         <Link href={`/post?title=${props.title}`}><a>Click here</a></Link>
//     </div>
   
// }
const Post = (props)=>(
    <div>
        <Link href={`/post?title=${props.title}`}><a>Click here</a></Link>
        
    </div>
)

export default index