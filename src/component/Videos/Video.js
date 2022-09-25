import {forwardRef,useImperativeHandle,useRef} from 'react'
import video1 from './component/Videos/video-1.mp4'
function Video (prop,ref) {
    const videoRef = useRef()
    useImperativeHandle(ref,()=> ({
        play() {
            videoRef.current.play()

        },
        pause() {
            videoRef.current.pause()
        }
    }))
    return (
        <video
        ref={videoRef}
        style={{width: '10%'}}
         src={video1}
         controls
         />
    )
}
export default forwardRef(Video)