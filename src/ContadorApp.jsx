

const Boton = () => {
    return (
        <button>Soy un componente</button>
    )
}

export const ContadorApp = () => {

        // const contador = () => {
        //     console.log("Esto es un botón")
        // }
        const contador2 = (event) => {
            console.log(event)
        } 

        const handleClick = (event, argumento) => {
            console.log(argumento)
        }


    return (
    <>
        <h1>Contador</h1>
        {/* <button onClick={contador}>Este es un botón</button> */}
        <button onClick={contador2}>Este es un botón</button>
        <button onClick={contador2}>Este es otro botón</button>
        {/* Si necesitamos pasar más información tenemos que poner la sintáxis completa */}
        <button onClick={(event) => handleClick(event, "Pulsaste el tercer botón")}>Tercer botón</button>
        {/* Importo el componente de arriba */}
        <Boton/>
    </>
  )
}
