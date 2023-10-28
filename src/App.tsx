import { useEffect, useState } from "react";
import _ from "lodash";
import { FilterMatchMode } from "primereact/api";
import { Column } from "primereact/column";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { funcionesGlobales } from "@metadata/componentes";
import { Rutas } from "@metadata/estructura";
import { IFiltroTabla } from "@metadata/estructura/modelo/IFiltroTabla";
import { ReactComponent as BackgroundEmptyViewPRL } from "@metadata/estructura/src/assets/empty-view-prl.svg";
import { Boton, Card, Icono, InputCheckbox, InputSwitch, SearchInput, Table, Text } from "@metadata/estructura/src/commons-components";
import EmptyView from "@metadata/estructura/src/templates/EmptyView";
import PantallaConTitulo from "@metadata/estructura/src/templates/PantallaConTitulo";
import { servicios } from "@metadata/services";
import reactLogo from './assets/react.svg'
import type { MiTipo2 } from './typed';
import type { MiTipo } from './typed';
import { ITipoFormacion } from "../../../modelo/ITipoFormacion";
import './App.css'

const Zero = 0;
const ZERO = 0;

const esBooleano = true;
const isBooleano = true;

function App() {
  const [count, setCount] = useState(Zero)

  let x = 1;
  let y = 1;
  let z = 1;

  // TODO aMETV4-1234
  const algo = (a1: string, a2: string, a3: string): MiTipo | MiTipo2 => a1 + a2 + a3

  // TODO METV4-1234 Esto se arreglará nunca
  const handleOnClick = () => setCount((count) => count++)





  console.log('🚀 -> App -> MiBooleano:', esBooleano)
  console.log('🚀 -> App -> MiBooleano:', isBooleano)
  console.log('🚀 -> App -> MiBooleano:', ZERO)



  return (
    <>
      <div className='asd' onClick={() => algo('1', '2', '3')}>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleOnClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
