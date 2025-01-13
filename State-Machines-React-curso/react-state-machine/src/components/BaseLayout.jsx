import React from "react";
import { useMachine } from "@xstate/react";
import bookingMachine from "../machines/bookingMachine";

function BaseLayout() {
  const [state, send] = useMachine(bookingMachine);

  console.log("Nuestra maquina", state);

  return (
    <div>
      <h1>Base Layout</h1>
    </div>
  );
}

export default BaseLayout;
