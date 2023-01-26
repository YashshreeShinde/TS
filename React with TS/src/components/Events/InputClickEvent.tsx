type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  }

//Destruturing props
const InputClickEvent=({ value, handleChange }: InputProps)=>{

    //We can have function here too instead of props
    //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event)}
    return(
        <div>
             <input type='text' value={value} onChange={handleChange} />
        </div>
    )
}
export default InputClickEvent;