import { useContext } from "react";
import { UserContext } from '../../context/userContext'
import useLocalStorage from 'use-local-storage'
import SideBar from "src/components/molecules/User/SideBar";
import Toggle from "src/components/atoms/Toggle";


const Dashboard = () => {
  const [isDark, setIsDark] = useLocalStorage('isDark', false);
    const {user} = useContext(UserContext)
  return (
    <div className="dashboard text-black" data-theme={isDark ? "dark" : "light"}>
      <Toggle
      isChecked={isDark}
      handleChange={() => setIsDark(!isDark) }
      />
        <h1>Dashboard</h1>
        { !!user && (<h2>Hi {user.name} !</h2>) }
        <SideBar/>
    </div>
  )
}

export default Dashboard