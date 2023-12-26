import classes from './StoryCard.module.scss'


const StoryCard = (props)=>{
    return (
        <div className={`${classes['story']} relative mt-32 w-[75%] p-[6rem] pl-[9rem] -skew-x-12 bg-white`}>
            <figure className={`${classes['story-shape']}   h-[15rem] w-[15rem]  float-left`}>
                <img src={props.reviewerpic} className={`h-[100%] `}alt="reviewerpic" />
                <figcaption className={`text-white block text-[1.7rem] uppercase absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center opacity-100 hover:opacity-0`}>{props.plpname}</figcaption>
            </figure>
            <div className={`${classes['story-text']} skew-x-12`}>
                <h3 className={`uppercase text-3xl font-semibold`}>{props.heading}</h3>
                <p className={`mt-6 text-2xl font-medium `}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, iusto!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, enim.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, iusto!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, enim.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, iusto!
                    
                </p>
            </div>
        </div>
    )
}

export default StoryCard;