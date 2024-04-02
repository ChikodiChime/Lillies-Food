import SideBar from "../molecules/User/SideBar"
const DashboardStructure = ({Content, UserName, text}) => {

 

  return (
    <div className="flex w-screen h-screen ">
      
        <div>
            <SideBar/>
            
        </div>
        
        <div className=" p-10 pb-40 content ">
            <div className="pb-20 text-center md:text-left">
                <h1 className="text-4xl ">{UserName}</h1>
                <p className="pt-3 text-lg tracking-wide">{text}</p>
            </div>
            {Content}
        </div>
    </div>
  )
}

export default DashboardStructure