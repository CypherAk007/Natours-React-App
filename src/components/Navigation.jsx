import classes from './Navigation.module.scss'

const Navigation = ()=>{
    return (
        <div className={`${classes['navigation']}`}>
            <input type='checkbox' className={`${classes['navigation__checkbox']}`} id='navi-toggle'></input>
            <label for='navi-toggle' className={`${classes['navigation__button']}`}>MENU</label>
            <div className={`${classes['navigation__background']}`}>&nbsp;</div>
                {/* huge container which will span the whole page  */}
            <nav className={`${classes['navigation__nav']}`}>
                <ul className={`${classes['navigation__list']}`}>
                    <li className={`${classes['navigation__item']}`}><a href='#' className={`${classes['navigation__link']}`}><span>01</span>About Natours</a></li>
                    <li className={`${classes['navigation__item']}`}><a href='#' className={`${classes['navigation__link']}`}><span>02</span>Your Benfits</a></li>
                    <li className={`${classes['navigation__item']}`}><a href='#' className={`${classes['navigation__link']}`}><span>03</span>Popular Tours</a></li>
                    <li className={`${classes['navigation__item']}`}><a href='#' className={`${classes['navigation__link']}`}><span>04</span>Stories</a></li>
                    <li className={`${classes['navigation__item']}`}><a href='#' className={`${classes['navigation__link']}`}><span>05</span>Book Now</a></li>
                </ul>

            </nav>
        </div>
    )
}

export default Navigation;