import { createMachine, assign } from "xstate";

const bookingMachine = createMachine({
  id: "buy plane tickets",
  initial: "initial",
  context: {
    passengers: [],
    selectedCountry: "null",
  },
  states: {
    initial: {
      on: {
        START: {
          target: "search",
        },
      },
    },
    search: {
      on: {
        CONTINUE: {
          target: "passengers",
          actions: assign(({ context, event }) => {
            context.selectedCountry = event.selectedCountry;
          }),
        },
        CANCEL: {
          target: "initial",
          actions: assign(({context}) => { 
            context.selectedCountry = "null";
            context.passengers = [];  
          }),
        },
      },
    },
    tickets: {
      on: {
        FINISH: "initial",
      },
    },
    passengers: {
      on: {
        DONE: "tickets",
        CANCEL: {
          target: "initial",
          actions: assign(({context}) => { 
            context.selectedCountry = "null";
            context.passengers = [];  
          }),
        },
        ADD: {
          target: "passengers",
          actions: assign(({ context, event }) => {
            context.passengers.push(event.passenger);
          }),
        },
      },
    },
  },
});

export default bookingMachine;
