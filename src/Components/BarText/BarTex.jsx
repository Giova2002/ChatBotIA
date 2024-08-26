import './BarTex.css'
import img from '../../assets/image/send.png'

function BarText(){
    return(
        <div className='bar_text'>
                <textarea  className='text' id="message" name="message" rows="4" cols="50" placeholder="Envía un mensaje a DevShorty"></textarea>
                <img className='send' src={img}/>
     
        </div>
    )
}

export default BarText