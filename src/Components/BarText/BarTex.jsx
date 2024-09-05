// import React, { useState, useEffect } from 'react';
// import './BarTex.css';
// import img from '../../assets/image/send.png';
// import Welcome from '../ChatMessage/Welcome';

// function BarText() {
//     const [message, setMessage] = useState('');
//     const [chatHistory, setChatHistory] = useState([]);
//     const [loading, setLoading] = useState(false); // Estado para el loader
//     const [showWelcome, setShowWelcome] = useState(true); // Estado para el componente de bienvenida

//     const handleSend = async () => {
//         if (message.trim() === '') return;

//         const userMessage = message.trim();
//         const updatedChatHistory = [...chatHistory, { role: 'user', content: userMessage }];

//         // Eliminar el mensaje de bienvenida al enviar el primer mensaje
//         if (showWelcome) {
//             setShowWelcome(false); // Desactivar el componente de bienvenida
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
//                 {showWelcome && (
//                     <div className="welcome-message">
//                         <Welcome />
//                     </div>
//                 )}
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

import React, { useState } from 'react';
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

    // Función para renderizar el contenido formateado
    const renderContent = (text) => {
        // Función auxiliar para procesar y aplicar formato
        const formatText = (text) => {
            // Convertir texto con **en negritas**
            return text.split(/\*\*(.*?)\*\*/g).map((part, index) => {
                // Si el índice es impar, es un texto en negritas, de lo contrario, es texto normal
                if (index % 2 === 1) {
                    return <strong key={index}>{part}</strong>;
                } else {
                    // Dividir en líneas
                    const lines = part.split('\n');
                    return (
                        <>
                            {lines.map((line, i) => {
                                const matchNumbered = line.match(/^(\d+)\. (.+)$/);
                                if (matchNumbered) {
                                    return <li key={i}>{matchNumbered[2]}</li>;
                                }
    
                                const matchBullet = line.match(/^\* (.+)$/);
                                if (matchBullet) {
                                    return <li key={i}>{matchBullet[1]}</li>;
                                }
    
                                return <p key={i}>{line}</p>;
                            })}
                        </>
                    );
                }
            });
        };
    
        // Dividir el texto en líneas
        const lines = text.split('\n');
        const content = lines.reduce((acc, line, index) => {
            const matchNumbered = line.match(/^(\d+)\. (.+)$/);
            const matchBullet = line.match(/^\* (.+)$/);
    
            if (matchNumbered) {
                // Agregar ítems numerados
                if (acc.lastType === 'numbered') {
                    acc.items.push(<li key={index}>{matchNumbered[2]}</li>);
                } else {
                    if (acc.items.length) {
                        acc.elements.push(<ol key={acc.elements.length}>{acc.items}</ol>);
                    }
                    acc.items = [<li key={index}>{matchNumbered[2]}</li>];
                    acc.lastType = 'numbered';
                }
            } else if (matchBullet) {
                // Agregar bullet points
                if (acc.lastType === 'bullet') {
                    acc.items.push(<li key={index}>{matchBullet[1]}</li>);
                } else {
                    if (acc.items.length) {
                        acc.elements.push(<ul key={acc.elements.length}>{acc.items}</ul>);
                    }
                    acc.items = [<li key={index}>{matchBullet[1]}</li>];
                    acc.lastType = 'bullet';
                }
            } else {
                // Para líneas normales o cualquier otro contenido
                if (acc.items.length) {
                    if (acc.lastType === 'numbered') {
                        acc.elements.push(<ol key={acc.elements.length}>{acc.items}</ol>);
                    } else if (acc.lastType === 'bullet') {
                        acc.elements.push(<ul key={acc.elements.length}>{acc.items}</ul>);
                    }
                    acc.items = [];
                }
                acc.elements.push(<p key={index}>{formatText(line)}</p>);
                acc.lastType = null;
            }
    
            return acc;
        }, { elements: [], items: [], lastType: null });
    
        // Añadir el último grupo de ítems si existe
        if (content.items.length) {
            if (content.lastType === 'numbered') {
                content.elements.push(<ol key={content.elements.length}>{content.items}</ol>);
            } else if (content.lastType === 'bullet') {
                content.elements.push(<ul key={content.elements.length}>{content.items}</ul>);
            }
        }
    
        return (
            <div>
                {content.elements}
            </div>
        );
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
                        <div>
                            {renderContent(msg.content)}
                        </div>
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




