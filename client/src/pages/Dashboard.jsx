import { useContext } from "react";
import { UserContext } from '../../context/userContext'
import useLocalStorage from 'use-local-storage';
import Toggle from "src/components/atoms/Toggle";
import DashboardStructure from "src/components/layout/DashboardStructure";
import DashboardComponent from "src/components/molecules/User/DashboardComponent";


const Dashboard = () => {
  const [isDark, setIsDark] = useLocalStorage('isDark', false);
    const {user} = useContext(UserContext)
  return (
    <div className="dashboard " data-theme={isDark ? "dark" : "light"}>
      <Toggle
      isChecked={isDark}
      handleChange={() => setIsDark(!isDark) }
      
      />
        
        
       
        <DashboardStructure Content={<DashboardComponent/>} UserName={ !!user && (<p>Good Day, <span className="text-red-600 font-extrabold ">{user.name}</span>  </p>) } text="What are you craving today? We've got it all" />
    </div>
  )
}

export default Dashboard