import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <section className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-cyan-400 mb-10 hover:underline"
        >
          <ArrowLeft size={20} />
          Back to desk
        </button>

        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
          About Me
        </p>

        <h1 className="text-5xl font-bold mb-8">
          Turning experience into tech solutions
        </h1>

        <p className="text-slate-300 text-lg mb-6">
          I am a Computer Science student based in London, UK, focused on building
          modern web applications using React, Node.js and data-driven solutions.
          I am currently transitioning into frontend and full-stack development,
          with a strong interest in combining clean UI with practical backend logic.
        </p>

        <p className="text-slate-300 text-lg mb-6">
          Before moving into tech, I spent several years working in construction
          and previously in sales and warehouse roles. This experience helped me
          develop a strong work ethic, attention to detail and the ability to work
          under pressure — skills that I now apply to software development.
        </p>

        <p className="text-slate-300 text-lg mb-10">
          I enjoy building structured, functional projects such as full-stack
          applications, database systems and interactive tools. My goal is to grow
          into a developer who not only writes code, but understands how to design
          solutions that are reliable, maintainable and useful in real-world scenarios.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <p className="text-cyan-400 text-2xl font-bold mb-2">Frontend</p>
            <p className="text-slate-400 text-sm">
              React, JavaScript, Tailwind, UI/UX focus
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <p className="text-cyan-400 text-2xl font-bold mb-2">Backend</p>
            <p className="text-slate-400 text-sm">
              Node.js, Express, SQLite, APIs
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <p className="text-cyan-400 text-2xl font-bold mb-2">Data</p>
            <p className="text-slate-400 text-sm">
              SQL, Python basics, data analysis
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;