import Layout from './Layout'
import {Component} from 'react'

const data = <p>This is Contact page</p>

export default class Contact extends Component{

    render(){
        return (
            <div><Layout content={data}>
            
            </Layout></div>
        )
    }
        
}