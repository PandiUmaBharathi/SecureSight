 SecureSight – Surveillance Incident Dashboard

Deployment Instructions:
Clone the Repository git clone https://github.com/PandiUmaBharathi/SecureSight.git
cd SecureSight
install dependencies:npm install
setup prisma and database:npx prisma generate
npx prisma db push
Seed the Database:npx tsx prisma/seed.ts
start the development server npm run dev
Requirements:
NODE.JS 18+
npm
SQLite
Git
SecureSight is a modern Fullstack web application that helps security teams monitor, track, and resolve incidents captured by CCTV cameras.  This project demonstrates advanced frontend-backend integration using modern tools.
 Project Overview

The application features:
- A dynamic incident viewer with CCTV feed 
- A list of unresolved incidents with details like type, timestamp, and camera
- An admin dashboard with navigation to:
  - Dashboard
  - Cameras
  - Scenes
  - Incidents
  - Users
- A seeded Prisma backend using SQLite with realistic incident data
- Two fully functional API routes for retrieving and resolving incidents

 Tech Stack

 Layer         Technology                              

Frontend       Next.js 15, TypeScript, Tailwind CSS     
Backend       Node.js, Prisma ORM                      
Database       SQLite (via Prisma)                      
API Routes     RESTful - GET & PATCH (incidents)        
Data Seeding   TypeScript script using Prisma           
Styling        Tailwind CSS                             

 Features Implemented

 Core Features
Incident Player: Displays a large static image for the current incident.
Incident List: Shows the top 3 unresolved incidents with:
  - Type icon (unauthorized access, face recognized, gun threat)
  - Thumbnail image
  - Camera location
  - Timestamp
  - Resolve button 
-Camera Page: Lists camera names and their physical locations (e.g., “Vault Room — B1 Level”)
- Seed Script:
  - 3+ Cameras
  - 12+ Incidents
  - 3+ Incident Types: Unauthorised Access, Gun Threat, Face Recognised
  - Timestamps spanning 24 hours
- API Routes:
  - `GET /api/incidents?resolved=false`: Fetch unresolved incidents
  - `PATCH /api/incidents/:id/resolve`: Mark an incident as resolved




