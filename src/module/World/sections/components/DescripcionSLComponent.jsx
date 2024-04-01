import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

export const DescripcionSLComponent = ({
    img,
    audio,
    description
})=> {
    return (
        <div className="container">
            <div className="row SL">
                <div className="music-player-container">
                    <img src={img} 
                        style={{ width: '70%' }}
                    />
                    <AudioPlayer
                        src={audio}
                        loop={true}
                    />
                </div>
                    <p>
                        {description}
                    </p>
            </div>
        </div>
    )
}