type Review = {
  name: string;
  role: string;
  location: string;
  quote: string;
  accent: string;
};

const reviews: Review[] = [
  {
    name: 'Rahul Sharma',
    role: 'Physics Teacher',
    location: 'Delhi',
    quote: 'My students finally have a consistent way to revise, even when the network is weak.',
    accent: 'bg-white',
  },
  {
    name: 'Kavitha R.',
    role: 'Class Teacher',
    location: 'Chennai',
    quote: 'We uploaded every chapter and the AI tutor turned it into a guided learning path.',
    accent: 'bg-[#e8e0f8]',
  },
  {
    name: 'Anjali Nair',
    role: 'Science Teacher',
    location: 'Kochi',
    quote: 'The offline packs made learning feel possible for villages and urban schools alike.',
    accent: 'bg-[#b8eadc]',
  },
  {
    name: 'Maya R.',
    role: 'Head of Customer Success',
    location: 'Fintech startup',
    quote: 'The product feels simple enough for classrooms, powerful enough for enterprise teams.',
    accent: 'bg-[#f7f0a0]',
  },
  {
    name: 'Sam P.',
    role: 'Senior Engineer',
    location: 'B2B SaaS',
    quote: 'The onboarding and experience are beautiful, and the teaching use case is genuinely strong.',
    accent: 'bg-[#fde8d0]',
  },
  {
    name: 'Dr. Aiko T.',
    role: 'Researcher',
    location: 'Tokyo',
    quote: 'It gives teachers a practical way to make content accessible without losing quality.',
    accent: 'bg-white',
  },
];

type TestimonialsProps = {
  onOpenModal: (title: string, body: string, accent: string) => void;
};

export function Testimonials({ onOpenModal }: TestimonialsProps) {
  return (
    <section className="border-b-2 border-black bg-[#f5c9a0] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl text-left">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-[#3b5bdb]">Social proof</p>
          <h2 className="font-playfair text-4xl font-black leading-tight text-[#1a1a1a] sm:text-5xl">
            They stopped<br />
            <span className="italic text-[#3b5bdb]">switching tabs.</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#4a4338]">
            Teachers, researchers, PMs, and engineers. They installed it and didn’t look back.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {reviews.map((review) => (
            <button
              key={review.name}
              onClick={() => onOpenModal(review.name, review.quote, '#ffffff')}
              className={`rounded-none border-2 border-black p-6 text-left shadow-[4px_4px_0_#1a1a1a] ${review.accent}`}
            >
              <div className="mb-4 text-2xl text-[#1a1a1a]">★★★★★</div>
              <p className="text-lg leading-8 text-[#1a1a1a]">“{review.quote}”</p>
              <div className="mt-6 border-t border-black pt-4">
                <p className="font-black text-[#1a1a1a]">{review.name}</p>
                <p className="text-sm text-[#5a4f3b]">{review.role} · {review.location}</p>
              </div>
              <div className="mt-4 inline-flex rounded-full border-2 border-black bg-white px-3 py-1 text-sm font-semibold text-[#1a1a1a]">
                Chrome Web Store
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
