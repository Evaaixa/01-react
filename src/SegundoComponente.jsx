import { PropsComponente } from "./PropsComponente"

export const SegundoComponente = () => {
  return (
    <>
        <h2>Este es el Segundo Componente</h2>
        <PropsComponente 
          titulo='React'
          subtitulo='Aprendiendo React'
          numero={22}
        />
    </>
  )
}
