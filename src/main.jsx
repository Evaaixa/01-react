import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { ContadorApp } from './ContadorApp'
// import { PrimerComponente } from './PrimerComponente'
// import { SegundoComponente } from './SegundoComponente'
// import { ContadorApp2 } from './ContadorApp2'
// import { ListadoApp } from './ListadoApp'
// import { ListadoMap} from './ListadoMap'
// import { BotonContador } from './contadores/BotonContador'
// import { UsersApp } from './UsersApp'
import { UsersApp2 } from './UsersApp2'


createRoot (document.getElementById('root')).render(
  <StrictMode>
    
    <UsersApp2/>

    <hr />

  </StrictMode>,
)
