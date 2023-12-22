import GreenButton from "../UI/GreenButton";
import i1 from '../assets/img/nat-1-large.jpg'
import i2 from '../assets/img/nat-2-large.jpg'
import i3 from '../assets/img/nat-3-large.jpg'

const MainSection = ()=>{
    return (
        <div className={` flex flex-col tracking-widest items-center text-red -bg--color-grey-light-1 min-h-[90rem] -mt-[19rem]`}>
            <div className={`pt-[25rem] text-6xl inline-block bg-gradient-to-r -from--color-primary-light -to--color-primary-dark bg-clip-text text-transparent font-semibold uppercase`}>exciting tours for adventurous people</div>
            <div className={`mt-[10rem] flex justify-between  gap-20 px-[10rem] text-2xl self-stretch  `}>
                <div className={`basis-[50%] leading-relaxed flex flex-col items-start font-medium`}>
                    <div className={`px-16 mb-8`}>
                        <h2 className={`uppercase font-semibold mb-6`}>you're going to fall in love with nature</h2>
                        <p>The connection between the physical world surrounding us and the life inside us. Nature is God's most precious and valuable gift to humans. Within the Solar System, it is third closest to the Sun. </p>
                    </div>
                    <div className={`px-16`}>
                        <h2 className={`uppercase font-semibold mb-6`}>Live adventures like you have never before</h2>
                        <p>Earth is the only planet known to support life, and its natural features are the subject of many fields of scientific research. Within the Solar System, it is third closest to the Sun.</p>
                    </div>
                    <GreenButton className={`ml-16 mt-12 `} >Learn more &rarr;</GreenButton>
                </div>
                <div className={`flex-1 relative`}>
                    <img src={i1} className={` shadow-button absolute hover:outline-offset-8 hover:outline hover:outline-8 hover:-outline--color-primary hover:z-20 hover:scale-[1.05] hover:shadow-dark  transition-all z-10  w-[55%] rounded-lg left-0 -top-8`}></img>
                    <img src={i2} className={`shadow-button  absolute hover:outline-offset-8 hover:outline hover:outline-8 hover:-outline--color-primary hover:z-20 hover:scale-[1.05] hover:shadow-dark transition-all z-10  w-[55%] rounded-lg right-0 top-8`}></img>
                    <img src={i3} className={`shadow-button absolute hover:outline-offset-8 hover:outline hover:outline-8 hover:-outline--color-primary hover:z-20 hover:scale-[1.05] hover:shadow-dark transition-all z-10  w-[55%] rounded-lg left-[20%] top-48`}></img>
                </div>
            </div>
        </div>
    )
}

export default MainSection;