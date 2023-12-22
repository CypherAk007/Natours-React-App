import classes from './Card.module.scss'

const Card = (props) => {
    return (
        <div className={`${classes['feature-box']}  hover:-translate-y-4 hover:scale-[1.01] transition-all leading-relaxed tracking-wider  bg-white text-[1.6rem] p-[2.5rem] text-center rounded-[1rem] shadow-dark flex flex-col justify-center items-center`}>
            <div className={`py-8`}>
            <svg className={`${classes['user-nav__icon'] } h-16 w-16 fill-green-500 `}>
                            <use xlinkHref={props.img}></use>
                        </svg>
            </div>
            <h3 className={`text-2xl font-semibold uppercase my-6 `}>{props.heading}</h3>
            <p className={`px-10 `}>
                {props.p}
            </p>
        </div>
    )
}

export default Card;