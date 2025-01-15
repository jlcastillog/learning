import React from 'react';
import { useMachine } from '@xstate/react';
import { Nav } from '../components/Nav';
import { StepsLayout } from './StepsLayout';
import bookingMachine from '../machines/bookingMachine';
import './BaseLayout.css';


function BaseLayout() {
  const [state, send] = useMachine(bookingMachine);

  console.log("Nuestra maquina", state.value, state.context);

  return (
    <div className='BaseLayout'>
      <Nav state={state} send={send} />
      <StepsLayout state={state} send={send}/>
    </div>
  );
}

export default BaseLayout;
