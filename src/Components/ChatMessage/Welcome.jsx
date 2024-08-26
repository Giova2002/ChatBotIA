import './Welcome.css'
import img from '../../assets/image/chat.png'

function Welcome(){
    return(
        <div className='chat_message'>
            <img className='img_welcomeChat' src={img}/>
            <h2 className='welcome_message'>¿En qué te puedo ayudar?</h2>
        </div>
    )
}

export default Welcome