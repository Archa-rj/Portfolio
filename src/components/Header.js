import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-sm navbar-dark'>
                <div className="navbar-brand">
                    <h4 style={{ color: "black",marginRight:"980px" ,marginLeft:"15px"}}>My Portfolio</h4>
                </div>
                <button className='navbar-toggler' type='button' data-toggle="collapse" data-target="#navbarnav">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className="collapse navbar-collapse mr-auto" id='navbarnav'>
                    <ul className='navbar-nav ml-auto' >
                        <li className='nav-item' style={{marginRight:"15px",fontSize:"18px"}}>
                            <Link to='home' smooth={true} duration={500} style={{cursor:"pointer"}}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item' style={{marginRight:"15px",fontSize:"18px"}}>
                            <Link to='aboutus' smooth={true} duration={500} style={{cursor:"pointer"}}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item' style={{marginRight:"15px",fontSize:"18px"}}>
                            <Link to='projects' smooth={true} duration={500} style={{cursor:"pointer"}}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'style={{marginRight:"15px",fontSize:"18px"}}>
                            <Link to='contact' smooth={true} duration={500} style={{cursor:"pointer"}} >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
