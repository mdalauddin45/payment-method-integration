# Payment Method Integration (Shurjopay)

This repository demonstrates the integration of the **Shurjopay** payment gateway with separate **backend** and **frontend** implementations. It provides a step-by-step guide to integrating Shurjopay into your applications.

---

## Features

- Backend API for payment initiation and callback handling.
- Frontend interface to initiate payments and display statuses.
- Environment-based configuration for seamless development and production.
- Detailed folder structure for scalability and clarity.

---

## Prerequisites

Before starting, ensure you have the following:

1. **Shurjopay** merchant account with API credentials.
2. Node.js (v14 or later) installed.
3. Package managers like `npm` or `yarn`.
4. A modern web browser for frontend testing.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Apollo-Level2-Web-Dev/payment-method-integration.git
cd payment-method-integration

Backend Setup

1. Navigate to the Backend Directory

cd backend

2. Install Dependencies

npm install

3. Configure Environment Variables

Create a .env file in the backend directory and add your Shurjopay credentials:

SHURJOPAY_API_URL=<your-api-url>
MERCHANT_USERNAME=<your-username>
MERCHANT_PASSWORD=<your-password>
RETURN_URL=<frontend-url>/payment-success
CANCEL_URL=<frontend-url>/payment-cancel
PORT=5000

4. Run the Backend Server

npm start

The backend will run on http://localhost:5000.

Frontend Setup

1. Navigate to the Frontend Directory

cd frontend

2. Install Dependencies

npm install

3. Configure Environment Variables

Create a .env file in the frontend directory:

REACT_APP_API_URL=http://localhost:5000

4. Run the Frontend Application

npm start

The frontend will run on http://localhost:3000.

Folder Structure

Root Directory

.
├── backend/               # Backend API and logic
├── frontend/              # Frontend user interface
├── README.md              # Project documentation
└── .gitignore             # Git ignore rules

Backend Folder Structure

backend/
├── src/
│   ├── app/
│   │   ├── config/          # Configuration files (e.g., database, environment setup)
│   │   ├── errors/          # Custom error handling classes and utilities
│   │   ├── interfaces/      # TypeScript interfaces and types
│   │   ├── middlewares/     # Express middlewares for validation, logging, authentication, etc.
│   │   ├── modules/         # Feature modules (e.g., payment module for Shurjopay integration)
│   │   │   ├── payment/     # Shurjopay-specific logic
│   │   │   │   ├── controller/  # Payment controllers for handling API requests
│   │   │   │   ├── router/       # Route definitions for payment-related endpoints
│   │   │   │   ├── service/     # Business logic and interaction with Shurjopay API
│   │   │   │   └── model/       # Mongoose models or database schemas if needed
│   │   ├── utils/           # Helper functions and utilities (e.g., logging, error handling)
│   │   └── app.ts           # Main Express app configuration and initialization
│   └── server.ts            # Server initialization and entry point
├── .env                     # Environment variables (e.g., API credentials)
├── package.json             # Node.js dependencies
└── tsconfig.json            # TypeScript configuration

Frontend Folder Structure

frontend/
├── public/                # Public assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Application pages (e.g., Payment, Success)
│   ├── services/          # API calls to backend
│   ├── App.tsx            # Main App component
│   ├── index.tsx          # Entry point for React
├── .env                   # Environment variables
├── package.json           # Node.js dependencies
└── tsconfig.json          # TypeScript configuration


Payment Callback

Shurjopay will send transaction details to the RETURN_URL and CANCEL_URL specified in the .env file.
```
