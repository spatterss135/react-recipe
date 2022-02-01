import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import { Navbar, Nav as NavBS, Container } from "react-bootstrap"

export default function Nav(){
    return (
             <Navbar bg="light" variant="light" className='help'>
                <Navbar.Brand className='mx-2' href="/">
                <img
                    alt=""
                    src="/images/logo.png"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <NavBS className="me-auto">
                <Link className='mx-2'  to='/' >Home</Link>
                <Link className='mx-2'  to='/saved' >Saved Recipes</Link>
                </NavBS>
            </Navbar>
        
    )
}