
import Nav from './Nav'

const Layout = (props) => (

    <div>
        <div className="container-fluid">
        <Nav/>
       {props.children}
       </div>
    </div>
);

export default Layout