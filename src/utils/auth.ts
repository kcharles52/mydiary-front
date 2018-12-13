import * as jwtDecode from "jwt-decode";

export const authService = {
  getToken() {
    return localStorage.getItem("token");
  },
  decodeToken() {
    return jwtDecode(this.getToken);
  },
  isAuthenticated() {
    return this.getToken() ? true : false;
  },
  isExpired() {
    const currentDate = Date.now() / 1000;
    const decodedToken = this.decodeToken();

    return decodedToken.exp < currentDate;
  },
  getUser() {
    return this.getToken() ? this.decodeToken() : {};
  },
  logoutUser() {
    localStorage.removeItem("token");
  },
  redirectUser() {
    const referrer = window.location.pathname;

    this.logoutUser();
    localStorage.setItem("sessionError", "Please login in to continue");
    localStorage.setItem("locationReferrer", referrer);
    window.location.replace("/");
  }
};
