import classes from './Button.module.scss'

const Button  = (props)=>{
    return (
        <button 
        className=
        {`${classes.btn}  transition-all   inline-block text-3xl uppercase mt-12  bg-white px-12 py-6  no-underline rounded-full
         hover:-translate-y-4 hover:shadow-button hover:relative hover:after:scale-x-[1.4] hover:after:scale-y-[1.6] hover:after:opacity-0 active:relative
         active:-translate-y-0 active:shadow-[0_5px_10px_rgba(0,0,0,.2)]
          `}
        >
            {props.children}
            </button>
    )
}

export default Button;

// className={props.className}