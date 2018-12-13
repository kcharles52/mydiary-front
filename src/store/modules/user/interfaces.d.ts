//types
import { SIGNUP_SUCCESS, LOGIN_SUCCESS, ERROR } from './types';

export interface LoginUserSuccess {
    user:object
    type:LOGIN_SUCCESS;
    isLoggedIn: boolean;
}
export interface SignUpUserSuccess {
    type:SIGNUP_SUCCESS;
}
export interface LoginUserFailure {
    type:ERROR;
}

export interface Person {
    name: string;
    email: string;
    imageUrl?: string;
    [key:string]:any;
  }