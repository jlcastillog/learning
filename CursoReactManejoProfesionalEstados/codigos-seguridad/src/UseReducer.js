import React from "react";

const SECURITY_CODE = "paradigma";

const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirm: false,
};

const actionTypes = {
  init: "INIT",
  error: "ERROR",
  confirm: "CONFIRM",
  write: "WRITE",
  loading: "LOADING",
  delete: "DELETE",
  cancel: "CANCEL",
  reset: "RESET",
};

function UseReducer({ name }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onInit = () => {
    dispatch({
      type: actionTypes.init,
    });
  };

  const onConfirm = () => {
    dispatch({
      type: actionTypes.confirm,
    });
  };

  const onError = () => {
    dispatch({
      type: actionTypes.error,
    });
  };

  const onWrite = (value) => {
    dispatch({ type: actionTypes.write, payload: value });
  };

  const onLoading = () => {
    dispatch({
      type: actionTypes.loading,
    });
  };

  const onDelete = () => {
    dispatch({
      type: actionTypes.delete,
    });
  };

  const onCancel = () => {
    dispatch({
      type: actionTypes.cancel,
    });
  };

  const onReset = () => {
    dispatch({
      type: actionTypes.reset,
    });
  };

  React.useEffect(() => {
    if (state.loading) {
      onInit();

      setTimeout(() => {
        if (state.value !== SECURITY_CODE) {
          onError();
        } else {
          onConfirm();
        }
      }, 2000);
    }
  }, [state.loading]);

  if (!state.deleted && !state.confirm) {
    return (
      <section>
        <div>
          <h2>Eliminar {name}</h2>
          <p>
            Por favor, escribe el código de seguridad para comprobar que quieres
            eliminar
          </p>
          {state.error && <p>Error: el código es incorrecto</p>}
          {state.loading && <p>Cargando...</p>}
          <input
            placeholder="Código de seguridad"
            value={state.value}
            onChange={(event) => onWrite(event.target.value)}
          />
          <button onClick={onLoading}>Comprobar</button>
        </div>
      </section>
    );
  } else if (!state.deleted && state.confirm) {
    return (
      <>
        <p>¿Seguro que quieres eliminar UseState</p>
        <button onClick={onDelete}>Sí, eliminar</button>
        <button onClick={onCancel}>No, me arrepentí</button>
      </>
    );
  } else {
    return (
      <>
        <h2>UseState eliminado</h2>
        <button onClick={onReset}>Restaurar</button>
      </>
    );
  }
}

// const reducer = (state, action) => {
// };

//  Primera forma de utilizar un reducer (if else)

// const reducer = (state, action) => {
//   if (action.type === "ERROR") {
//     return {
//       ...state,
//       error: true,
//       loading: false,
//     };
//   } else if (action.type === "CHECK") {
//     return {
//       ...state,
//       loading: true,
//     };
//   } else {
//     return {
//       ...state,
//     };
//   }
// };

//  Segunda forma de utilizar un reducer (switch)

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ERROR":
//       return {
//         ...state,
//         error: true,
//         loading: false,
//       };
//     case "CHECK":
//       return {
//         ...state,
//         loading: true,
//       };
//     default:
//       return {
//         ...state,
//       };
//   }
// };

// Tercera forma de utilizar un reducer

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.init]: {
    ...state,
    error: false,
  },
  [actionTypes.confirm]: {
    ...state,
    error: false,
    loading: false,
    confirm: true,
  },
  [actionTypes.loading]: {
    ...state,
    loading: true,
  },
  [actionTypes.delete]: {
    ...state,
    confirm: true,
    deleted: true,
  },
  [actionTypes.cancel]: {
    ...state,
    confirm: false,
  },
  [actionTypes.reset]: {
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirm: false,
  },
  [actionTypes.write]: {
    ...state,
    value: payload,
  },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

export { UseReducer };
