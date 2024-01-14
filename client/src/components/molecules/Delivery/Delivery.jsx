import rider from '../../../icons/img/rider.png'
const Delivery = () => {
  return (
    
    <div className=" w-full flex px-56 py-12 items-center justify-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-500 via-red-600 to-red-500" >
        <div className="left w-1/2">
            <h1 className="text-white font-extrabold text-[5rem]">We deliver throughout Enugu State</h1>
            <p className="font-light leading-7 tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusamus officia, quod, assumenda laborum vero perferendis earum voluptatem vitae consequuntur quo quos expedita ad? Ad voluptate doloribus provident cupiditate ipsa.</p>
            <button className="px-8 py-4 mt-6 border border-white font-semibold">Read More</button>
        </div>
        <div className="right w-1/2 flex justify-end">
            <img src={rider} alt="" className='object-cover w-[80%]' />
        </div>

    </div>
  )
}

export default Delivery