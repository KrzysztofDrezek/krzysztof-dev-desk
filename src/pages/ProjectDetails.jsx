import { ArrowLeft, Code2 } from 'lucide-react';
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

        <button
          onClick={() => window.open('https://github.com/KrzysztofDrezek', '_blank')}
          className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-cyan-300 transition"
        >
          <Code2 size={20} />
          View on GitHub
        </button>
      </section>
    </main>
  );
}

export default ProjectDetails;