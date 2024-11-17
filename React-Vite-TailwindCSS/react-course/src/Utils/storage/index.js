/**
 * Save login data in localstorage
 * @param {*}
 * param0 - signOut - Indicate if an user is log-in
 * param1 - account - User log-in
 */
export const saveLogin = (signOut, account) => {
  window.localStorage.setItem("sign-out", signOut);
  window.localStorage.setItem("account", JSON.stringify(account));
};

/**
 * Indicate if there is a user with this credential in the localstorage
 * @param {*}
 * param0 - email
 * param1 - password
 * @returns True: If exits - False if not
 */
export const isValidUser = (email, password) => {
  var usersObject = window.localStorage.getItem("users");

  if (usersObject && usersObject !== "undefined") {
    var users = JSON.parse(usersObject);
    return (
      users?.some(
        (user) => user?.email === email && user?.password === password
      ) ?? false
    );
  }

  return false;
};

/**
 * @returns Signout from localstorage
 */
export const getSignOut = () => {
  return window.localStorage.getItem("sign-out");
};

/**
 * @returns Account from localstorage
 */
export const getLoggedUser = () => {
  var loggedUserObject = window.localStorage.getItem("account");

  if (loggedUserObject && loggedUserObject !== "undefined") {
    return JSON.parse(loggedUserObject);
  }

  return null;
};

export const getUsers = () => {
  var usersObject = window.localStorage.getItem("users");

  if (usersObject && usersObject !== "undefined") {
    return JSON.parse(usersObject);
  }

  return [];
};

/**
 * Add a new user to the localstorage
 * @param {*}
 * param0 - New user
 */
export const addUser = (user) => {
  const users = getUsers();

  window.localStorage.setItem("users", JSON.stringify([...users, user]));
};

/**
 * Reset the localstorage
 */
export const resetLoginStorage = () => {
  window.localStorage.removeItem("sign-out");
  window.localStorage.removeItem("account");
  window.localStorage.removeItem("users");
};
