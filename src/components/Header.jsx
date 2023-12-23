import Button from '../UI/Button';
import logo from '../assets/img/logo-white.png'
import classes from './Header.module.scss'

const Header = ()=>{

    return (
        <header className={`${classes.header}  h-[95vh] relative `}>
            <div className={` absolute top-16 left-16 `}>
                <img className={`h-16`} src={logo} alt='logo '></img>
            </div>
            <div className={`absolute top-[40%] left-1/2 -translate-y-2/4 -translate-x-2/4 text-center`}>
                <h1 className={`${classes['heading-primary']} text-white uppercase mb-32`}>
                    <span className={` ${classes['heading-primary-main']} block text-[6rem] font-normal tracking-[35px]`}>Outdoors</span>
                    <span className={` ${classes['heading-primary-sub']} block text-[2rem] font-bold tracking-[17px]`}>is where life happens</span>
                </h1>
                <Button >Discover our tours</Button>
            </div>

            
        </header>
    )
}

export default Header;