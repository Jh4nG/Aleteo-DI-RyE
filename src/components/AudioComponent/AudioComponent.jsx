import { useEffect } from 'react';
import AudioAmbiente from '../../assets/audio/Songplataforma.mp3';
export const AudioComponent = ({
    statusPlay
}) => {

    let audioAmbiente = document.querySelector('.audioAmbiente');

    useEffect(()=>{
        if(audioAmbiente != null){
            console.log(audioAmbiente);
            if(statusPlay){
                audioAmbiente.play();
            }else{
                audioAmbiente.pause();
            }
        }
    },[statusPlay])
    return (
        <>
            <audio className='audioAmbiente' src={AudioAmbiente} autoPlay></audio>
        </>
    )
}