import Link from 'next/link'

const Nav = () => (

    <div>
        <Link href="/">
        <a style={{marginRight:15}}>Home</a>
        </Link>
        <Link href="/about">
        <a style={{marginRight:15}}>About</a>
        </Link>
        <Link href="/contact">
        <a style={{marginRight:15}}>Contact</a>
        </Link>
        <Link href="/apicall">
        <a style={{marginRight:15}}>ApiCall</a>
        </Link>
        <Link href="/login">
        <a style={{marginRight:15}}>Login</a>
        </Link>
        <Link href="/loginn">
        <a style={{marginRight:15}}>Login 2</a>
        </Link>
       
    </div>
);

export default Nav