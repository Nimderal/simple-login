import Button from './Button'
import {Link} from 'react-router-dom'
import NavBar from './NavBar'
import log from '../css/login.module.css'
const Login = ()=>{
    return(
        <>

            <NavBar/> 
            <div>

            <div className={log.maincon}>
                

                <div className={log.sec}>
                    <div className={log.dust}>
                        <h2 >Welcome Back <br/> Comrade</h2>
                </div>
                    <form className={log.main2}>
                        <h2>fill in the appropriate details</h2>
                        <input type="text" placeholder="Email"/>
                        <input type="password" placeholder="*********"/>
                        <Button  name="Login"/>

                        <span>
                        If you have an account with us <Link to={'../Register'}>Register</Link>
                        </span> 
                    </form>
                </div>     
                    
                </div>
            </div>
            
        </>
    )
}

export default Login