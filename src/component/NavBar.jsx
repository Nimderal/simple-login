import { Link } from "react-router-dom"
import Button from "./Button"
import nav from '../css/nav.module.css'



const NavBar= ()=>{


    return (
        <>
            <div className={nav.first}>
                <div className={nav.left}>
                    <h2><Link className={nav.stag} to={'/'}>Logo</Link></h2>
                    <Link className={nav.stag} to={'/'}>Home</Link>
                    <Link className={nav.stag} to={'/about'}>About</Link>
                    <Link className={nav.stag} to={'/contact'}>Content</Link>
                    <Link className={nav.stag} to={'/settings'}>Settings</Link>
                </div>
                <div className={nav.right}>
                    <Link to={'/Login'}>
                        <Button name="Log In"/>
                    </Link>

                    <Button name= "Log Out"/>
                    <div className={nav.img}>
                        <img src=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar