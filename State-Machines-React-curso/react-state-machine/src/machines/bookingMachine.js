import { createMachine, assign, fromPromise } from "xstate";
import { fetchCountries } from "../utils/api";

const fillCountries = {
  initial: "loading",
  states: {
    loading: {
      invoke: {
        id: "getCountries",
        src: fromPromise(() => fetchCountries()),
        onDone: {
          target: "success",
          actions: assign({
            countries: ({ event }) => event.output,
          }),
        },
        onError: {
          target: "failure",
          actions: assign({
            error: "Fallo el request",
          }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: {
          target: "loading",
        },
      },
    },
  },
};

const bookingMachine = createMachine(
  {
    id: "buy plane tickets",
    initial: "initial",
    context: {
      passengers: [],
      selectedCountry: "null",
      countries: [],
      error: "",
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
            actions: assign(({ context }) => {
              context.selectedCountry = "null";
              context.passengers = [];
            }),
          },
        },
        ...fillCountries,
      },
      tickets: {
        after: {
          5000: {
            target: "initial",
            actions: "cleanContext",
          },
        },
        on: {
          FINISH: "initial",
        },
      },
      passengers: {
        on: {
          DONE: {
            target: "tickets",
            guard: "moreThanOnePassenger",
          },
          CANCEL: {
            target: "initial",
            actions: "cleanContext",
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
  },
  {
    actions: {
      cleanContext: assign(({ context }) => {
        context.selectedCountry = "null";
        context.passengers = [];
        context.error = "";
        context.countries = [];
      }),
    },
    guards: {
      moreThanOnePassenger: ({ context }) => {
        return context.passengers.length > 0;
      },
    },
  }
);

export default bookingMachine;
