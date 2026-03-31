# Intgram - Backend Practice Project

A simple backend API project built with Express and MongoDB, designed to practice full-stack development concepts. This project allows users to post photos with captions and retrieve them through API endpoints.

## Project Overview

**Intgram** is a lightweight Instagram-like backend application where you can:
- **POST** photos with captions to the database
- **GET** all posted photos and captions from the database
- Display the retrieved data on a frontend application

This project is perfect for learning backend fundamentals including:
- RESTful API design
- MongoDB database operations with Mongoose
- Express server setup and routing
- Environment variable management
- API request/response handling

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (with Mongoose ODM)
- **Environment Management:** dotenv

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB cluster (or local MongoDB)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/AkshuDevelop/Intgram.git
   cd Full-Stack\ Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file**
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=mongodb+srv://username:password@your-cluster.mongodb.net/database-name
   ```

4. **Start the server**
   ```bash
   node index.js
   # or with nodemon for development
   npm install -g nodemon
   nodemon index.js
   ```

The server will run on `http://localhost:3000` (or your configured port).

## Project Structure

```
Full-Stack Project/
├── src/
│   ├── db/
│   │   └── db.js              # MongoDB connection configuration
│   └── app.js                 # Express app setup
├── .env                       # Environment variables (not tracked by git)
├── .gitignore                 # Git ignore rules
├── package.json               # Project dependencies
└── README.md                  # This file
```

## API Endpoints

### POST - Create a new post
**Endpoint:** `POST /api/posts`

**Request Body:**
```json
{
  "caption": "Your photo caption here",
  "photo": "photo-url-or-base64-encoded-image"
}
```

**Response:**
```json
{
  "_id": "mongodb-id",
  "caption": "Your photo caption here",
  "photo": "photo-url-or-base64-encoded-image",
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

### GET - Retrieve all posts
**Endpoint:** `GET /api/posts`

**Response:**
```json
[
  {
    "_id": "mongodb-id",
    "caption": "First post",
    "photo": "photo-url",
    "createdAt": "2024-01-15T10:30:00.000Z"
  },
  {
    "_id": "mongodb-id-2",
    "caption": "Second post",
    "photo": "photo-url-2",
    "createdAt": "2024-01-15T11:45:00.000Z"
  }
]
```

## How It Works

1. **Backend (This Project)**
   - Receives POST requests with photo and caption data
   - Stores data in MongoDB using Mongoose models
   - Retrieves stored posts via GET requests
   - Returns data in JSON format for frontend consumption

2. **Frontend Integration**
   - Fetch posts using: `GET /api/posts`
   - Display photos and captions in the UI
   - Allow users to submit new posts via POST request
   - Refresh feed to show latest posts

## Environment Variables

The `.env` file contains sensitive data and is NOT tracked by Git for security reasons.

**Required Variables:**
- `MONGODB_URI` - Your MongoDB connection string

**Optional Variables:**
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)

## Important Security Notes

⚠️ **Never commit `.env` file to GitHub!**
- Your MongoDB credentials are safe in the `.env` file
- Always use environment variables for sensitive data
- The `.gitignore` file ensures `.env` is excluded from version control

## Getting Started with Development

1. Create your Mongoose models in `src/models/` directory
2. Create route handlers in `src/routes/` directory
3. Update `src/app.js` to include your routes
4. Test API endpoints using Postman, Thunder Client, or curl

### Example: Testing with curl

```bash
# POST a new photo
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"caption":"My first post","photo":"https://example.com/photo.jpg"}'

# GET all posts
curl http://localhost:3000/api/posts
```

## Next Steps to Enhance

- [ ] Add user authentication
- [ ] Implement likes/comments system
- [ ] Add photo upload functionality
- [ ] Create pagination for posts
- [ ] Add input validation
- [ ] Implement error handling middleware
- [ ] Add unit tests
- [ ] Deploy to production (Heroku, Railway, etc.)

## Troubleshooting

**Connection Error to MongoDB:**
- Check your `.env` file has the correct `MONGODB_URI`
- Ensure your IP address is whitelisted in MongoDB Atlas
- Verify your database credentials are correct

**Port Already in Use:**
- Change the port in your `.env` or server configuration
- Or kill the process using the port: `lsof -ti:3000 | xargs kill -9`

## Author

Akshat
