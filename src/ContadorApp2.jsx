import { useState } from "react"
import PropTypes from 'prop-types'

// value = 0 - si no recibo value su valor por defecto será 0
export const ContadorApp2 = ({value = 0}) => {

    /**
     * useState es un Hook
     * es una función que sirve para controlar el estado de una variable
     * useState(valor inicial)
     * devuelve la variable y una función para modificar el estado de la variable
     */
    const [contador, setContador] = useState(value)

    const contadorClicks = () => {
        setContador(contador + 1)
    }
  return (
    <>
        <h1>Contador:</h1>
        <p>{contador} </p>
        <button onClick={contadorClicks}>Contador de Clicks</button>    
    </>
  )
}

ContadorApp2.prototypes = {
    value: PropTypes.number
}
