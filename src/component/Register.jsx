import Button from './Button'
import reg from '../css/register.module.css'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'
const Register = ()=>{
    return(
        <>

            <NavBar/> 
            <div className={reg.maincon}>
                <div className={reg.sec}>
                    <form className={reg.main2}>
                        
                        <h4>Kindly Fill in this form Appropriately</h4>
                        
                        <label>image: </label>
                        <input className={reg.fill} type ="file" placeholder="insert an image!!"/>
                    
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                        <input type="text" placeholder="Email"/>
                        <input type="password" placeholder="*********"/>
                    
                        <Button className={reg.but2} name="Sign Up"/>

                        <span>
                        If you have an account with us <Link className={reg.link} to={'../Login'}>Login</Link>
                        </span> 



                    </form>
                    <div className={reg.dust}>
                        <h2 >Welcome Comrade</h2>
                    </div>
                </div>
            </div>       
            
        </>
    )
}

export default Register