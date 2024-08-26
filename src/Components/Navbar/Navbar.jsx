// import './Navbar.css'
// import img1 from '../../assets/image/menu.png'
// import img2 from '../../assets/image/logo.png'


// function Navbar(){
//     return(
//         <div className='navbar'>
//         <img className='menu' src={img1}></img>
//         <img className='logo' src={img2}></img>
//     </div>
//     )
// }

// export default Navbar

import React, { useState } from 'react';
import './Navbar.css';
import img1 from '../../assets/image/menu.png';
import img2 from '../../assets/image/logo.png';

function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='navbar'>
            <img className='menu' src={img1} onClick={toggleModal} alt="menu"></img>
            <img className='logo' src={img2} alt="logo"></img>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                    <img className='menu' src={img1} onClick={toggleModal} alt="menu"></img>
                        <h1 className='tittle-modal'>Listas de atajos</h1>
                        <ul>
                            <li onClick={toggleModal}>Básicos</li>
                            <li onClick={toggleModal}>Intermedio</li>
                            <li onClick={toggleModal}>Avanzado</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;