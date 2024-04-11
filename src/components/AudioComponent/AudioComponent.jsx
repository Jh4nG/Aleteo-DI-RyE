import { useEffect, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import AudioAmbiente from '../../assets/audio/Songplataforma.mp3';
export const AudioComponent = ({
    statusPlay,
    handleStatusPlay,
    handleStatusGlobalAudio
}) => {

    let audioAmbiente = document.querySelector('.audioAmbiente');
    const [statusAudio, setStatusAudio] = useState(false);

    const handleAudioAmbiente = ()=>{
        if(statusAudio) {
            handleStatusPlay(false);
            handleStatusGlobalAudio(false);
        }else{
            handleStatusPlay(true);
            handleStatusGlobalAudio(true);
        } 
    }

    useEffect(()=>{
        if(audioAmbiente != null){
            try{
                if(statusPlay){
                    audioAmbiente.play();
                    setStatusAudio(true);
                    if(audioAmbiente?.paused){
                        setStatusAudio(false);
                        handleStatusPlay(false);
                        handleStatusGlobalAudio(false);
                    }
                }else{
                    audioAmbiente.pause();
                    setStatusAudio(false);
                }
            }catch(e){
                setStatusAudio(false);
                handleStatusGlobalAudio(false);
            }
        }
    },[statusPlay])
    return (
        <>
            <audio className='audioAmbiente' src={AudioAmbiente} autoPlay loop></audio>
            <div className='audioAmbiente-icon'>
                <button className="btn btn-iconAudio" onClick={handleAudioAmbiente}>
                    {
                        statusAudio ? (
                            <FaVolumeUp />
                        ) : (
                            <FaVolumeMute />
                        )
                    }
                </button>
            </div>
        </>
    )
}