
import Structure from 'src/components/layout/Structure'
import Meals from 'src/components/molecules/Meals/Meals'
import Notify from 'src/components/molecules/Notify/Notify'
import Hero from 'src/components/molecules/hero/Hero'
const Home = () => {
  return (
    <div>
        <Structure>
          <Hero/>
          <Meals/>
          <Notify/>
        </Structure>
    </div>
  )
}

export default Home