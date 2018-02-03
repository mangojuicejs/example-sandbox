// @flow
import { LogicBase, Event } from 'mangojuice-core';


// Model
export type Model = {
  authorized: boolean,
  name: string
};


// Events
export const Events = {
  Login: new Event()
};


// Logic
export const Logic = class User extends LogicBase<Model> {
  hub(event: Event) {
    if (event instanceof Events.Login) {
      return this.Login;
    }
  }

  Login() {
    return {
      authorized: true,
      name: 'Test User'
    };
  }

  Logout() {
    return {
      authorized: false,
      name: ''
    };
  }
}
