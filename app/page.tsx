'use client';

import { useEffect, useState } from 'react';
import { Footer } from './components/footer';
import { Hero } from './components/hero';
import { HowItWorks } from './components/how-it-works';
import { Navbar } from './components/navbar';
import { PlatformMarquee } from './components/platform-marquee';
import { Testimonials } from './components/testimonials';

type ModalState = {
  title: string;
  body: string;
  accent: string;
};

type Role = 'student' | 'teacher';
type AuthMode = 'login' | 'signup';
type ThemeMode = 'light' | 'dark';

const offlineCards = [
  { title: 'Video Lessons', desc: 'Offline-ready recordings for revision anytime.', accent: 'bg-[#b5d000]' },
  { title: 'Textbooks', desc: 'PDFs and notes packed for low-connectivity study.', accent: 'bg-[#c8b8e8]' },
  { title: 'Assignments', desc: 'Quizzes, worksheets, and homework synced offline.', accent: 'bg-[#f5c9a0]' },
  { title: 'Course Packs', desc: 'Structured lesson bundles for every subject.', accent: 'bg-[#b8eadc]' },
];

export default function Home() {
  const [phase, setPhase] = useState<'splash' | 'signin' | 'app'>('splash');
  const [role, setRole] = useState<Role>('student');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState<ModalState | null>(null);
  const [connectionMode, setConnectionMode] = useState<'online' | 'offline'>('online');
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [authMode, setAuthMode] = useState<AuthMode>('signup');
  const [stats, setStats] = useState({ students: 0, teachers: 0, schools: 0, courses: 0, languages: 0 });

  useEffect(() => {
    if (phase !== 'splash') return;
    const timer = window.setTimeout(() => setPhase('signin'), 4200);
    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    const targets = { students: 24000, teachers: 1200, schools: 480, courses: 320, languages: 18 };
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setStats({
        students: Math.round(targets.students * eased),
        teachers: Math.round(targets.teachers * eased),
        schools: Math.round(targets.schools * eased),
        courses: Math.round(targets.courses * eased),
        languages: Math.round(targets.languages * eased),
      });

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      }
    };

    const frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const openModal = (title: string, body: string, accent: string) => {
    setModal({ title, body, accent });
  };

  if (phase === 'splash') {
    return (
      <div className={`flex min-h-screen items-center justify-center px-4 py-10 ${theme === 'dark' ? 'bg-[#07111f] text-[#f8fafc]' : 'bg-[#f5f0e8] text-[#1a1a1a]'}`}>
        <div className="relative w-full max-w-5xl overflow-hidden rounded-none border-2 border-black bg-white p-8 shadow-[8px_8px_0_#1a1a1a] sm:p-12">
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-8 text-5xl font-black uppercase tracking-[0.4em] text-[#1a1a1a] sm:text-7xl">
              LAR CONNECT
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#4a4338]">
              Bridging classrooms with AI-powered learning that works with or without the internet.
            </p>

            <div className="mt-10 flex w-full max-w-3xl flex-col gap-4 sm:flex-row">
              {[
                { label: 'Teacher', subtitle: 'uploads a lesson', icon: '🎓' },
                { label: 'LärConnect', subtitle: 'builds the offline pack', icon: '☁️' },
                { label: 'Student', subtitle: 'learns, signal or no signal', icon: '📶' },
              ].map((step, index) => (
                <div
                  key={step.label}
                  className={`flex-1 rounded-none border-2 border-black p-4 text-left shadow-[4px_4px_0_#1a1a1a] ${index === 1 ? 'bg-[#b5d000]' : index === 0 ? 'bg-[#f7f0a0]' : 'bg-[#c8b8e8]'}`}
                >
                  <div className="mb-3 text-3xl">{step.icon}</div>
                  <p className="font-black text-[#1a1a1a]">{step.label}</p>
                  <p className="text-sm text-[#4a4338]">{step.subtitle}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex h-3 w-full max-w-2xl overflow-hidden rounded-full border-2 border-black bg-[#f5f0e8]">
              <div className="h-full animate-pulse rounded-full bg-[#b5d000]" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'signin') {
    return (
      <div className={`flex min-h-screen items-center justify-center px-4 py-8 ${theme === 'dark' ? 'bg-[#07111f] text-[#f8fafc]' : 'bg-[#f5f0e8] text-[#1a1a1a]'}`}>
        <div className="grid w-full max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className={`rounded-none border-2 border-black p-8 shadow-[8px_8px_0_#1a1a1a] sm:p-10 ${theme === 'dark' ? 'bg-[#111827] text-[#f8fafc]' : 'bg-[#f7f3ea] text-[#1a1a1a]'}`}>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#3b5bdb]">Welcome to LārConnect</p>
            <h1 className="mt-3 font-playfair text-4xl font-black text-[#1a1a1a] sm:text-5xl">
              Learn with AI, even when the signal is weak.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#4a4338]">
              Create classrooms, upload lessons, and help every learner keep moving with offline-ready packs and AI support.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'Teacher uploads lessons and resources',
                'LārConnect builds offline packs',
                'Students learn with AI support and progress tracking',
              ].map((item) => (
                <div key={item} className="rounded-none border-2 border-black bg-white p-4 text-sm font-semibold text-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-none border-2 border-black p-8 shadow-[8px_8px_0_#1a1a1a] sm:p-10 ${theme === 'dark' ? 'bg-[#0f172a] text-[#f8fafc]' : 'bg-[#ffffff] text-[#1a1a1a]'}`}>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border-2 border-[#b5d000] bg-[#f5f0e8] font-black text-[#1a1a1a]">
                L
              </div>
              <div>
                <p className="font-black uppercase tracking-[0.25em] text-[#1a1a1a]">Create account</p>
                <p className="text-sm text-[#5a4f3b]">A better classroom experience starts here</p>
              </div>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-3">
              <button
                onClick={() => setAuthMode('login')}
                className={`rounded-full border-2 border-black px-4 py-3 text-sm font-black uppercase tracking-[0.25em] shadow-[4px_4px_0_#1a1a1a] ${authMode === 'login' ? 'bg-[#b5d000]' : 'bg-white'}`}
              >
                Login
              </button>
              <button
                onClick={() => setAuthMode('signup')}
                className={`rounded-full border-2 border-black px-4 py-3 text-sm font-black uppercase tracking-[0.25em] shadow-[4px_4px_0_#1a1a1a] ${authMode === 'signup' ? 'bg-[#c8b8e8]' : 'bg-white'}`}
              >
                Sign Up
              </button>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-3">
              <button
                onClick={() => setRole('student')}
                className={`rounded-none border-2 border-black px-4 py-3 text-sm font-black uppercase tracking-[0.25em] shadow-[4px_4px_0_#1a1a1a] ${role === 'student' ? 'bg-[#b5d000]' : 'bg-white'}`}
              >
                Student
              </button>
              <button
                onClick={() => setRole('teacher')}
                className={`rounded-none border-2 border-black px-4 py-3 text-sm font-black uppercase tracking-[0.25em] shadow-[4px_4px_0_#1a1a1a] ${role === 'teacher' ? 'bg-[#c8b8e8]' : 'bg-white'}`}
              >
                Teacher
              </button>
            </div>

            <div className="mb-4 grid gap-2 sm:grid-cols-3">
              {['Google', 'Microsoft', 'GitHub'].map((provider) => (
                <button key={provider} className="rounded-none border-2 border-black bg-[#f9f6ef] px-3 py-2 text-sm font-semibold text-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a]">
                  {provider}
                </button>
              ))}
            </div>

            <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-[#5a4f3b]">
              Your name
              <input value={name} onChange={(e) => setName(e.target.value)} className={`mt-2 w-full rounded-none border-2 border-black px-4 py-3 outline-none ${theme === 'dark' ? 'bg-[#111827] text-[#f8fafc]' : 'bg-[#f9f6ef] text-[#1a1a1a]'}`} placeholder="Asha" />
            </label>
            <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-[#5a4f3b]">
              Email
              <input value={email} onChange={(e) => setEmail(e.target.value)} className={`mt-2 w-full rounded-none border-2 border-black px-4 py-3 outline-none ${theme === 'dark' ? 'bg-[#111827] text-[#f8fafc]' : 'bg-[#f9f6ef] text-[#1a1a1a]'}`} placeholder="you@example.com" />
            </label>
            <label className="mb-5 block text-sm font-semibold uppercase tracking-[0.2em] text-[#5a4f3b]">
              {role === 'teacher' ? 'Institution or school' : 'Classroom or school'}
              <input className={`mt-2 w-full rounded-none border-2 border-black px-4 py-3 outline-none ${theme === 'dark' ? 'bg-[#111827] text-[#f8fafc]' : 'bg-[#f9f6ef] text-[#1a1a1a]'}`} placeholder={role === 'teacher' ? 'Rural learning center' : 'Grade 8 • Science'} />
            </label>

            <button
              onClick={() => setPhase('app')}
              className="w-full rounded-none border-2 border-black bg-[#b5d000] px-4 py-4 text-lg font-black uppercase tracking-[0.25em] shadow-[4px_4px_0_#1a1a1a]"
            >
              {authMode === 'login' ? 'Continue to dashboard' : 'Create account'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#07111f] text-[#f8fafc]' : 'bg-[#f5f0e8] text-[#1a1a1a]'}`}>
      <Navbar
        onOpenMenu={() => setMenuOpen(true)}
        onOpenAbout={() => openModal('About LārConnect', 'LārConnect empowers every student and teacher with accessible, AI-powered, collaborative education that works online and offline.', '#c8b8e8')}
        onOpenLeaderboard={() => openModal('Leaderboard', 'Celebrate top learners, active teachers, and classroom champions inside the platform.', '#b5d000')}
        connectionMode={connectionMode}
        onToggleConnection={() => setConnectionMode((prev) => (prev === 'online' ? 'offline' : 'online'))}
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
      />

      {menuOpen && <div className="fixed inset-0 z-30 bg-black/20" onClick={() => setMenuOpen(false)} />}
      <aside className={`fixed left-0 top-0 z-40 h-full w-72 border-r-2 border-black bg-[#fffdf8] p-6 shadow-[8px_0_0_#1a1a1a] transition-transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="mb-8 flex items-center justify-between">
          <div className="font-black uppercase tracking-[0.25em]">Menu</div>
          <button onClick={() => setMenuOpen(false)} className="rounded-none border-2 border-black bg-white px-3 py-1 font-black">
            ×
          </button>
        </div>
        <div className="space-y-3">
          {['Assignments', 'Quizzes', 'Tests', 'Performance Analysis', 'Q/A', 'Logout'].map((item) => (
            <button key={item} className="flex w-full rounded-none border-2 border-black bg-white px-4 py-3 font-semibold text-left shadow-[4px_4px_0_#1a1a1a]" onClick={() => setMenuOpen(false)}>
              {item}
            </button>
          ))}
        </div>
      </aside>

      <main>
        <Hero onOpenModal={openModal} />

        <section className="border-b-2 border-black bg-[#f7f3ea] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#3b5bdb]">Interactive learning journey</p>
              <h2 className="mt-3 font-playfair text-4xl font-black text-[#1a1a1a] sm:text-5xl">Teacher → LārConnect → Student</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#4a4338]">
                A clear path showing how lessons move from teacher upload to student learning and community impact.
              </p>
            </div>

            <div className="rounded-[24px] border-2 border-black bg-[#ffffff] p-6 shadow-[6px_6px_0_#1a1a1a] sm:p-8">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: 'Teacher',
                    icon: '👩‍🏫',
                    body: 'Uploads lessons, notes, assignments, and question papers.',
                    accent: 'bg-[#f7f0a0]',
                  },
                  {
                    title: 'LārConnect',
                    icon: '⚡',
                    body: 'Transforms content into AI summaries, quizzes, offline packs, and study plans.',
                    accent: 'bg-[#c8b8e8]',
                  },
                  {
                    title: 'Student',
                    icon: '👨‍🎓',
                    body: 'Learns, practices, revises, asks AI, and earns LārCredits.',
                    accent: 'bg-[#b8eadc]',
                  },
                ].map((item) => (
                  <div key={item.title} className={`rounded-[20px] border-2 border-black p-5 shadow-[4px_4px_0_#1a1a1a] ${item.accent}`}>
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-white text-3xl shadow-[3px_3px_0_#1a1a1a]">
                      {item.icon}
                    </div>
                    <h3 className="font-playfair text-2xl font-black text-[#1a1a1a]">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-[#4a4338]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b-2 border-black bg-[#f7f3ea] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col items-start gap-3">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#3b5bdb]">About</p>
              <h2 className="font-playfair text-4xl font-black text-[#1a1a1a] sm:text-5xl">A premium learning ecosystem for every classroom</h2>
              <p className="max-w-3xl text-lg leading-8 text-[#4a4338]">
                LārConnect is an AI-powered educational ecosystem designed to bridge the learning gap between rural and urban communities. It empowers students, teachers, and schools with intelligent learning tools, multilingual support, AI tutoring, digital resources, and collaborative experiences.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[24px] border-2 border-black bg-[#ffffff] p-8 shadow-[6px_6px_0_#1a1a1a]">
                <p className="text-sm font-black uppercase tracking-[0.35em] text-[#3b5bdb]">Mission</p>
                <p className="mt-4 text-lg leading-8 text-[#4a4338]">
                  LārConnect helps every learner access quality education anytime, anywhere, with AI-powered guidance, offline-ready materials, and teacher-led support.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Students Learning', value: stats.students.toLocaleString() },
                  { label: 'Teachers Connected', value: stats.teachers.toLocaleString() },
                  { label: 'Schools Registered', value: stats.schools.toLocaleString() },
                  { label: 'Languages Supported', value: `${stats.languages}+` },
                ].map((item) => (
                  <div key={item.label} className="rounded-[24px] border-2 border-black bg-[#f7f0a0] p-5 shadow-[4px_4px_0_#1a1a1a]">
                    <div className="text-3xl font-black text-[#1a1a1a]">{item.value}</div>
                    <div className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#4a4338]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`border-b-2 border-black px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${theme === 'dark' ? 'bg-[#07111f] text-[#f8fafc]' : 'bg-[#f5f0e8] text-[#1a1a1a]'}`}>
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#3b5bdb]">LārCredits leaderboard</p>
              <h2 className="mt-3 font-playfair text-4xl font-black text-[#1a1a1a] sm:text-5xl">Top learners this week</h2>
            </div>
            <div className="overflow-hidden rounded-[24px] border-2 border-black bg-[#ffffff] shadow-[6px_6px_0_#1a1a1a]">
              <div className="grid grid-cols-[1.4fr_repeat(3,1fr)] gap-3 border-b-2 border-black bg-[#f7f3ea] px-4 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#4a4338]">
                <div>Student</div>
                <div>LārCredits</div>
                <div>Courses</div>
                <div>XP</div>
              </div>
              {[
                { name: 'Aarav Sharma', credits: '980', courses: '12', xp: '8.2k' },
                { name: 'Diya Nair', credits: '945', courses: '11', xp: '7.8k' },
                { name: 'Rahul Menon', credits: '912', courses: '10', xp: '7.4k' },
                { name: 'Ananya Roy', credits: '901', courses: '10', xp: '7.1k' },
              ].map((entry, index) => (
                <div key={entry.name} className={`grid grid-cols-[1.4fr_repeat(3,1fr)] gap-3 px-4 py-4 text-sm ${index % 2 === 0 ? 'bg-[#f8f6f0]' : 'bg-white'}`}>
                  <div className="flex items-center gap-3 font-semibold text-[#1a1a1a]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-[#b5d000] text-sm font-black">{index + 1}</span>
                    {entry.name}
                  </div>
                  <div className="font-semibold text-[#1a1a1a]">{entry.credits}</div>
                  <div className="font-semibold text-[#1a1a1a]">{entry.courses}</div>
                  <div className="font-semibold text-[#1a1a1a]">{entry.xp}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`border-b-2 border-black px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${theme === 'dark' ? 'bg-[#0f172a] text-[#f8fafc]' : 'bg-[#f7f3ea] text-[#1a1a1a]'}`}>
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col items-start gap-3">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#3b5bdb]">Video lessons</p>
              <h2 className="font-playfair text-4xl font-black text-[#1a1a1a] sm:text-5xl">Watch, learn, and revise anywhere</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[
                { title: 'Physics Basics', duration: '12 min', subject: 'Physics', teacher: 'Mr. Arun', accent: 'bg-[#b5d000]' },
                { title: 'Algebra Made Easy', duration: '18 min', subject: 'Math', teacher: 'Ms. Priya', accent: 'bg-[#c8b8e8]' },
                { title: 'Biology Concepts', duration: '14 min', subject: 'Biology', teacher: 'Dr. Nair', accent: 'bg-[#f5c9a0]' },
              ].map((lesson) => (
                <div key={lesson.title} className={`rounded-[24px] border-2 border-black p-5 shadow-[4px_4px_0_#1a1a1a] transition duration-200 hover:-translate-y-1 hover:scale-[1.01] ${lesson.accent}`}>
                  <div className="flex h-40 items-center justify-center rounded-[20px] border-2 border-black bg-white/70 text-4xl shadow-[3px_3px_0_#1a1a1a]">
                    ▶
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm font-semibold uppercase tracking-[0.2em] text-[#4a4338]">
                    <span>{lesson.subject}</span>
                    <span>{lesson.duration}</span>
                  </div>
                  <h3 className="mt-3 font-playfair text-2xl font-black text-[#1a1a1a]">{lesson.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#4a4338]">Taught by {lesson.teacher}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <button className="rounded-full border-2 border-black bg-white px-3 py-2 text-sm font-black uppercase tracking-[0.2em] shadow-[3px_3px_0_#1a1a1a]">Play</button>
                    <button className="rounded-full border-2 border-black bg-[#1a1a1a] px-3 py-2 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[3px_3px_0_#b5d000]">Watch Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b-2 border-black bg-[#f7f3ea] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col items-start gap-3">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#3b5bdb]">Core features</p>
              <h2 className="font-playfair text-4xl font-black text-[#1a1a1a] sm:text-5xl">Everything a modern classroom needs</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[
                { title: 'Video Lessons', desc: 'Curriculum-ready lessons with multilingual support, adjustable speed, and offline downloads.', accent: 'bg-[#b5d000]' },
                { title: 'Digital Textbooks', desc: 'Chapter-wise navigation, AI summaries, search, translation, and offline access.', accent: 'bg-[#c8b8e8]' },
                { title: 'Assignments', desc: 'Create, submit, grade, and evaluate with instant AI feedback and analytics.', accent: 'bg-[#f5c9a0]' },
                { title: 'Course Packages', desc: 'Organized bundles of video lectures, notes, quizzes, mock tests, and practice resources.', accent: 'bg-[#b8eadc]' },
                { title: 'AI Learning Assistant', desc: 'An always-on tutor that explains concepts, answers doubts, and recommends content.', accent: 'bg-[#f7f0a0]' },
                { title: 'Video to Notes', desc: 'Convert educational videos into structured notes, formulas, summaries, and revision points.', accent: 'bg-[#ffffff]' },
                { title: 'Audio to Text', desc: 'Turn lectures and discussions into searchable text with multilingual support.', accent: 'bg-[#f5f0e8]' },
              ].map((feature) => (
                <button key={feature.title} onClick={() => openModal(feature.title, feature.desc, '#ffffff')} className={`rounded-[24px] border-2 border-black p-6 text-left shadow-[4px_4px_0_#1a1a1a] transition hover:-translate-y-1 ${feature.accent}`}>
                  <div className="mb-4 inline-flex rounded-full border-2 border-black bg-white px-3 py-2 text-[10px] font-black uppercase tracking-[0.3em]">
                    {feature.title.split(' ')[0]}
                  </div>
                  <h3 className="font-playfair text-2xl font-black text-[#1a1a1a]">{feature.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#4a4338]">{feature.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-b-2 border-black bg-[#f7f3ea] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[24px] border-2 border-black bg-[#ffffff] p-8 shadow-[6px_6px_0_#1a1a1a]">
                <p className="text-sm font-black uppercase tracking-[0.35em] text-[#3b5bdb]">About</p>
                <h2 className="mt-3 font-playfair text-4xl font-black text-[#1a1a1a] sm:text-5xl">Mission & Vision</h2>
                <p className="mt-5 text-lg leading-8 text-[#4a4338]">
                  To empower every student and teacher by providing accessible, AI-powered, and collaborative education that overcomes barriers of geography, language, teacher shortages, and internet connectivity.
                </p>
                <p className="mt-4 text-lg leading-8 text-[#4a4338]">
                  To become the world’s leading inclusive digital education ecosystem where every learner, regardless of location or socioeconomic background, has access to quality education.
                </p>
              </div>
              <div className="space-y-6">
                <div className="rounded-[24px] border-2 border-black bg-[#b8eadc] p-6 shadow-[6px_6px_0_#1a1a1a]">
                  <h3 className="font-playfair text-2xl font-black">Offline-first learning</h3>
                  <p className="mt-3 leading-7 text-[#4a4338]">Teachers can upload videos, notes, and worksheets for students to access even with low connectivity.</p>
                </div>
                <div className="rounded-[24px] border-2 border-black bg-[#f7f0a0] p-6 shadow-[6px_6px_0_#1a1a1a]">
                  <h3 className="font-playfair text-2xl font-black">AI support everywhere</h3>
                  <p className="mt-3 leading-7 text-[#4a4338]">Students receive instant explanations and quiz support while teachers manage classrooms with ease.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`border-b-2 border-black px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${theme === 'dark' ? 'bg-[#07111f] text-[#f8fafc]' : 'bg-[#f5f0e8] text-[#1a1a1a]'}`}>
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#3b5bdb]">Founders</p>
              <h2 className="mt-3 font-playfair text-4xl font-black text-[#1a1a1a] sm:text-5xl">Built by educators and builders</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                { name: 'Sneha Sajeevan', role: 'Co-Founder & Full Stack Developer', bio: 'Leads product strategy, AI learning experiences, and scalable education technology.', accent: 'bg-[#b5d000]' },
                { name: 'Nikitha Roy', role: 'Co-Founder & UI/UX Designer', bio: 'Designs inclusive, intuitive experiences for learners of all ages and backgrounds.', accent: 'bg-[#c8b8e8]' },
                { name: 'Vandana Menon', role: 'Co-Founder & Backend Developer', bio: 'Builds secure APIs, cloud systems, authentication, and reliable platform infrastructure.', accent: 'bg-[#f5c9a0]' },
                { name: 'Sreya Sreejith', role: 'Co-Founder & AI & Content Strategist', bio: 'Shapes multilingual content, AI automation, and personalized learning resources.', accent: 'bg-[#b8eadc]' },
              ].map((founder) => (
                <div key={founder.name} className={`rounded-[24px] border-2 border-black p-6 shadow-[4px_4px_0_#1a1a1a] ${founder.accent}`}>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-white text-xl font-black">
                    {founder.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
                  </div>
                  <h3 className="font-playfair text-2xl font-black text-[#1a1a1a]">{founder.name}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#3b5bdb]">{founder.role}</p>
                  <p className="mt-4 text-sm leading-7 text-[#4a4338]">{founder.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`border-b-2 border-black px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${theme === 'dark' ? 'bg-[#0f172a] text-[#f8fafc]' : 'bg-[#f7f3ea] text-[#1a1a1a]'}`}>
          <div className={`mx-auto max-w-7xl rounded-[24px] border-2 border-black p-8 shadow-[6px_6px_0_#1a1a1a] sm:p-10 ${theme === 'dark' ? 'bg-[#111827]' : 'bg-[#ffffff]'}`}>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#3b5bdb]">Backend capabilities</p>
            <h2 className="mt-3 font-playfair text-4xl font-black text-[#1a1a1a] sm:text-5xl">Built for scale, trust, and everyday teaching</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {[
                'Secure authentication with JWT/OAuth',
                'Student, Teacher, and Admin dashboards',
                'AI chatbot integration',
                'Video streaming and management',
                'Automatic note generation from videos',
                'Audio-to-text transcription',
                'Assignment creation and submission',
                'Digital textbook storage and PDF upload',
                'Offline synchronization and progress analytics',
              ].map((item) => (
                <div key={item} className="rounded-[20px] border-2 border-black bg-[#f5f0e8] p-4 text-sm font-semibold text-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`border-b-2 border-black px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${theme === 'dark' ? 'bg-[#07111f] text-[#f8fafc]' : 'bg-[#f5f0e8] text-[#1a1a1a]'}`}>
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-[#3b5bdb]">Offline content</p>
                <h2 className="font-playfair text-4xl font-black text-[#1a1a1a]">Everything your classroom needs</h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-[#4a4338]">Boxes of resources for video lessons, study packs, quizzes, and assignments that are ready to go offline.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {offlineCards.map((card) => (
                <button key={card.title} onClick={() => openModal(card.title, card.desc, '#ffffff')} className={`rounded-none border-2 border-black p-6 text-left shadow-[4px_4px_0_#1a1a1a] ${card.accent}`}>
                  <div className="mb-4 h-12 w-12 rounded-full border-2 border-black bg-white" />
                  <h3 className="font-playfair text-2xl font-black text-[#1a1a1a]">{card.title}</h3>
                  <p className="mt-3 leading-7 text-[#4a4338]">{card.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <PlatformMarquee />
        <Testimonials onOpenModal={openModal} />
        <HowItWorks onOpenModal={openModal} />

        <section className={`border-b-2 border-black px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${theme === 'dark' ? 'bg-[#0f172a] text-[#f8fafc]' : 'bg-[#f7f3ea] text-[#1a1a1a]'}`}>
          <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-2">
            <div className="rounded-none border-2 border-black bg-[#ffffff] p-8 shadow-[6px_6px_0_#1a1a1a]">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#3b5bdb]">Student guide</p>
              <h3 className="mt-3 font-playfair text-3xl font-black text-[#1a1a1a]">For every learner</h3>
              <ul className="mt-5 space-y-3 text-lg leading-8 text-[#4a4338]">
                <li>• Sign up or log in</li>
                <li>• Join a classroom and access learning materials</li>
                <li>• Ask doubts and complete quizzes</li>
                <li>• Download lessons for offline study</li>
              </ul>
            </div>
            <div className="rounded-none border-2 border-black bg-[#c8b8e8] p-8 shadow-[6px_6px_0_#1a1a1a]">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#1a1a1a]">Teacher guide</p>
              <h3 className="mt-3 font-playfair text-3xl font-black text-[#1a1a1a]">For every educator</h3>
              <ul className="mt-5 space-y-3 text-lg leading-8 text-[#4a4338]">
                <li>• Create classrooms and upload resources</li>
                <li>• Assign quizzes and track progress</li>
                <li>• Use AI assistance to answer doubts</li>
                <li>• Support students with offline packs</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={() => setModal(null)}>
          <div className="w-full max-w-lg rounded-none border-2 border-black bg-white p-8 shadow-[8px_8px_0_#1a1a1a]" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 h-3 w-20 rounded-full border-2 border-black" style={{ backgroundColor: modal.accent }} />
            <h3 className="font-playfair text-3xl font-black text-[#1a1a1a]">{modal.title}</h3>
            <p className="mt-4 text-lg leading-8 text-[#4a4338]">{modal.body}</p>
            <button onClick={() => setModal(null)} className="mt-6 rounded-none border-2 border-black bg-[#b5d000] px-4 py-3 font-black uppercase tracking-[0.2em] shadow-[4px_4px_0_#1a1a1a]">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
