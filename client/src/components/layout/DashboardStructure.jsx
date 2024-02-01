import SideBar from "../molecules/User/SideBar"

const DashboardStructure = ({Content, UserName}) => {
  return (
    <div className="flex w-screen">
        <div className="">
            <SideBar/>
        </div>
        
        <div className=" p-20 content">
            <div className="pb-20">
                <h1 className="text-4xl ">{UserName}</h1>
                <p className="pt-3 text-lg tracking-wide">What are you craving today? We've got it all</p>
            </div>
            {Content}
        </div>
    </div>
  )
}

export default DashboardStructure