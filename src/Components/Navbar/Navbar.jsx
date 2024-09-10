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



// import React, { useState } from 'react';
// import './Navbar.css';
// import img1 from '../../assets/image/menu.png';
// import img2 from '../../assets/image/logo.png';

// function Navbar() {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const toggleModal = () => {
//         setIsModalOpen(!isModalOpen);
//     };

//     return (
//         <div className='navbar'>
//             <img className='menu' src={img1} onClick={toggleModal} alt="menu"></img>
//             <img className='logo' src={img2} alt="logo"></img>

//             {isModalOpen && (
//                 <div className="modal">
//                     <div className="modal-content">
//                     <img className='menu' src={img1} onClick={toggleModal} alt="menu"></img>
//                         <h1 className='tittle-modal'>Listas de atajos</h1>
//                         <ul>
//                             <li onClick={toggleModal}>Básicos</li>
//                             <li onClick={toggleModal}>Intermedio</li>
//                             <li onClick={toggleModal}>Avanzado</li>
//                         </ul>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Navbar;


import React, { useState } from 'react';
import './Navbar.css';
import img1 from '../../assets/image/menu.png';
import img2 from '../../assets/image/logo.png';

function Navbar({ onSendMessage }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Función para manejar la selección de las opciones
    const handleSelection = (level) => {
        toggleModal();
        // Mensajes predeterminados para cada opción
        let message = '';
        if (level === 'Basic') {
            message = 'I want to learn the basic shortcuts of NetBeans';
        } else if (level === 'Intermediate') {
            message = 'I want to learn the intermediate shortcuts of NetBeans';
        } else if (level === 'Advanced') {
            message = 'I want to learn the advanced shortcuts of NetBeans';
        }

        // Llamar la función onSendMessage con el mensaje predeterminado
        onSendMessage(message);
    };

    return (
        <div className='navbar'>
            <img className='menu' src={img1} onClick={toggleModal} alt="menu"></img>
            <img className='logo' src={img2} alt="logo"></img>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <img className='menu' src={img1} onClick={toggleModal} alt="menu"></img>
                        <h1 className='tittle-modal'>Shortcut List</h1>
                        <ul>
                            <li onClick={() => handleSelection('Basic')}>Basic</li>
                            <li onClick={() => handleSelection('Intermediate')}>Intermediate</li>
                            <li onClick={() => handleSelection('Advanced')}>Advanced</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
