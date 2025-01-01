function LoginErrorPage() {
    return (
        <>
          <h1>Login error</h1>
          <p>Wrong user name, please introduce a correct user</p>
          <button onClick={() => window.history.back()}>Go back</button>
        </>
    );
  }
  
  export { LoginErrorPage };