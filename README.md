🔐 SecureAPI - Basic Authentication System

Welcome to SpoqueApi, a basic API project featuring a login system using Node.js, TypeScript, Express, Prisma, and Docker. This project demonstrates a secure and scalable backend architecture, perfect for kickstarting your next Node.js project.
🚀

- User Authentication: Secure login system with JWT-based authentication.
- Prisma ORM: Seamless database integration using Prisma.
- TypeScript: Strongly typed codebase for better reliability.
- Express: Lightweight and flexible Node.js framework.
- Docker: Containerized environment for easy deployment and consistency.
- Environment Variables: Configurable environment for different stages of development.

🛠️ Stack

- Node.js
- Express
- TypeScript
- Prisma
- JWT
- Docker

📁 Project Structure

    ├── src
    │ ├── controllers
    │ │ └── authController.ts # Authentication logic
    │ ├── middleware
    │ │ └── authMiddleware.ts # Authentication middleware
    │ ├── routes
    │ │ └── authRoutes.ts # API routes for authentication
    │ ├── services
    │ │ └── authService.ts # Service for handling auth operations
    │ ├── prisma
    │ │ └── schema.prisma # Prisma schema for DB models
    │ └── app.ts # Express app setup
    ├── Dockerfile # Docker configuration
    ├── docker-compose.yml # Docker Compose setup
    ├── .env.example # Example environment variables
    └── README.md # Project documentation

🏗️ Getting Started
Prerequisites

- Node.js v20.x or later
- Docker & Docker Compose
- Prisma CLI

Installation
Clone the repository

    git clone https://github.com/ThomasBarrial/spoque-api.git

    cd spoque-api

Install dependencies:

    yarn

Set up environment variables:

Create a .env file in the root directory based on the .env.example file.

.env.example :

    DATABASE_URL="postgresql://myuser:[YOURPASSAWORD]@localhost:5432/mydatabase?schema=public"
    JWT_SECRET=[YOUR JWT SECRET]

Run Prisma migrations:

    npx prisma migrate dev

Launch the dataBase and Adminer:

    docker-compose up

Start the API

    yarn dev

Start with prisma migration

    yarn start

🧪 Usage

Register a new user:
POST /auth/register

Login with an existing user:
POST /auth/login

Access protected routes:
Use the JWT token provided after login to access protected routes.
