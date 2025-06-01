import conf from "../conf/conf";
import { Client, Account, ID, Databases, Query, Storage } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
      .setProject(conf.appwriteProjectId); // Your Appwrite Project ID
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, featuredImage, content, status, userId }) {
    try {
      const post = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          featuredImage,
          content,
          status,
          userId,
        }
      );
      return post;
    } catch (error) {
      console.log("Error creating post:", error);
      throw error;
    }
  }

  async updatePost(slug, { title, featuredImage, content, status }) {
    try {
      const post = await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          featuredImage,
          content,
          status,
        }
      );
      return post;
    } catch (error) {
      console.log("Error updating post:", error);
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Error deleting post:", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Error fetching post:", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      const response = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
      return response.documents;
    } catch (error) {
      console.log("Error fetching posts:", error);
      return false;
    }
  }

  //file upload methods

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Error uploading file:", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Error deleting file:", error);
      return false;
    }
  }

   getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);

  }
}
const service = new Service();
export default service;
