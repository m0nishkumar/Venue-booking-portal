# Venue Booking Application

A web-based platform for managing and booking venues efficiently. This application caters to both **users** and **administrators**, streamlining the process of venue reservations and approvals.

---

## Features

### For Users:
- **Venue Booking:**
  - Browse available venues.
  - Filter by time slots and availability.
  - Book a venue for a specific day and time.

- **Dashboard:**
  - View all your booked venues.
  - Check the status of your bookings (approved/pending).

### For Admins:
- **Approve Bookings:**
  - Review and approve user bookings.
  - Ensure no venue conflicts by checking availability.

- **Booking Management:**
  - View all booked venues in a comprehensive dashboard.

### General Features:
- **Availability Check:**
  - A venue can only be booked for one slot at a particular time on a specific day.
- **Real-Time Updates:**
  - Booking status and availability are updated dynamically.

---

## Tech Stack
- **Frontend:** Vue.js
- **Backend:** Node.js with Express
- **Database:** MongoDB

---

## How to Run Locally

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14+ recommended)
- **MongoDB** (local or cloud instance)
- **Vue CLI**

### Steps to Set Up
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-repo/venue-booking.git
   cd venue-booking
   ```

2. **Set Up the Server:**
   - Navigate to the `server` folder:
     ```bash
     cd server
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Configure environment variables in a `.env` file:
     ```plaintext
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     ```
   - Start the server:
     ```bash
     npm start
     ```

3. **Set Up the Frontend:**
   - Navigate to the `venue` folder:
     ```bash
     cd ../venue
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run serve
     ```

4. **Access the Application:**
   - Open your browser and navigate to `http://localhost:8080` (default Vue.js port).

---

## API Endpoints

### User Routes
- `POST /bookvenue` - Book a venue.
- `GET /get venue` - View all user bookings.

  

---

## Folder Structure

```plaintext
venue-booking/
├── server/            # Backend server code
│   ├── routes/        # API routes
│   ├── models/        # MongoDB models
│   ├── controllers/   # Request handlers
│   ├── .env           # Environment variables
│   └── app.js         # Entry point for the server
└── venue/             # Frontend Vue.js application
    ├── src/
    │   ├── components/ # Vue components
    │   ├── views/      # Pages
    │   ├── store/      # State management
    │   └── App.vue     # Main Vue file
    └── public/
```

---

## Future Enhancements
- Add notifications for booking status updates.
- Include advanced filtering options for venues (e.g., capacity, amenities).
- Add user authentication and role-based access control.

---

Feel free to contribute or raise issues for improvements! 🎉
