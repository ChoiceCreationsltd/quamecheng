import { NavLink } from "react-router-dom"
import image from '../Images/qwamech logo PNG.png'

const Nav = () => {
    const changebg = () => {
        let navbar = document.getElementById('navbar-cust');
        let scrollValue = window.scrollY;

        if(scrollValue < 150) {
            navbar.classList.remove('navbar-cust');
        } else {
            navbar.classList.add('navbar-cust');
        }
    }
     window.addEventListener('scroll', changebg);
    return(
        <>
        <div className="navbar-custom" style={{position:'fixed', top:'0', left:'0', right:'0'}}>
            <div className="p-3 navbar-cust" id="navbar-cust">
                <div className="d-flex fw-bold text-white justify-content-between">
                    <div className="nav-custom-links">
                        <NavLink to='/'>
                            <img src={image} width='150px' />
                        </NavLink>
                    </div>
                    <div>
                        <div className="nav-custom-links d-none fs-5 d-md-flex" style={{gap:'20px'}}>
                            <NavLink to='/About'>About</NavLink>
                            <NavLink to='/Products&Services'>Products & Services</NavLink>
                            <NavLink to='/Contactus'>Contact us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
                {/* <div style={{height:'5px'}} className="bg-danger"></div> */}
        </div>
        </>
    )
}

export default  Nav