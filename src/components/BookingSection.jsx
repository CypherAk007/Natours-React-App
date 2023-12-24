import classes from './BookingSection.module.scss'


const BookingSection = ()=>{
    return(
        <div className={`${classes['section-book']} `}>
            <div className={`${classes['book']}`}></div>
        </div>
    )

}

export default BookingSection;