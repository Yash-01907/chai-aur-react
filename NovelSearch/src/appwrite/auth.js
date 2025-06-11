import { Client, Account, ID } from "appwrite";
import config from "../config/config";

class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async signUp({ email, password }) {
    try {
      await this.account.create(ID.unique(), email, password);
      return this.login({ email, password });
    } catch (error) {
      console.log("auth.js :: signUp" + error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("auth.js :: login" + error);
      throw error;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("auth.js :: logout " + error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("auth.js :: getCurrentUser " + error);
      throw error;
    }
  }
}

export default new AuthService();
