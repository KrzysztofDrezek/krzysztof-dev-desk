import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function SkillBar({ name, level }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-slate-300">{name}</span>
        <span className="text-slate-500 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-slate-800 rounded-full h-2">
        <div
          className="bg-cyan-400 h-2 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

function Skills() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <section className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-cyan-400 mb-10 hover:underline"
        >
          <ArrowLeft size={20} />
          Back to desk
        </button>

        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
          Skills
        </p>

        <h1 className="text-5xl font-bold mb-10">
          Technical Skills & Tools
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* FRONTEND */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6 text-cyan-400">
              Frontend
            </h2>

            <div className="space-y-4">
              <SkillBar name="HTML & CSS" level={85} />
              <SkillBar name="JavaScript" level={75} />
              <SkillBar name="React" level={70} />
              <SkillBar name="Tailwind CSS" level={75} />
              <SkillBar name="Vite" level={65} />
            </div>
          </div>

          {/* BACKEND */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6 text-cyan-400">
              Backend
            </h2>

            <div className="space-y-4">
              <SkillBar name="Node.js" level={70} />
              <SkillBar name="Express" level={70} />
              <SkillBar name="SQLite" level={75} />
              <SkillBar name="REST APIs" level={70} />
              <SkillBar name="Authentication" level={60} />
            </div>
          </div>

          {/* DATA */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6 text-cyan-400">
              Data & Analysis
            </h2>

            <div className="space-y-4">
              <SkillBar name="SQL" level={75} />
              <SkillBar name="Python" level={65} />
              <SkillBar name="Data Cleaning" level={65} />
              <SkillBar name="ETL Basics" level={60} />
              <SkillBar name="Data Analysis" level={65} />
            </div>
          </div>

          {/* TOOLS */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6 text-cyan-400">
              Tools & Workflow
            </h2>

            <div className="space-y-4">
              <SkillBar name="Git & GitHub" level={75} />
              <SkillBar name="VS Code" level={85} />
              <SkillBar name="Figma" level={60} />
              <SkillBar name="IntelliJ" level={65} />
              <SkillBar name="Vercel Deployment" level={70} />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Skills;