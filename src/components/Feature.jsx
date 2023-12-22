import Card from '../UI/Card'
import classes from './Feature.module.scss'

const Feature = ()=>{
    return (
        <section className={`${classes['section-features']} -skew-y-6 -mt-[10rem]`}>
            {/* <div>image</div> */}
            <div className={`${classes['feature-row']} mx-[10rem] flex  gap-[8rem] skew-y-6`}>
                <Card img={'../../public/sprite.svg#icon-dribbble'} heading={'Explore The World'} p={'The connection between the physical world surrounding us and the life inside us. Nature is God\'s'}></Card>
                <Card img={'../../public/sprite.svg#icon-compass2'} heading={'Explore The World'} p={'The connection between the physical world surrounding us and the life inside us. Nature is God\'s'}></Card>
                <Card img={'../../public/sprite.svg#icon-map2'} heading={'Explore The World'} p={'The connection between the physical world surrounding us and the life inside us. Nature is God\'s'}></Card>
                <Card img={'../../public/sprite.svg#icon-heart'} heading={'Explore The World'} p={'The connection between the physical world surrounding us and the life inside us. Nature is God\'s'}></Card>
                
            </div>

        </section>
    )
}

export default Feature