import { ArrowLeft, Code2, ExternalLink } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

function ProjectDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const projectData = {
    "heritage-tours": {
      title: "Heritage Tours",
      subtitle: "Full-stack travel booking application",
      description:
        "Heritage Tours is a full-stack travel booking application built with React, Node.js, Express and SQLite. The project includes tour browsing, search functionality, availability checking, booking creation and user login features.",
      tech: ["React", "Node.js", "Express", "SQLite", "Vite", "Sessions"],
      highlights: [
        "Full-stack application using React frontend and Express backend.",
        "SQLite database with tours, users, bookings and availability tables.",
        "Search by city and tour theme.",
        "Booking system with availability reduction after booking.",
        "Login, logout and protected booking routes.",
      ],
      github: "https://github.com/KrzysztofDrezek",
      live: "https://krzysztof-dev-desk-git-main-krzysztofdrezeks-projects.vercel.app/",
    },

    "job-application-tracker": {
      title: "Job Application Tracker",
      subtitle: "Full-stack job search management application",
      description:
        "Job Application Tracker is a web application designed to help users organise and manage their job search process. It allows applications to be tracked by company, role, status and progress, making the recruitment workflow easier to control and review.",
      tech: ["React", "Vite", "JavaScript", "Tailwind CSS", "LocalStorage"],
      highlights: [
        "Built a practical application focused on solving a real job-search organisation problem.",
        "Created a clean interface for tracking applications and their current status.",
        "Used reusable React components to keep the application structured and maintainable.",
        "Implemented responsive styling for a clear experience across different screen sizes.",
        "Deployed the project with Vercel and connected it to GitHub for version control.",
      ],
      github: "https://github.com/KrzysztofDrezek/job-application-tracker",
      live: "https://job-application-tracker-one-omega.vercel.app/",
    },

    "ai-task-assistant": {
      title: "AI Task Assistant",
      subtitle: "Frontend/PWA research artefact",
      description:
        "AI Task Assistant is a frontend progressive web app created as a research artefact for the project AI at Work: Help or Hype? It helps users break tasks into plans, prompts and checklists.",
      tech: ["HTML", "CSS", "JavaScript", "PWA", "LocalStorage"],
      highlights: [
        "Frontend-only application designed for research testing.",
        "Task input, support pack, checklist and history sections.",
        "Uses localStorage to save previous task sessions.",
        "Includes manifest and service worker for PWA behaviour.",
        "Supports the research topic around AI support in work and study.",
      ],
      github: "https://github.com/KrzysztofDrezek",
      live: "",
    },

    "advanced-database-system": {
      title: "Advanced Database System",
      subtitle: "Database-focused coursework project",
      description:
        "Advanced Database System is a database-focused project using SQLite with CRUD features, validation, encryption/decryption, BLOB images, XML handling and structured testing.",
      tech: ["SQLite", "SQL", "Python", "CRUD", "Testing"],
      highlights: [
        "SQLite database with structured schema and relational design.",
        "CRUD operations supported through application logic.",
        "Validation and testing included across key database operations.",
        "Encryption and decryption features implemented.",
        "Includes evidence-based testing and screenshots for reporting.",
      ],
      github: "https://github.com/KrzysztofDrezek",
      live: "",
    },
  };

  const project = projectData[id];

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
        <section className="max-w-5xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-cyan-400 mb-10 hover:underline"
          >
            <ArrowLeft size={20} />
            Back to portfolio
          </button>

          <h1 className="text-4xl font-bold">Project not found</h1>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <section className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-cyan-400 mb-10 hover:underline"
        >
          <ArrowLeft size={20} />
          Back to portfolio
        </button>

        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
          Featured Project
        </p>

        <h1 className="text-5xl font-bold mb-4">{project.title}</h1>

        <p className="text-slate-400 text-xl mb-6">{project.subtitle}</p>

        <p className="text-slate-300 text-lg mb-8 max-w-3xl">
          {project.description}
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {project.tech.map((tech) => (
            <div
              key={tech}
              className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center"
            >
              {tech}
            </div>
          ))}
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Highlights</h2>

          <ul className="space-y-3 text-slate-300">
            {project.highlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4">
          {project.live && (
            <button
              onClick={() => window.open(project.live, '_blank')}
              className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-cyan-300 transition"
            >
              <ExternalLink size={20} />
              View Live
            </button>
          )}

          <button
            onClick={() => window.open(project.github, '_blank')}
            className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-cyan-400 hover:text-slate-950 transition"
          >
            <Code2 size={20} />
            View on GitHub
          </button>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetails;