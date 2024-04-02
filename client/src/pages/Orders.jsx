import { useContext } from "react";
import { UserContext } from '../../context/userContext'
import useLocalStorage from 'use-local-storage';
import Toggle from "src/components/atoms/Toggle";
import DashboardStructure from "src/components/layout/DashboardStructure";
import OrdersComponent from "src/components/molecules/User/OrdersComponent";


const Orders = () => {
  const [isDark, setIsDark] = useLocalStorage('isDark', false);
    const {user} = useContext(UserContext)
  return (
    <div className="dashboard " data-theme={isDark ? "dark" : "light"}>
      <Toggle
      isChecked={isDark}
      handleChange={() => setIsDark(!isDark) }
      />
        
        
       
        <DashboardStructure Content={<OrdersComponent />} UserName={ !!user && (<p>Good Day, <span className="text-red-600 font-extrabold ">{user.name}</span>  </p>) } text={'Your Orders'} />
    </div>
  )
}

export default Orders