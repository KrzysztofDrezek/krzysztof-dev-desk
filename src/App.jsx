import { useState } from 'react';
import { motion } from 'framer-motion';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function Home() {
  const navigate = useNavigate();
  const [isLaptopOpen, setIsLaptopOpen] = useState(false);

  const projects = [
    {
      id: "heritage-tours",
      title: "Heritage Tours",
      desc: "Full-stack travel booking application with React, Node.js and SQLite.",
    },
    {
      id: "mini-data-pipeline",
      title: "Mini Data Pipeline",
      subtitle: "Python-based data processing project",
      desc:
        "A small Python project focused on loading, cleaning and processing structured data through a repeatable workflow.",
      tech: ["Python", "CSV", "Automation"],
    },
    {
      id: "job-application-tracker",
      title: "Job Application Tracker",
      desc: "Full-stack job tracking app with frontend, backend, authentication and application status management.",
    },
    {
      id: "ai-task-assistant",
      title: "AI Task Assistant",
      desc: "PWA frontend app created for research: AI at Work: Help or Hype?",
    },
    {
      id: "advanced-database-system",
      title: "Advanced Database System",
      desc: "SQL-based system with CRUD operations, validation and structured testing.",
    },
      ];

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl top-20 left-20"></div>
        <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-20 right-20"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl relative z-10"
        >
          <p className="text-cyan-400 mb-4 tracking-widest uppercase text-sm">
            Interactive Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Krzysztof&apos;s Dev Desk
          </h1>

          <p className="text-slate-300 text-lg md:text-xl mb-8">
            Frontend Developer | React | Full-Stack & Data Projects
          </p>

          <p className="text-slate-400 max-w-2xl mx-auto mb-10">
            A modern interactive portfolio built around a developer desk concept.
            Explore the workspace below to view my projects, skills, GitHub and
            contact details.
          </p>

          <p className="text-cyan-400 text-sm animate-pulse">
            Scroll down to explore the desk ↓
          </p>
        </motion.div>
      </section>

      <section className="px-4 py-24 max-w-[1600px] mx-auto text-center">
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
          Explore the workspace
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Interactive Dev Desk
        </h2>

        <div className="relative mx-auto w-full max-w-[1500px] min-h-[820px] rounded-4xl border border-slate-800 bg-linear-to-b from-slate-900 to-slate-950 p-8 shadow-2xl overflow-visible">
          <div className="absolute inset-0 bg-cyan-500/5"></div>
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-16 left-1/2 -translate-x-1/2"></div>

          <div className="absolute left-10 right-10 bottom-12 h-48 rounded-3xl bg-linear-to-b from-slate-800 to-slate-900 border border-slate-700 shadow-2xl"></div>

          <motion.div
            whileHover={{ scale: 1.04, y: -6 }}
            onClick={() =>
              window.open("https://github.com/KrzysztofDrezek", "_blank")
            }
            className="absolute top-12 left-20 w-72 h-36 bg-black/80 border border-cyan-400/40 rounded-2xl shadow-lg shadow-cyan-500/20 cursor-pointer text-left p-4"
          >
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>

            <p className="text-cyan-400 text-sm font-mono">$ open github</p>
            <p className="text-slate-400 text-xs mt-2 font-mono">
              github.com/KrzysztofDrezek
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04, y: -8 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsLaptopOpen(true)}
            className="absolute left-1/2 top-40 -translate-x-1/2 w-[500px] cursor-pointer z-10"
          >
            <div className="relative h-72 rounded-3xl bg-slate-950 border-[6px] border-slate-700 shadow-2xl p-4 overflow-hidden">
              <div className="absolute inset-0 bg-cyan-500/10 blur-2xl"></div>

              <div className="relative h-full rounded-2xl bg-linear-to-br from-slate-950 via-slate-900 to-cyan-950 border border-cyan-400/40 overflow-hidden">
                <div className="h-8 bg-slate-900/90 border-b border-slate-700 flex items-center px-4 gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                  <p className="ml-3 text-[11px] text-slate-400 font-mono">
                    projects.dashboard
                  </p>
                </div>

                <div className="p-5 text-left">
                  <p className="text-cyan-400 font-mono text-sm mb-4">
                    ./projects
                  </p>

                  <div className="grid grid-cols-3 gap-3">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        className="rounded-xl border border-cyan-400/20 bg-slate-950/70 p-3"
                      >
                        <div className="w-8 h-6 rounded-md bg-cyan-400/20 border border-cyan-300/30 mb-3"></div>
                        <p className="text-[11px] text-slate-200 leading-tight">
                          {project.title}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-400 text-xs mt-5 font-mono">
                    Click laptop to open project dashboard →
                  </p>
                </div>
              </div>
            </div>

            <div className="h-6 bg-linear-to-b from-slate-600 to-slate-800 rounded-b-3xl mx-10"></div>
            <div className="h-4 bg-slate-800 rounded-full mx-4 shadow-xl"></div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: -4 }}
            onClick={() => navigate("/about")}
            className="absolute left-24 bottom-20 w-44 h-56 bg-slate-200 text-slate-900 rounded-xl shadow-xl rotate-[-8deg] cursor-pointer p-5 text-left"
          >
            <div className="border-l-4 border-cyan-500 pl-3">
              <p className="font-bold">About Me</p>
              <p className="text-sm mt-3 text-slate-600">
                CS student, frontend, data and full-stack journey.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.08, rotate: 4 }}
            onClick={() => navigate("/skills")}
            className="absolute right-28 bottom-24 cursor-pointer"
          >
            <div className="relative w-28 h-28 bg-cyan-400/20 border border-cyan-300/50 rounded-b-3xl rounded-t-xl shadow-lg shadow-cyan-500/20 flex items-center justify-center">
              <span className="text-4xl">☕</span>
              <div className="absolute -right-8 top-8 w-10 h-10 border-4 border-cyan-300/40 rounded-full"></div>
            </div>

            <p className="mt-3 text-slate-300">Skills</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            onClick={() => navigate("/contact")}
            className="absolute right-24 top-16 w-24 h-44 bg-slate-950 border-4 border-slate-700 rounded-3xl shadow-xl cursor-pointer p-3 rotate-[8deg]"
          >
            <div className="h-full rounded-2xl bg-linear-to-b from-slate-900 to-slate-950 border border-cyan-400/20 flex items-center justify-center">
              <p className="text-cyan-400 text-xs font-mono">Contact</p>
            </div>
          </motion.div>
        </div>
      </section>

      {isLaptopOpen && (
        <div
          onClick={() => setIsLaptopOpen(false)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur flex items-center justify-center px-6"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.75, opacity: 0, y: 60 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="w-full max-w-5xl bg-slate-900 border border-cyan-400/40 rounded-3xl shadow-2xl shadow-cyan-500/20 p-8 relative"
          >
            <button
              onClick={() => setIsLaptopOpen(false)}
              className="absolute top-5 right-6 text-slate-400 hover:text-white text-2xl"
            >
              ×
            </button>

            <div className="h-8 mb-6 bg-slate-950 border border-slate-800 rounded-xl flex items-center px-4 gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
              <p className="ml-3 text-xs text-slate-400 font-mono">
                laptop/projects-dashboard
              </p>
            </div>

            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
              Laptop Screen
            </p>

            <h2 className="text-3xl font-bold mb-8">Projects Dashboard</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.04, y: -5 }}
                  onClick={() => {
                    setIsLaptopOpen(false);
                    navigate(`/projects/${project.id}`);
                  }}
                  className="bg-slate-950 border border-slate-800 hover:border-cyan-400 rounded-2xl p-6 cursor-pointer transition"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mb-5">{project.desc}</p>

                  <span className="text-cyan-400">Open project →</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;