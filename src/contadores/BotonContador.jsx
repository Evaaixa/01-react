
export const BotonContador = ({count, aumentarContador} ) => {

return (
    <>
        <button onClick={aumentarContador}>
            Hiciste click {count} veces
        </button>
    </>
)
}