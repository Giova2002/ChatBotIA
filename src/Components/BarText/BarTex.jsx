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

// import React, { useState } from 'react';
// import './BarTex.css';
// import img from '../../assets/image/send.png';
// import Welcome from '../ChatMessage/Welcome';
// import Navbar from '../Navbar/Navbar';

// function BarText() {
//     const [message, setMessage] = useState('');
//     const [chatHistory, setChatHistory] = useState([]);
//     const [loading, setLoading] = useState(false); // Estado para el loader
//     const [showWelcome, setShowWelcome] = useState(true); // Estado para el componente de bienvenida

//     const handleSend = async (presetMessage = null) => {
//         const messageToSend = presetMessage || message.trim();  // Usar presetMessage si existe, si no, usar el estado message
    
//         if (messageToSend === '') return;
    
//         const userMessage = messageToSend;
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
    
//     const sendPresetMessage = (presetMessage) => {
//         handleSend(presetMessage);  // Enviar el mensaje predefinido
//     };
    

//     // const handleSend = async () => {
//     //     if (message.trim() === '') return;

//     //     const userMessage = message.trim();
//     //     const updatedChatHistory = [...chatHistory, { role: 'user', content: userMessage }];

//     //     // Eliminar el mensaje de bienvenida al enviar el primer mensaje
//     //     if (showWelcome) {
//     //         setShowWelcome(false); // Desactivar el componente de bienvenida
//     //     }

//     //     setChatHistory(updatedChatHistory);
//     //     setMessage('');
//     //     setLoading(true); // Activar loader

//     //     try {
//     //         // Llamar al backend para obtener la respuesta de Ollama
//     //         const response = await fetch('http://127.0.0.1:8000', {
//     //             method: 'POST',
//     //             headers: {
//     //                 'Content-Type': 'application/json',
//     //             },
//     //             body: JSON.stringify({ message: userMessage }),
//     //         });

//     //         const data = await response.json();
//     //         setChatHistory([...updatedChatHistory, { role: 'bot', content: data.response }]);
//     //     } catch (error) {
//     //         setChatHistory([...updatedChatHistory, { role: 'bot', content: 'Lo siento, ocurrió un error.' }]);
//     //     } finally {
//     //         setLoading(false); // Desactivar loader
//     //     }
//     // };

//     // const sendPresetMessage = (presetMessage) => {
//     //     handleSend(presetMessage);  // Usar la función handleSend para enviar el mensaje predeterminado
//     // };

//     // Función para renderizar el contenido formateado
//     const renderContent = (text) => {
//         // Función auxiliar para procesar y aplicar formato
//         const formatText = (text) => {
//             // Convertir texto con **en negritas**
//             return text.split(/\*\*(.*?)\*\*/g).map((part, index) => {
//                 // Si el índice es impar, es un texto en negritas, de lo contrario, es texto normal
//                 if (index % 2 === 1) {
//                     return <strong key={index}>{part}</strong>;
//                 } else {
//                     // Dividir en líneas
//                     const lines = part.split('\n');
//                     return (
//                         <>
//                             {lines.map((line, i) => {
//                                 const matchNumbered = line.match(/^(\d+)\. (.+)$/);
//                                 if (matchNumbered) {
//                                     return <li key={i}>{matchNumbered[2]}</li>;
//                                 }
    
//                                 const matchBullet = line.match(/^\* (.+)$/);
//                                 if (matchBullet) {
//                                     return <li key={i}>{matchBullet[1]}</li>;
//                                 }
    
//                                 return <p key={i}>{line}</p>;
//                             })}
//                         </>
//                     );
//                 }
//             });
//         };
    
//         // Dividir el texto en líneas
//         const lines = text.split('\n');
//         const content = lines.reduce((acc, line, index) => {
//             const matchNumbered = line.match(/^(\d+)\. (.+)$/);
//             const matchBullet = line.match(/^\* (.+)$/);
    
//             if (matchNumbered) {
//                 // Agregar ítems numerados
//                 if (acc.lastType === 'numbered') {
//                     acc.items.push(<li key={index}>{matchNumbered[2]}</li>);
//                 } else {
//                     if (acc.items.length) {
//                         acc.elements.push(<ol key={acc.elements.length}>{acc.items}</ol>);
//                     }
//                     acc.items = [<li key={index}>{matchNumbered[2]}</li>];
//                     acc.lastType = 'numbered';
//                 }
//             } else if (matchBullet) {
//                 // Agregar bullet points
//                 if (acc.lastType === 'bullet') {
//                     acc.items.push(<li key={index}>{matchBullet[1]}</li>);
//                 } else {
//                     if (acc.items.length) {
//                         acc.elements.push(<ul key={acc.elements.length}>{acc.items}</ul>);
//                     }
//                     acc.items = [<li key={index}>{matchBullet[1]}</li>];
//                     acc.lastType = 'bullet';
//                 }
//             } else {
//                 // Para líneas normales o cualquier otro contenido
//                 if (acc.items.length) {
//                     if (acc.lastType === 'numbered') {
//                         acc.elements.push(<ol key={acc.elements.length}>{acc.items}</ol>);
//                     } else if (acc.lastType === 'bullet') {
//                         acc.elements.push(<ul key={acc.elements.length}>{acc.items}</ul>);
//                     }
//                     acc.items = [];
//                 }
//                 acc.elements.push(<p key={index}>{formatText(line)}</p>);
//                 acc.lastType = null;
//             }
    
//             return acc;
//         }, { elements: [], items: [], lastType: null });
    
//         // Añadir el último grupo de ítems si existe
//         if (content.items.length) {
//             if (content.lastType === 'numbered') {
//                 content.elements.push(<ol key={content.elements.length}>{content.items}</ol>);
//             } else if (content.lastType === 'bullet') {
//                 content.elements.push(<ul key={content.elements.length}>{content.items}</ul>);
//             }
//         }
    
//         return (
//             <div>
//                 {content.elements}
//             </div>
//         );
//     };

//     return (
//         <div>
//             <Navbar onSendMessage={sendPresetMessage} chatHistory={chatHistory} />
//             <div className='chat_history'>
//                 {showWelcome && (
//                     <div className="welcome-message">
//                         <Welcome />
//                     </div>
//                 )}
//                 {chatHistory.map((msg, index) => (
//                     <div key={index} className={msg.role === 'user' ? 'user-message' : 'bot-message'}>
//                         <div>
//                             {renderContent(msg.content)}
//                         </div>
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
//                     placeholder="Send a message to DevShorty"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                 />
//                 {/* <img className='send' src={img} onClick={handleSend} alt="send" /> */}
//                 <img className='send' src={img} onClick={() => handleSend()} alt="send" />

//             </div>
//         </div>
//     );
// }

// export default BarText;


// const handleSend = async (presetMessage = null) => {
    //     const messageToSend = presetMessage || message.trim();

    //     if (messageToSend === '') return;

    //     const userMessage = messageToSend;
    //     const updatedChatHistory = [...chatHistory, { role: 'user', content: userMessage }];

    //     if (showWelcome) {
    //         setShowWelcome(false);
    //     }

    //     setChatHistory(updatedChatHistory);
    //     setMessage('');
    //     setLoading(true);

    //     try {
    //         const response = await fetch('http://127.0.0.1:8000', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ message: userMessage }),
    //         });

    //         const data = await response.json();
    //         const timestamp = new Date(); // Crear una nueva fecha localmente (si no la obtienes del backend)
    //         setChatHistory([...updatedChatHistory, { role: 'bot', content: data.response, timestamp}]);
    //     } catch (error) {
    //         setChatHistory([...updatedChatHistory, { role: 'bot', content: 'Lo siento, ocurrió un error.' }]);
    //     } finally {
    //         setLoading(false);
    //     }
    // };





//AQUIIII
// import React, { useState } from 'react';
// import './BarTex.css';
// import img from '../../assets/image/send.png';
// import Welcome from '../ChatMessage/Welcome';
// import Navbar from '../Navbar/Navbar';
// import { format } from 'date-fns'; // Importar la función para formatear la fecha

// function BarText() {
//     const [message, setMessage] = useState('');
//     const [chatHistory, setChatHistory] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [showWelcome, setShowWelcome] = useState(true);

//     const handleSend = async (presetMessage = null) => {
//         const messageToSend = presetMessage || message.trim();
    
//         if (messageToSend === '') return;
    
//         const timestamp = new Date(); // Crear un nuevo timestamp
    
//         const userMessage = {
//             role: 'user',
//             content: messageToSend,
//             timestamp: timestamp.toISOString(), // Convertir a ISO string para formato de fecha
//         };
    
//         const updatedChatHistory = [...chatHistory, userMessage];
    
//         if (showWelcome) {
//             setShowWelcome(false);
//         }
    
//         setChatHistory(updatedChatHistory);
//         setMessage('');
//         setLoading(true);
    
//         try {
//             const response = await fetch('http://127.0.0.1:8000', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ message: messageToSend }),
//             });
    
//             const data = await response.json();
//             setChatHistory([...updatedChatHistory, {
//                 role: 'bot',
//                 content: data.response,
//                 timestamp: timestamp.toISOString(), // Usar el mismo timestamp
//             }]);
//         } catch (error) {
//             setChatHistory([...updatedChatHistory, {
//                 role: 'bot',
//                 content: 'Lo siento, ocurrió un error.',
//                 timestamp: timestamp.toISOString(), // Usar el mismo timestamp
//             }]);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Función para renderizar el contenido formateado
//     const renderContent = (text) => {
//         const formatText = (text) => {
//             return text.split(/\*\*(.*?)\*\*/g).map((part, index) => {
//                 if (index % 2 === 1) {
//                     return <strong key={index}>{part}</strong>;
//                 } else {
//                     const lines = part.split('\n');
//                     return (
//                         <>
//                             {lines.map((line, i) => {
//                                 const matchNumbered = line.match(/^(\d+)\. (.+)$/);
//                                 if (matchNumbered) {
//                                     return <li key={i}>{matchNumbered[2]}</li>;
//                                 }

//                                 const matchBullet = line.match(/^\* (.+)$/);
//                                 if (matchBullet) {
//                                     return <li key={i}>{matchBullet[1]}</li>;
//                                 }

//                                 return <p key={i}>{line}</p>;
//                             })}
//                         </>
//                     );
//                 }
//             });
//         };

//         const lines = text.split('\n');
//         const content = lines.reduce((acc, line, index) => {
//             const matchNumbered = line.match(/^(\d+)\. (.+)$/);
//             const matchBullet = line.match(/^\* (.+)$/);

//             if (matchNumbered) {
//                 if (acc.lastType === 'numbered') {
//                     acc.items.push(<li key={index}>{matchNumbered[2]}</li>);
//                 } else {
//                     if (acc.items.length) {
//                         acc.elements.push(<ol key={acc.elements.length}>{acc.items}</ol>);
//                     }
//                     acc.items = [<li key={index}>{matchNumbered[2]}</li>];
//                     acc.lastType = 'numbered';
//                 }
//             } else if (matchBullet) {
//                 if (acc.lastType === 'bullet') {
//                     acc.items.push(<li key={index}>{matchBullet[1]}</li>);
//                 } else {
//                     if (acc.items.length) {
//                         acc.elements.push(<ul key={acc.elements.length}>{acc.items}</ul>);
//                     }
//                     acc.items = [<li key={index}>{matchBullet[1]}</li>];
//                     acc.lastType = 'bullet';
//                 }
//             } else {
//                 if (acc.items.length) {
//                     if (acc.lastType === 'numbered') {
//                         acc.elements.push(<ol key={acc.elements.length}>{acc.items}</ol>);
//                     } else if (acc.lastType === 'bullet') {
//                         acc.elements.push(<ul key={acc.elements.length}>{acc.items}</ul>);
//                     }
//                     acc.items = [];
//                 }
//                 acc.elements.push(<p key={index}>{formatText(line)}</p>);
//                 acc.lastType = null;
//             }

//             return acc;
//         }, { elements: [], items: [], lastType: null });

//         if (content.items.length) {
//             if (content.lastType === 'numbered') {
//                 content.elements.push(<ol key={content.elements.length}>{content.items}</ol>);
//             } else if (content.lastType === 'bullet') {
//                 content.elements.push(<ul key={content.elements.length}>{content.items}</ul>);
//             }
//         }

//         return (
//             <div>
//                 {content.elements}
//             </div>
//         );
//     };

//     return (
//         <div>
//             <Navbar onSendMessage={handleSend} chatHistory={chatHistory} />
//             <div className='chat_history'>
//                 {showWelcome && (
//                     <div className="welcome-message">
//                         <Welcome />
//                     </div>
//                 )}
//                 {chatHistory.map((msg, index) => (
//                     <div key={index} className={msg.role === 'user' ? 'user-message' : 'bot-message'}>
//                         <div>
//                             {renderContent(msg.content)}
//                             {/* <small>{formatTimestamp(msg.timestamp)}</small> */}
//                         </div>
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
//                     placeholder="Send a message to DevShorty"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                 />
//                 <img className='send' src={img} onClick={() => handleSend()} alt="send" />
//             </div>
//         </div>
//     );
// }

// export default BarText;





import { useState, useEffect, useRef } from 'react';
import './BarTex.css';
import img from '../../assets/image/send.png';
import Welcome from '../ChatMessage/Welcome';
import Navbar from '../Navbar/Navbar';

function BarText() {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);

    const chatHistoryRef = useRef(null);  // Ref para el contenedor de la historia del chat
    const lastMessageRef = useRef(null);

    // Función para obtener el historial del día actual al cargar la página
    const loadTodayHistory = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/history/today', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            if (data.history) {
                const history = [];
                for (let item of data.history) {
                    history.push({
                        role: 'user',
                        content: item.userMessage,
                        timestamp: item.timestamp,
                    });
                    history.push({
                        role: 'bot',
                        content: item.botResponse,
                        timestamp: item.timestamp,
                    });
                }
                setChatHistory(history);
            }
        } catch (error) {
            console.error("Error al cargar el historial:", error);
        }
    };

    const handleSend = async (presetMessage = null) => {
        const messageToSend = presetMessage || message.trim();
        if (messageToSend === '') return;

        const timestamp = new Date();

        const userMessage = {
            role: 'user',
            content: messageToSend,
            timestamp: timestamp.toISOString(),
        };

        const updatedChatHistory = [...chatHistory, userMessage];

        if (showWelcome) {
            setShowWelcome(false);
        }

        setChatHistory(updatedChatHistory);
        setMessage('');
        setLoading(true);

        try {
            const response = await fetch('http://127.0.0.1:8000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: messageToSend }),
            });

            const data = await response.json();
            setChatHistory([...updatedChatHistory, {
                role: 'bot',
                content: data.response,
                timestamp: timestamp.toISOString(),
            }]);
        } catch (error) {
            setChatHistory([...updatedChatHistory, {
                role: 'bot',
                content: 'Lo siento, ocurrió un error.',
                timestamp: timestamp.toISOString(),
            }]);
        } finally {
            setLoading(false);
        }
    };

    const hideWelcomeMessage = () => {
        setShowWelcome(false);
    };

    const renderContent = (text) => {
        const formatText = (text) => {
            return text.split(/\*\*(.*?)\*\*/g).map((part, index) => {
                if (index % 2 === 1) {
                    return <strong key={index}>{part}</strong>;
                } else {
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

        const lines = text.split('\n');
        const content = lines.reduce((acc, line, index) => {
            const matchNumbered = line.match(/^(\d+)\. (.+)$/);
            const matchBullet = line.match(/^\* (.+)$/);

            if (matchNumbered) {
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

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatHistory, loading]);

    return (
        <div>
            <Navbar onSendMessage={handleSend} chatHistory={chatHistory} loadTodayHistory={loadTodayHistory} hideWelcomeMessage={hideWelcomeMessage}/>
            <div className='chat_history' ref={chatHistoryRef}>
                {showWelcome && (
                    <div className="welcome-message">
                        <Welcome />
                    </div>
                )}
                {chatHistory.map((msg, index) => (
                    <div key={index} className={msg.role === 'user' ? 'user-message' : 'bot-message'} ref={index === chatHistory.length - 1 ? lastMessageRef : null}>
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
                    placeholder="Send a message to DevShorty"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <img className='send' src={img} onClick={() => handleSend()} alt="send" />
            </div>
        </div>
    );
}

export default BarText;










