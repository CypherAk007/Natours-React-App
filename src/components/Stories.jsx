import classes from './Stories.module.scss'
import video1 from '../assets/img/video.mp4'
import video2 from '../assets/img/video.webm'
import StoryCard from '../UI/StoryCard'
import r1 from '../assets/img/nat-8.jpg'
import r2 from '../assets/img/nat-9.jpg'

import GreenButton from'../UI/GreenButton'
const Stories = ()=>{
    return (

        <div className={`${classes['stories']} -bg--color-grey-light-1  px-0 relative h-[100rem]`}>
            <div className={`${classes['stories__video']} absolute top-0 left-0 h-[100%] w-[100%] -z-1 overflow-hidden opacity-20 `}>

                <video className={`${classes['bg-video__content']}`} autoPlay muted loop>
                    <source src={video1} type="video/mp4"></source>
                    <source src={video2} type="video/webm"></source>
                    your Browser is not supported
                </video>
            </div>
            <div className={`flex flex-col items-center  relative`}>
                <h1 className={`text-5xl my-8 tracking-wider inline-block bg-gradient-to-r -from--color-primary-light -to--color-primary-dark bg-clip-text text-transparent font-semibold uppercase`}>We make people genuinely happy</h1>
                <StoryCard reviewerpic={r1} heading={'I had the best week ever with my family'}></StoryCard>
                <StoryCard reviewerpic={r2} heading={'wow! my life is completely different now'}></StoryCard>
                <GreenButton className={`ml-16 mt-20 p-4 text-2xl hover:-bg--color-primary hover:text-white `} >Read all stories &rarr;</GreenButton>
            </div>
        </div>
    )   
}


export default Stories;