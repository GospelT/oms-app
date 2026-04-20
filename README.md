# OMS App (Order Management System)

A full-stack Order Management System built with:

- Frontend: React
- Backend: Node.js + Express
- Database: MongoDB
- Containerization: Docker & Docker Compose

---

## Features

- Create and manage orders
- REST API backend
- MongoDB database with persistent storage (Docker volume)
- Fully containerized setup (frontend, backend, database)

---

# OMS Application Testing

- Step 1: Start containers
  docker compose up

- Step 2: Check services
  docker ps

- Step 3: Test backend API
  curl http://localhost:5000

- Step 4: Test frontend
  Open: http://localhost:3000

- Step 5: Test MongoDB volume persistence
  docker exec -it <mongo-container> mongosh -u user -p password --authenticationDatabase admin
  use testdb
  db.test.insertOne({ test: "volume-check" })
  Restart container and confirm data still exists
