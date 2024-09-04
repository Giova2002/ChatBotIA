// import './BarTex.css'
// import img from '../../assets/image/send.png'

// function BarText(){
//     return(
//         <div className='bar_text'>
//                 <textarea  className='text' id="message" name="message" rows="4" cols="50" placeholder="Envía un mensaje a DevShorty"></textarea>
//                 <img className='send' src={img}/>
     
//         </div>
//     )
// }

// export default BarText

// import React, { useState } from 'react';
// import './BarTex.css';
// import img from '../../assets/image/send.png';

// function BarText() {
//     const [message, setMessage] = useState('');
//     const [chatHistory, setChatHistory] = useState([]);
//     const [welcome, setWelcome]= useState(true)

//     const handleSend = async () => {
//         if (message.trim() === '') return;

//         const userMessage = message.trim();
//         setChatHistory([...chatHistory, { role: 'user', content: userMessage }]);
        
//         // Llamar al backend para obtener la respuesta de Ollama
//         const response = await fetch('http://127.0.0.1:8000', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ message: userMessage }),
//         });

//         const data = await response.json();
//         setChatHistory([...chatHistory, { role: 'user', content: userMessage }, { role: 'bot', content: data.response }]);
//         setMessage('');
//     };

//     return (
//         <div>
//             <div className='chat_history'>
//                 {chatHistory.map((msg, index) => (
//                     <div key={index} className={msg.role === 'user' ? 'user-message' : 'bot-message'}>
//                         {msg.content}
//                     </div>
//                 ))}
//             </div>
//             <div className='bar_text'>
//                 <textarea
//                     className='text'
//                     id="message"
//                     name="message"
//                     rows="4"
//                     cols="50"
//                     placeholder="Envía un mensaje a DevShorty"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                 />
//                 <img className='send' src={img} onClick={handleSend} alt="send" />
//             </div>
//         </div>
//     );
// }

// export default BarText;

// import React, { useState, useEffect } from 'react';
// import './BarTex.css';
// import img from '../../assets/image/send.png';
// import Welcome from '../ChatMessage/Welcome'

// function BarText() {
//     const [message, setMessage] = useState('');
//     const [chatHistory, setChatHistory] = useState([]);
//     const [loading, setLoading] = useState(false);

//     // Enviar mensaje de bienvenida al iniciar el chat
//     useEffect(() => {
//         setChatHistory([{ role: 'bot', content: <Welcome/>}]);
//     }, []);

//     const handleSend = async () => {
//         if (message.trim() === '') return;

//         const userMessage = message.trim();
//         const updatedChatHistory = [...chatHistory, { role: 'user', content: userMessage }];

//         // Si hay un mensaje de bienvenida, se elimina al enviar el primer mensaje
//         if (chatHistory.length === 1) {
//             updatedChatHistory.shift();  // Eliminar el primer mensaje (el de bienvenida)
//         }

//         setChatHistory(updatedChatHistory);

//         // Llamar al backend para obtener la respuesta de Ollama
//         const response = await fetch('http://127.0.0.1:8000', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ message: userMessage }),
//         });

//         const data = await response.json();
//         setChatHistory([...updatedChatHistory, { role: 'bot', content: data.response }]);
//         setMessage('');
//     };

//     return (
//         <div>
//             <div className='chat_history'>
//                 {chatHistory.map((msg, index) => (
//                     <div key={index} className={msg.role === 'user' ? 'user-message' : 'bot-message'}>
//                         {msg.content}
//                     </div>
//                 ))}
//             </div>
//             <div className='bar_text'>
//                 <textarea
//                     className='text'
//                     id="message"
//                     name="message"
//                     rows="4"
//                     cols="50"
//                     placeholder="Envía un mensaje a DevShorty"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                 />
//                 <img className='send' src={img} onClick={handleSend} alt="send" />
//             </div>
//         </div>
//     );
// }

// export default BarText;

// import React, { useState, useEffect } from 'react';
// import './BarTex.css';
// import img from '../../assets/image/send.png';
// import Welcome from '../ChatMessage/Welcome';

// function BarText() {
//     const [message, setMessage] = useState('');
//     const [chatHistory, setChatHistory] = useState([]);
//     const [loading, setLoading] = useState(false); // Estado para el loader

//     // Enviar mensaje de bienvenida al iniciar el chat
//     useEffect(() => {
//         setChatHistory([{ role: 'bot', content: <Welcome /> }]);
//     }, []);

//     const handleSend = async () => {
//         if (message.trim() === '') return;

//         const userMessage = message.trim();
//         const updatedChatHistory = [...chatHistory, { role: 'user', content: userMessage }];

//         // Si hay un mensaje de bienvenida, se elimina al enviar el primer mensaje
//         if (chatHistory.length === 1) {
//             updatedChatHistory.shift();  // Eliminar el primer mensaje (el de bienvenida)
//         }

//         setChatHistory(updatedChatHistory);
//         setMessage('');
//         setLoading(true); // Activar loader

//         try {
//             // Llamar al backend para obtener la respuesta de Ollama
//             const response = await fetch('http://127.0.0.1:8000', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ message: userMessage }),
//             });

//             const data = await response.json();
//             setChatHistory([...updatedChatHistory, { role: 'bot', content: data.response }]);
//         } catch (error) {
//             setChatHistory([...updatedChatHistory, { role: 'bot', content: 'Lo siento, ocurrió un error.' }]);
//         } finally {
//             setLoading(false); // Desactivar loader
//         }
//     };

//     return (
//         <div>
//             <div className='chat_history'>
//                 {chatHistory.map((msg, index) => (
//                     <div key={index} className={msg.role === 'user' ? 'user-message' : 'bot-message'}>
//                         {msg.content}
//                     </div>
//                 ))}
//                 {loading && (
//                     <div className="loader">
//                         <div className="dot"></div>
//                         <div className="dot"></div>
//                         <div className="dot"></div>
//                     </div>
//                 )}
//             </div>
//             <div className='bar_text'>
//                 <textarea
//                     className='text'
//                     id="message"
//                     name="message"
//                     rows="4"
//                     cols="50"
//                     placeholder="Envía un mensaje a DevShorty"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                 />
//                 <img className='send' src={img} onClick={handleSend} alt="send" />
//             </div>
//         </div>
//     );
// }

// export default BarText;

import React, { useState, useEffect } from 'react';
import './BarTex.css';
import img from '../../assets/image/send.png';
import Welcome from '../ChatMessage/Welcome';

function BarText() {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(false); // Estado para el loader
    const [showWelcome, setShowWelcome] = useState(true); // Estado para el componente de bienvenida

    const handleSend = async () => {
        if (message.trim() === '') return;

        const userMessage = message.trim();
        const updatedChatHistory = [...chatHistory, { role: 'user', content: userMessage }];

        // Eliminar el mensaje de bienvenida al enviar el primer mensaje
        if (showWelcome) {
            setShowWelcome(false); // Desactivar el componente de bienvenida
        }

        setChatHistory(updatedChatHistory);
        setMessage('');
        setLoading(true); // Activar loader

        try {
            // Llamar al backend para obtener la respuesta de Ollama
            const response = await fetch('http://127.0.0.1:8000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();
            setChatHistory([...updatedChatHistory, { role: 'bot', content: data.response }]);
        } catch (error) {
            setChatHistory([...updatedChatHistory, { role: 'bot', content: 'Lo siento, ocurrió un error.' }]);
        } finally {
            setLoading(false); // Desactivar loader
        }
    };

    return (
        <div>
            <div className='chat_history'>
                {showWelcome && (
                    <div className="welcome-message">
                        <Welcome />
                    </div>
                )}
                {chatHistory.map((msg, index) => (
                    <div key={index} className={msg.role === 'user' ? 'user-message' : 'bot-message'}>
                        {msg.content}
                    </div>
                ))}
                {loading && (
                    <div className="loader">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                )}
            </div>
            <div className='bar_text'>
                <textarea
                    className='text'
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                    placeholder="Envía un mensaje a DevShorty"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <img className='send' src={img} onClick={handleSend} alt="send" />
            </div>
        </div>
    );
}

export default BarText;



