import classes from './Button.module.scss'

const Button  = (props)=>{
    return (
        <button 
        className=
        {` ${props.className} ${classes.btn} ${props.green===true?classes['btn--green']:classes['btn--white']}  transition-all inline-block text-3xl uppercase   px-12 py-6  rounded-full
         hover:-translate-y-4 hover:shadow-button 
         active:-translate-y-[1px] active:shadow-[0_5px_10px_rgba(0,0,0,.2)]

          `}
        >
            {props.children}
            </button>
    )
}

export default Button;

// className={props.className}
// hover:relative hover:after:scale-x-[1.4] hover:after:scale-y-[1.6] hover:after:opacity-0 active:relative