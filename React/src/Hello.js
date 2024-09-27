function Hello(){
    const hiAll=()=>{
        alert("hello everyone")
    }
    const hiYou=(name)=>{
        alert("Hello "+ name)
    }
	//vị trí đặt function
    return(
        <span>
            <button onClick={hiAll}>Hi All</button>
            <button onClick={()=>hiYou("Peter")}>Hi you</button>
        </span>
        
    )
}
export default Hello
