import 'dotenv/config';
import mongoose from 'mongoose';
import Project from './models/Project.js';
import Skill from './models/Skill.js';
import Experience from './models/Experience.js';
import Service from './models/Service.js';
import BlogPost from './models/BlogPost.js';

const portfolioData = {
    projects: [
        {
            name: "Point of Sale (POS) System",
            slug: "pos-system",
            tech: ["Flutter", "SQLite", "React", "Web"],
            problem: "Need for a mobile-first POS system with offline capabilities and a responsive web dashboard for inventory management.",
            solution: "Developed a mobile POS using Flutter and SQLite for offline storage. Led the development of a responsive web version for real-time billing and inventory.",
            role: "Lead Developer",
            github: "https://github.com/minahil-ch",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
            index: 1
        },
        {
            name: "Taskify App",
            slug: "taskify",
            tech: ["Flutter", "Dart", "API Integration", "Android Studio"],
            problem: "Users needed a more streamlined way to manage tasks with secure authentication and smooth performance.",
            solution: "Focused on authentication and UI improvements, ensuring a smooth login flow and enhanced overall performance through rigorous debugging.",
            role: "Mobile Developer",
            github: "https://github.com/minahil-ch",
            image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800",
            index: 2
        },
        {
            name: "CGPA Calculator",
            slug: "cgpa-calculator",
            tech: ["Flutter", "SQLite", "Dart"],
            problem: "Students lack tools to track multi-semester performance and predict required grades for target CGPAs.",
            solution: "Built a mobile tool that stores semester-wise grades and provides goal-oriented advice to help students achieve their academic targets.",
            role: "Sole Developer",
            github: "https://github.com/minahil-ch",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
            index: 3
        },
        {
            name: "Fitness Tracker App",
            slug: "fitness-tracker",
            tech: ["Flutter", "Dart", "Android Studio"],
            problem: "Difficulty in tracking daily activities and workout progress in a simple, user-friendly interface.",
            solution: "Developed a Flutter application that allows users to monitor their health data and workout routines effectively.",
            role: "App Developer",
            github: "https://github.com/minahil-ch",
            image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=800",
            index: 4
        },
        {
            name: "Ludo Game",
            slug: "ludo-game",
            tech: ["Flutter", "Dart", "UI/UX"],
            problem: "Traditional board games needed a modern, digital turn-based experience with engaging animations.",
            solution: "Designed a simple yet addictive Ludo game with smooth animations and a clean, responsive mobile interface.",
            role: "Game Developer",
            github: "https://github.com/minahil-ch",
            image: "https://images.unsplash.com/photo-1610819013583-29c81732650b?auto=format&fit=crop&q=80&w=800",
            index: 5
        },
        {
            name: "Employee Management System",
            slug: "employee-management",
            tech: ["C#", "SQL Server", ".NET"],
            problem: "Organizations needed an efficient way to manage employee data, salaries, and roles in a centralized system.",
            solution: "Created a desktop application with full CRUD operations and secure SQL handling for data persistence.",
            role: "Software Developer",
            github: "https://github.com/minahil-ch",
            image: "https://images.unsplash.com/photo-1454165833767-12461a9961d7?auto=format&fit=crop&q=80&w=800",
            index: 6
        }
    ],
    skills: {
        languages: ["C++", "Python", "Java", "PHP", "Dart", "JavaScript"],
        frameworks: ["Flutter", "React", "Bootstrap", "Laravel", "Android Studio"],
        tools: ["Visual Studio", "VS Code", "Git", "SQL Server"],
        databases: ["SQL", "SQLite", "SQL Server"]
    },
    experience: [
        {
            company: "Largify Solutions Limited",
            role: "Team Lead (Web Development)",
            period: "Aug 2025 - Sep 2025",
            highlights: [
                "Led a development team to deliver a web-based POS application.",
                "Supervised tasks and managed design flow ensuring timely delivery.",
                "Collaborated with backend developers and testers for smooth deployment."
            ]
        },
        {
            company: "Largify Solutions Limited",
            role: "Artificial Intelligence Intern",
            period: "2025 (Internship)",
            highlights: [
                "Focused on practical AI applications and tools.",
                "Developed an AI chatbot capable of scanning website content and generating context-aware responses."
            ]
        },
        {
            company: "CodeAlpha",
            role: "Android Development Intern",
            period: "Jan 2026 - Feb 2026",
            highlights: [
                "Working with Flutter and Dart to develop multiple mobile applications.",
                "Implemented a Fitness Tracker, Random Quote Generator, and Quiz App.",
                "Focused on responsive UI design and smooth user interactions using Android Studio."
            ]
        }
    ],
    services: [
        {
            title: "MERN Stack Development",
            description: "Building scalable, high-performance web applications using MongoDB, Express, React, and Node.js.",
            icon: "Layout",
            rate: "$50/hr"
        },
        {
            title: "Mobile App Development",
            description: "Creating cross-platform mobile applications with Flutter and Dart for iOS and Android.",
            icon: "Smartphone",
            rate: "$45/hr"
        },
        {
            title: "AI Integration",
            description: "Implementing intelligent features like chatbots and automated data processing into your applications.",
            icon: "Bot",
            rate: "$60/hr"
        }
    ],
    blog: [
        {
            title: "Mastering Flutter & SQLite for Offline Apps",
            content: "Learn how to build robust mobile applications that work seamlessly without an internet connection using local storage.",
            category: "Development",
            slug: "mastering-flutter-sqlite",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "The Power of AI in Modern Software",
            content: "Exploring how AI is transforming the way we build and interact with software tools in 2026.",
            category: "AI",
            slug: "power-of-ai-2026",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
        }
    ]
};

const seedDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');

        await Project.deleteMany({});
        await Skill.deleteMany({});
        await Experience.deleteMany({});
        await Service.deleteMany({});
        await BlogPost.deleteMany({});

        await Project.insertMany(portfolioData.projects);
        await Skill.create(portfolioData.skills);
        await Experience.insertMany(portfolioData.experience);
        await Service.insertMany(portfolioData.services);
        await BlogPost.insertMany(portfolioData.blog);

        console.log('Database seeded successfully');
        process.exit();
    } catch (err) {
        console.error('Error seeding database:', err);
        process.exit(1);
    }
};

seedDB();
