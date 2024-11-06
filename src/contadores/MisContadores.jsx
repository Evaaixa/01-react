import { BotonContador } from "./BotonContador"
import { useState } from "react"
import { BotonContadorEstado } from "./BotonContadorEstado"


export const MisContadores = () => {
    const [count, setCount] = useState(0)

    const aumentarContador = () => {
        setCount(count + 1)
    }

    return (
    <>
        <h1>Botones que llevan cada uno su cuenta</h1>
        <BotonContador count={count} aumentarContador={aumentarContador} />
        <h2>Esto es para no salgan dos botones seguidos</h2>
        <BotonContador count={count} aumentarContador={aumentarContador} />
        <h2>Este botón tiene su estado propio</h2>
        <BotonContadorEstado/>
        <h2>Este botón tiene su estado propio y comienza por 10</h2>
        <BotonContadorEstado valor={10}/>
    </>
  )
}
