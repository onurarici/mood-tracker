import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceLaugh,faFaceSmile,faFaceMeh,faFaceFrown,faFaceSadTear } from '@fortawesome/free-regular-svg-icons'


export default function Subject(){
    return(
        <div className="subject">
            <input className="mood-name" placeholder="Mood to track"></input>
            {/* <FontAwesomeIcon icon="fa-regular fa-face-laugh" /> */}
            <div className='moods'>
            <div className='mood-sign'>
            <FontAwesomeIcon icon={faFaceLaugh} size="3x" />
            <div className='color-box box'></div>
            </div>
            <div className='mood-sign'>
            <FontAwesomeIcon icon={faFaceSmile} size="3x" />
            <div className='color-box box'></div>
            </div>
            <div className='mood-sign'>
            <FontAwesomeIcon icon={faFaceMeh} size="3x" />
            <div className='color-box box'></div>
            </div>
            <div className='mood-sign'>
            <FontAwesomeIcon icon={faFaceFrown} size="3x" />
            <div className='color-box box'></div>
            </div>
            <div className='mood-sign'>
            <FontAwesomeIcon icon={faFaceSadTear} size='3x' />
            <div className='color-box box'></div>
            </div>
            </div>
        </div>
    )
}