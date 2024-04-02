
const Toggle = ({handleChange, isChecked}) => {
  return (
    <div className="absolute top-8 right-8">
        <input
          type="checkbox" 
          name="" 
          id="check"
          className="toggle hidden "
          onChange={handleChange}
          checked={isChecked} 
        />
        <label htmlFor="check" className="togLabel flex cursor-pointer items-center text-2xl"></label>
    </div>
  )
}

export default Toggle