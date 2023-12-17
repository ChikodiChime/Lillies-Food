import Footer from 'src/components/molecules/footer/Footer'
import Navbar from 'src/components/molecules/navbar/Navbar'

const Structure = ({ children }) => {
  return (
    <div>
        <Navbar />
        { children }
        <Footer/>
    </div>
  )
}

export default Structure