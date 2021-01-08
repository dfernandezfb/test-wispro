import {useState} from 'react'
import logo from "./../../assets/logo.png"
import Navbar from 'react-bootstrap/Navbar'
import MyModal from '../Modal/MyModal'
import Button from 'react-bootstrap/Button'
import './Header.css'

const Header = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <header>
            <Navbar className="d-flex justify-content-between">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        height="50"
                        className="d-inline-block align-top"
                        alt="Wispro logo"
                    />
                </Navbar.Brand>
            <Button className="signin-button" variant="outline-info" onClick={() => setModalShow(true)}>
                Ingresar
            </Button>
            </Navbar>
            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </header>
    );
};

export default Header;
