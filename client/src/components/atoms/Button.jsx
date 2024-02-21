
const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className="h-[40px] bg-red-600 outline-none border-none py-5 px-10 text-white text-lg hover:bg-red-700">
      {text}
    </button>
  )
}

export default Button