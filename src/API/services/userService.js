import { HttpClient } from "../httpClient";

class UserService extends HttpClient {
 
    constructor(){
        super("https://624ad9e1fd7e30c51c128ec3.mockapi.io/api/v1");
    }

  async getUsers(){
      return await this.get("users");
  };

}

export const userService = new UserService()