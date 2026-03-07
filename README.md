# Minahil Anjum - MERN Stack & Mobile App Developer Portfolio

A high-performance, dynamic portfolio built with the **MERN Stack** (MongoDB, Express, React, Node.js) and **Next.js**. This project showcases the intersection of minimalist design and robust software engineering, featuring real-time data fetching, a functional contact form, and smooth animations.

## 🚀 Features

- **Dynamic Content**: Projects, Skills, Experience, Services, and Blog posts are fetched directly from a MongoDB backend.
- **Functional Contact Form**: Direct integration with the backend to save user messages securely.
- **Modern Tech Stack**: Built with Next.js 14+, Tailwind CSS, Framer Motion, and Express.js.
- **Premium Design**: Inspired by high-end developer portfolios, featuring dark modes, mesh backgrounds, and magnetic interactive elements.
- **Mobile Responsive**: Fully optimized for all screen sizes.

## 🛠️ Technology Stack

- **Frontend**: Next.js, React, Tailwind CSS, Framer Motion, Lucide Icons.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Mongoose).
- **Deployment**: Vercel (Frontend), Render (Backend).

## 🏁 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (Local or Atlas)

### Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   npm install
   # Create a .env file based on .env.example
   npm run seed  # Seed initial CV data
   npm run dev   # Start dev server
   ```

3. **Frontend Setup**:
   ```bash
   cd ..
   npm install
   # Create a .env.local file with NEXT_PUBLIC_API_URL=http://localhost:5000
   npm run dev   # Start Next.js dev server
   ```

## 📄 Deployment

### Backend (Render)
- Connect repository.
- Build Command: `npm install && cd backend && npm install`
- Start Command: `cd backend && node server.js`
- Set `MONGODB_URI` environment variable.

### Frontend (Vercel)
- Connect repository.
- Set `NEXT_PUBLIC_API_URL` to your Render backend URL.
- Deploy!

## 🤝 Contact

**Minahil Anjum**
- Email: [minahilanjum821@gmail.com](mailto:minahilanjum821@gmail.com)
- LinkedIn: [linkedin.com/in/minahil-anjum](https://www.linkedin.com/in/minahil-anjum-558213364)
- GitHub: [github.com/minahil-ch](https://github.com/minahil-ch)
