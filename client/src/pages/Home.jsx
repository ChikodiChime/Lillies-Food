

import Structure from 'src/components/layout/Structure'
import Delivery from 'src/components/molecules/Delivery/Delivery'
import Meals from 'src/components/molecules/Meals/Meals'
import Notify from 'src/components/molecules/Notify/Notify'
import Review from 'src/components/molecules/Review/Review'
import Hero from 'src/components/molecules/hero/Hero'


const Home = () => {
  return (
    <div>
        <Structure>
          <Hero/>
          <Meals/>
          <Review/>
          <Delivery/>
          <Notify/>
        </Structure>
    </div>
  )
}

export default Home