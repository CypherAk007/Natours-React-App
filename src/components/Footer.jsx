import classes from './Footer.module.scss'
import logo from '../assets/img/logo-green-1x.png'
const Footer  = ()=>{
    return (
        <div className={`${classes['footer']} bg-black h-[40rem] `}>
            <div className={`flex flex-col items-center justify-center `}>
                <div>
                    <img src={logo} className={`h-[10rem] my-24`}alt='company logo'></img>
                </div>
                <div className={`flex justify-center align-top gap-48 text-white font-['lato'] text-2xl `}>
                    <nav>
                        <ul className={`flex gap-8 uppercase border-t-[.1rem] border-white/30 pt-8`}>
                            <li className={` transition-all hover:-text--color-primary hover:rotate-6 hover:scale-125 hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.4)]`}>company</li>
                            <li className={` transition-all hover:-text--color-primary hover:rotate-6 hover:scale-125 hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.4)]`}>contact us</li>
                            <li className={` transition-all hover:-text--color-primary hover:rotate-6 hover:scale-125 hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.4)]`}>carrers</li>
                            <li className={` transition-all hover:-text--color-primary hover:rotate-6 hover:scale-125 hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.4)]`}>privacy policy</li>
                            <li className={` transition-all hover:-text--color-primary hover:rotate-6 hover:scale-125 hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.4)]`}>terms</li>

                        </ul>
                    </nav>
                    <p className={`border-t-[.1rem] pt-8 border-white/30`}>Built by <span className={` inline-block transition-all hover:-text--color-primary hover:rotate-6 hover:scale-125 hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.4)]`}> ABHISHEK KRISHNA TM </span><br/> This project Demonstrates Advance CSS and SASS Techniques.<br/>&copy; 2023 by Abhishek Krishna.<br></br> All rights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;