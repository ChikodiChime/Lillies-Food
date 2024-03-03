import { useContext } from "react";
import { UserContext } from '../../context/userContext'
import useLocalStorage from 'use-local-storage';
import Toggle from "src/components/atoms/Toggle";
import DashboardStructure from "src/components/layout/DashboardStructure";
import CartComponent from "src/components/molecules/User/CartComponent";


const Cart = () => {
  const [isDark, setIsDark] = useLocalStorage('isDark', false);
    const {user} = useContext(UserContext)
  return (
    <div className="dashboard " data-theme={isDark ? "dark" : "light"}>
      <Toggle
      isChecked={isDark}
      handleChange={() => setIsDark(!isDark) }
      />
        
        
       
        <DashboardStructure Content={<CartComponent />} UserName={ !!user && (<p>Good Day, <span className="text-red-600 font-extrabold ">{user.name}</span>  </p>) } text={'Your Cart'} />
    </div>
  )
}

export default Cart