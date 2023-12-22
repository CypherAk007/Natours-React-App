const GreenButton = (props)=>{
    return(
        <button className={`${props.className} border-b-2  -border--color-primary-dark text-green-500 hover:-bg--color-primary-light rounded-lg px-4 hover:text-white`}>{props.children}</button>
    )
}

export default GreenButton;