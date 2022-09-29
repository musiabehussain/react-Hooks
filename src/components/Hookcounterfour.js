import React,{useState} from 'react'

function Hookcounterfour() {
    const [item , setItem] = useState([])

    const additem=()=>{
        setItem([
            ...item, {
                id:item.length,
                value :Math.floor(Math.random() * 10) + 1
            }])
    }
  return (
    <div>
        <button  onClick={additem}>add a number</button>


        <ul>
            {item.map((items) =>(
                <li key={items.id}>{items.value}  </li>
            ))}
        </ul>
    </div>
  )
}

export default Hookcounterfour