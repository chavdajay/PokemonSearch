# 🎮 Pokemon Search (MERN Assignment)

This project is a **MERN stack application** to manage Pokemons (Masters) and their Abilities.  
Frontend is built with **React + Bootstrap** and Backend with **Node.js + Express + MongoDB**.

---

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone https://github.com/chavdajay/PokemonSearch.git
cd PokemonSearch
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

👉 Create a `.env` file inside the **backend** folder:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/pokemonDB
```

Run backend:

```bash
npm start
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

👉 Create a `.env` file inside the **frontend** folder:

```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

Run frontend:

```bash
npm start
```

---

## 📌 API Endpoints

### 🔹 Masters (Pokemons)

| Method     | Endpoint             | Description          |
| ---------- | -------------------- | -------------------- |
| **POST**   | `/api/masters`       | Create a new Pokemon |
| **GET**    | `/api/masters`       | Get all Pokemons     |
| **GET**    | `/api/masters/:name` | Get Pokemon by Name  |
| **DELETE** | `/api/masters/:id`   | Delete Pokemon by ID |

---

### 🔹 Abilities

| Method     | Endpoint                          | Description                         |
| ---------- | --------------------------------- | ----------------------------------- |
| **POST**   | `/api/abilities`                  | Create a new Ability                |
| **GET**    | `/api/abilities`                  | Get all Abilities                   |
| **GET**    | `/api/abilities/master/:masterId` | Get abilities of a specific Pokemon |
| **PUT**    | `/api/abilities/:id`              | Update ability by ID                |
| **DELETE** | `/api/abilities/:id`              | Delete ability by ID                |

---

## ⚡ Example Requests

### Create Master

```json
POST /api/masters
{
  "name": "Pikachu",
  "number": "25",
  "image": "https://img.pokemondb.net/artwork/pikachu.jpg"
}
```

### Create Ability

```json
POST /api/abilities
{
  "ability": "Thunderbolt",
  "type": "Electric",
  "damage": 90,
  "status": "active",
  "masterId": "PASTE_MASTER_ID_HERE"
}
```

---

✅ Now both frontend & backend will run with proper environment setup.
