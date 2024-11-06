
const Item = ({nombre, visto}) => {
    return (
        <>
        <li>
            {nombre}
            {/* si visto es true muestra la primera opción y si es false muestra la segunda */}
            { visto ? '👌' : '❌'}
        </li>
        <li>
            {nombre}
            {/* si visto es true muestra la primera el icono y si es false no muestra nada */}
            { visto && '👌'}
        </li>
        </>
    )
}


export const ListadoApp = () => {
  return (
    <>
        <h1>Listado de tareas</h1>
        <ol>
            <Item nombre="HTML" visto={true}/>
            <Item nombre="CSS" visto={true}/>
            <Item nombre="Bootstrap" visto={true}/>
            <Item nombre="JavaScript" visto={true}/>
            <Item nombre="GIT" visto={true}/>
            <Item nombre="PHP" visto={true}/>
            <Item nombre="SQL" visto={true}/>
            <Item nombre="REACT" visto={false}/>
            <Item nombre="TypeScript" visto={false}/>
            <Item nombre="Angular" visto={false}/>
        </ol>
    </>
    )
}
