import { authService } from "./auth";
import { expiredToken, token } from "../testHelpers";

describe("Authservice object", () => {
  describe("IsAuthenticated function", () => {
    it("should return true if a user token has not expired", () => {
      localStorage.setItem("token", token);
      expect(authService.isAuthenticated()).toBeTruthy();
    });

    it("should return false when a user token has expired", () => {
      localStorage.removeItem("token");
      expect(authService.isAuthenticated()).toBeFalsy();
    });
  });

  describe("logout user function", () => {
    it("should call logout function", () => {
      localStorage.setItem("token", token);
      expect(authService.redirectUser()).toBeUndefined();
    });
  });

  describe("Check expired token", () => {
    it("check for an expired token", () => {
      localStorage.setItem("token", token);
      authService.decodeToken = jest.fn().mockReturnValue(true);
      authService.isExpired();
      expect(authService.decodeToken).toHaveBeenCalled();
    });
  });
  describe("get user function auhtneticated", () => {
    it("should call get token", () => {
      localStorage.setItem("token", token);
      authService.decodeToken = jest.fn().mockReturnValue(true);
      authService.getToken = jest.fn().mockReturnValue("token");
      authService.getUser();
      expect(authService.getToken).toHaveBeenCalled();
    });
  });
});
