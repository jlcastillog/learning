import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = "paradigma";

class ClassState extends React.Component {
  constructor(props) {
    // console.log("ClassState init");
    super(props);
    this.state = {
      error: false,
      loading: false,
      value: "",
    };
  }

  // componentDidMount() {
  //   console.log("componentDidMount");
  // }

  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }

  componentDidUpdate() {
    if (this.state.loading) {
      setTimeout(() => {
        if (this.state.value !== SECURITY_CODE) {
          this.setState({
            error: true,
            loading: false,
          });
        } else {
          this.setState({
            error: false,
            loading: false,
          });
        }
      }, 2000);
    }
  }

  render() {
    return (
      <section>
        <div>
          <h2>Eliminar {this.props.name}</h2>
          <p>
            Por favor, escribe el código de seguridad para comprobar que quieres
            eliminar
          </p>
          {this.state.error && <p>Error: el código es incorrecto</p>}
          {this.state.loading && <Loading />}
          <input
            placeholder="Código de seguridad"
            value={this.state.value}
            onChange={(event) => {
              this.setState({
                value: event.target.value,
              });
            }}
          />
          <button
            onClick={() => {
              this.setState({
                error: false,
                loading: !this.state.loading,
              });
            }}
          >
            Comprobar
          </button>
        </div>
      </section>
    );
  }
}

export { ClassState };
