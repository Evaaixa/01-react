

export const ItemTarea = ({nombre, visto}) => {
  return (
    <li className="fondo-rojo">
        {nombre}
        {/* si visto es true muestra la primera opción y si es false muestra la segunda */}
        { visto ? '👌' : '❌'}
    </li>
  )
}
