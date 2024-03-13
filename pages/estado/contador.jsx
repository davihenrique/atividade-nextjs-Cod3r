import { useState } from "react";
import ContadorDisplay from "../../components/ContadorDisplay";

export default function contador(){

    const [contador, setContador] = useState(0)

    function darUmUp(){
        setContador(c => c+1)
    }

    function darUmDown(){
        setContador(c => c-1)
    } 
    return (

        <div style={{

            display:"flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>Contador</h1>
            <ContadorDisplay  numero={contador}/>
            <div>Valor: {contador}</div>
            <div>
            <button onClick={darUmDown}>-</button>
            <button onClick={darUmUp}>+</button>
            </div>
        </div>
    )
}
