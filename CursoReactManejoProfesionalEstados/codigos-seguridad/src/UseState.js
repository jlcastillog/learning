import React from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirm: false,
  });

  const onInit = () => {
    setState({
      ...state,
      error: false,
    });
  };

  const onConfirm = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirm: true,
    });
  };

  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false,
    });
  };

  const onCheckSecurityCode = (value) => {
    setState({
      ...state,
      value: value,
    });
  };

  const onLoading = () => {
    setState({
      ...state,
      loading: true,
    });
  };

  const onDelete = () => {
    setState({
      ...state,
      confirm: true,
      deleted: true,
    });
  };

  const onCancel = () => {
    setState({
      ...state,
      confirm: false,
    });
  };

  const onReset = () => {
    setState({
      value: "",
      error: false,
      loading: false,
      deleted: false,
      confirm: false,
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
            onChange={(event) => onCheckSecurityCode(event.target.value)}
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

export { UseState };
