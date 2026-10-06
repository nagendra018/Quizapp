import { useState} from "react";
function Form(){
    const[name,setName]=useState("");
    return(
        <><form>
            <input type='text' value={name}
            onChange={(e)=>setName(e.target.value)}>
            </input>
            <input type='submit'></input>
         </form>
         <h1>hi {name}</h1>   
        </>
    );
}
