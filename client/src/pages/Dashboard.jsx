import { useContext, useState } from "react";
import { UserContext } from '../../context/userContext'
import SideBar from "src/components/molecules/User/SideBar";


const Dashboard = () => {
  // const [isDark, setIsDark] = useState(false);
    const {user} = useContext(UserContext)
  return (
    <div className="dashboard text-black" data-theme='dark'>
        <h1>Dashboard</h1>
        { !!user && (<h2>Hi {user.name} !</h2>) }
        <SideBar/>
    </div>
  )
}

export default Dashboard