export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border-2 border-[#b5d000] bg-[#f5f0e8] text-lg font-black text-[#1a1a1a]">
              L
            </div>
            <div>
              <p className="font-black uppercase tracking-[0.25em]">LārConnect</p>
              <p className="text-sm text-[#d9d4ce]">AI-powered education for teachers and students, online or offline.</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-7 text-[#d9d4ce]">
            Bridging learning gaps with accessible content, teacher support, and reliable offline packs.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-black uppercase tracking-[0.25em]">Product</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#d9d4ce]">
              <li>Offline packs</li>
              <li>AI tutor</li>
              <li>Assignments</li>
            </ul>
          </div>
          <div>
            <h3 className="font-black uppercase tracking-[0.25em]">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#d9d4ce]">
              <li>About</li>
              <li>Mission</li>
              <li>Vision</li>
            </ul>
          </div>
          <div>
            <h3 className="font-black uppercase tracking-[0.25em]">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#d9d4ce]">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-center">
        <p className="text-sm text-[#d9d4ce]">© 2026 LārConnect. All rights reserved.</p>
        <button className="rounded-none border-2 border-black bg-[#b5d000] px-4 py-2 font-black uppercase tracking-[0.2em] text-[#1a1a1a] shadow-[4px_4px_0_#ffffff]">
          Get Started Free
        </button>
      </div>
    </footer>
  );
}
