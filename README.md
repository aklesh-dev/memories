# Project Memories

This project is a RESTful API client built using Axios, a popular JavaScript library for making HTTP requests. The client is designed to interact with a backend API server. The API provides endpoints for managing posts, user authentication, and other related features.

## -Features

### -Post Management
- Fetch Posts: Retrieve a list of all posts using the fetchPosts function, which sends a GET request to /posts.
- Create Post: Create a new post using the createPost function, which sends a POST request to /posts with the new post data.
- Update Post: Update an existing post using the updatePost function, which sends a PATCH request to /posts/{id} with the updated post data.
- Delete Post: Delete a post using the deletePost function, which sends a DELETE request to /posts/{id}.
- Like Post: Like a post using the likePost function, which sends a PATCH request to /posts/{id}/likePost.

### -User Authentication
-Sign In: Authenticate a user using the signIn function, which sends a POST request to /user/signin with the user's credentials.
-Sign Up: Register a new user using the signUp function, which sends a POST request to /user/signup with the user's registration data.

### -Token-based Authentication
The client uses token-based authentication, where the user's token is stored in local storage. The token is included in the Authorization header of each request using an Axios interceptor.

Overall, this project provides a basic structure for building a RESTful API client with authentication features, allowing users to interact with a backend API server.