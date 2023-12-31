import Button from '../UI/Button';
import classes from './BookingSection.module.scss'


const BookingSection = ()=>{
    return(
        <div className={`${classes['section-book']} `}>
            <div className={`${classes['book']}`}>
                <div className={`${classes['book__form']}`}>
                    <form action="#" className={`${classes['form']}`}>
                    <div className={`pb-[3rem] text-5xl inline-block bg-gradient-to-r -from--color-primary-light -to--color-primary-dark bg-clip-text text-transparent font-semibold uppercase`}>start booking now</div>
                        <div className={`${classes['form__group']}`}>
                            <input type='text' className={`${classes['form__input']}`} placeholder='Full Name' id="name" required></input>
                            <label for='name' className={`${classes['form__label']}`}>Full Name</label>
                        </div>
                        <div className={`${classes['form__group']}`}>
                            <input type='email' className={`${classes['form__input']}`} placeholder='Email Address' id="email" required></input>
                            <label for='email' className={`${classes['form__label']}`}>Email Address</label>
                        </div>
                        <div className={`${classes['form__radio-group']}`}>
                            <input type='radio' className={`${classes['form__radio-input']}`}  id="small" name='size'></input>
                            <label for='small' className={`${classes['form__radio-label']}`}>
                                <span className={`${classes['form__radio-button']}`}></span>
                                Small tour group</label>
                        </div>
                        <div className={`${classes['form__radio-group']}`}>
                            <input type='radio' className={`${classes['form__radio-input']}`} id="large" name='size'></input>
                            <label for='large' className={`${classes['form__radio-label']}`}>
                            <span className={`${classes['form__radio-button']}`}></span>
                                Large tour group</label>
                        </div>
                        <div className={`${classes['form__group']} mt-16`}>
                            <Button green={true}>Next Step &rarr;</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default BookingSection;