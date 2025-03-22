# Educational App with 3D Graphics

A high-end education application for schools in Andhra Pradesh featuring 3D graphics, real-time communication, and comprehensive learning management.

## Prerequisites

- Node.js v18 or higher
- PostgreSQL database
- AWS S3 account for storage
- Twilio account for SMS notifications

## Setup Instructions

1. Clone the repository
2. Set up environment variables:
   - Create `.env` file in backend/ directory
   - Create `.env.local` file in frontend/ directory

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will run on http://localhost:3000

### Backend Setup
```bash
cd backend
npm install
npm run dev
```
The backend will run on http://localhost:5000

## Environment Variables

### Backend (.env)
```
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/eduapp
JWT_SECRET=your_jwt_secret
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_REGION=your_aws_region
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Features

- 3D Graphics and Visualizations
- Real-time Chat
- Video Lecture Management
- Student Progress Tracking
- Parent Dashboard
- Admin Controls
- Email and SMS Notifications
- Responsive Design 