import { Banner } from '../../components/molecules/Banner/bannerM'
import Categories from '../../components/organisms/BookCategories/bookcatO'
import { Footer } from '../../components/organisms/Footer/footerO'
import { HeaderComponent } from '../../components/organisms/Header/headerO'
import {Entrepreneurship} from '../../components/templates/EntrepreneurshipCategory/enterprT'
import Library from '../../data/Library'
import Find from '../../components/organisms/searchbarfunction/searchbarfunction'
import { useState } from 'react'


const EntrepreneurshipPage = () => {
    const[ftitle, setTitle] = useState('')
    return (

        <Entrepreneurship 
        header={<HeaderComponent />}
        banner={<Banner />}
        footer={<Footer />}
        

        
        find={<Find setTitle = {setTitle}/>}

        trendingBlinks={
            <Categories data={Library} ftitle = {ftitle}
            status="trending" />
        }
        justAddedBlinks={
            <Categories data={Library} ftitle = {ftitle}
            status="justAdded" />
        }
        featuredBlinks={
            <Categories data={Library} ftitle = {ftitle}
            status="featured" />
        } />
    )
}

export default EntrepreneurshipPage