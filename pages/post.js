import {withRouter} from 'next/router'
import Layout from './Layout'

const Post = withRouter((props) => (

    <div>
       <Layout>
       <h1>{props.router.query.title}</h1>
       </Layout>
      
       
    </div>
));



export default Post