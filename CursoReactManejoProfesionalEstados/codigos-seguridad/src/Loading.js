import React from "react";

class Loading extends React.Component {
  constructor(props) {
    // console.log("Loading init");
    super(props);
  }

//   componentDidMount() {
//     console.log("Loading:componentDidMount");
//   }

//   componentWillUnmount() {
//     console.log("Loading:componentWillUnmount");
//   }

  render() {
    return <p>Cargando...</p>;
  }
}

export { Loading };
