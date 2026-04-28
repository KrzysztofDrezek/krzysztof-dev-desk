import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Contact() {
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
          Contact
        </p>

        <h1 className="text-5xl font-bold mb-6">Let&apos;s connect</h1>

        <p className="text-slate-300 text-lg mb-10 max-w-2xl">
          I am open to junior frontend, full-stack and data-focused opportunities.
          Feel free to contact me or view my work on GitHub and LinkedIn.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="mailto:your.email@example.com"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition"
          >
            <p className="text-cyan-400 text-3xl mb-4">✉️</p>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p className="text-slate-400">Krzysztofdrezek@hotmail.com</p>
          </a>

          <a
            href="https://github.com/KrzysztofDrezek"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition"
          >
            <p className="text-cyan-400 text-3xl mb-4">💻</p>
            <h2 className="text-xl font-semibold mb-2">GitHub</h2>
            <p className="text-slate-400">github.com/KrzysztofDrezek</p>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition"
          >
            <p className="text-cyan-400 text-3xl mb-4">🔗</p>
            <h2 className="text-xl font-semibold mb-2">LinkedIn</h2>
            <p className="text-slate-400">www.linkedin.com/in/krzysztof-drezek-659193198</p>
          </a>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-cyan-400 text-3xl mb-4">📍</p>
            <h2 className="text-xl font-semibold mb-2">Location</h2>
            <p className="text-slate-400">United Kingdom</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;