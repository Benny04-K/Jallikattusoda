import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Gallery } from "@/components/Gallery";
import { ContactForm } from "@/components/ContactForm";
import logo from "@/assets/logo.jpg";
import bottleRed from "@/assets/bottle-red.png";
import bottleGreen from "@/assets/bottle-green.png";

export const Route = createFileRoute("/")({
  component: Landing,
});

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

function Bubbles({ count = 18 }: { count?: number }) {
  const items = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((_, i) => {
        const size = 8 + Math.random() * 30;
        const left = Math.random() * 100;
        const dur = 6 + Math.random() * 10;
        const delay = Math.random() * 8;
        return (
          <span
            key={i}
            className="bubble"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-cream/70 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Jallikattu Soda" className="h-12 w-12 rounded-full object-cover ring-2 ring-secondary" />
          <div className="leading-tight">
            <div className="font-display text-xl text-primary tracking-wider">JALLIKATTU</div>
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground">SODA · SINCE 1946</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a href="#flavors" className="hover:text-secondary transition-colors">Flavors</a>
          <Link to="/products" className="hover:text-secondary transition-colors">Products</Link>
          <a href="#story" className="hover:text-secondary transition-colors">Heritage</a>
          <a href="#crafted" className="hover:text-secondary transition-colors">Crafted</a>
          <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
        </nav>
        <a href="#flavors" className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-bold hover:bg-berry transition-colors shadow-lg">
          Taste Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const y = useScrollY();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ background: "var(--gradient-hero)" }}>
      {/* Sun layer */}
      <div
        className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-70 animate-spin-slow"
        style={{ background: "var(--gradient-sun)", transform: `translateY(${y * 0.3}px)` }}
      />
      {/* Decorative blobs */}
      <div
        className="absolute -bottom-32 -left-20 h-[500px] w-[500px] rounded-full bg-leaf/40 blur-3xl"
        style={{ transform: `translateY(${y * -0.2}px)` }}
      />
      <div
        className="absolute top-1/3 left-10 h-40 w-40 rounded-full bg-saffron/60 blur-2xl"
        style={{ transform: `translateY(${y * 0.5}px)` }}
      />

      <Bubbles count={24} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div style={{ transform: `translateY(${y * -0.15}px)` }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-cream/90 px-4 py-1.5 text-xs font-bold text-primary tracking-widest mb-6">
            ★ SINCE 1946 ★
          </div>
          <h1 className="font-display text-6xl md:text-8xl text-cream leading-[0.9] drop-shadow-lg">
            BOLD FIZZ.<br />
            <span className="text-saffron">DESI</span> SOUL.
          </h1>
          <p className="mt-6 max-w-md text-lg text-cream/90">
            Eight decades of bubbles, brewed with the spirit of Tamil Nadu. Pop a Jallikattu — taste the tradition that refuses to settle.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#flavors" className="rounded-full bg-cream text-primary px-7 py-3 font-bold shadow-xl hover:scale-105 transition-transform">
              Explore Flavors
            </a>
            <a href="#story" className="rounded-full border-2 border-cream text-cream px-7 py-3 font-bold hover:bg-cream/10 transition-colors">
              Our Story →
            </a>
          </div>
          <div className="mt-10 flex items-center gap-8 text-cream/90">
            <div><div className="font-display text-3xl">80+</div><div className="text-xs tracking-widest">YEARS</div></div>
            <div className="h-10 w-px bg-cream/40" />
            <div><div className="font-display text-3xl">6</div><div className="text-xs tracking-widest">FLAVORS</div></div>
            <div className="h-10 w-px bg-cream/40" />
            <div><div className="font-display text-3xl">1M+</div><div className="text-xs tracking-widest">FANS</div></div>
          </div>
        </div>

        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          <div
            className="absolute h-80 w-80 rounded-full bg-cream/20 blur-2xl"
            style={{ transform: `scale(${1 + y * 0.001})` }}
          />
          <img
            src={bottleRed}
            alt="Jallikattu Soda bottle"
            className="relative z-10 h-full object-contain animate-shimmer"
            style={{ transform: `translateY(${y * -0.1}px) rotate(${y * 0.02}deg)` }}
          />
          <img
            src={bottleGreen}
            alt=""
            className="absolute right-0 bottom-10 h-72 object-contain opacity-80 animate-float-slow"
            style={{ transform: `translateY(${y * 0.1}px)` }}
          />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/80 text-xs tracking-[0.4em] animate-float-mid">
        SCROLL ↓
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["FIZZ ON", "SINCE 1946", "TASTE OF TAMIL NADU", "POP THE TRADITION", "BOLD & BUBBLY", "JALLIKATTU SODA"];
  return (
    <div className="bg-primary text-cream py-5 overflow-hidden border-y-4 border-saffron">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-3xl mx-8 flex items-center gap-8">
            {t} <span className="text-saffron">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const FLAVORS = [
  { name: "Classic Soda", tag: "Crystal Crisp", color: "oklch(0.92 0.05 220)", text: "oklch(0.3 0.1 230)", img: bottleGreen, accent: "Original since '46" },
  { name: "Rose Berry", tag: "Sweet & Floral", color: "oklch(0.78 0.18 18)", text: "oklch(0.99 0 0)", img: bottleRed, accent: "Bestseller" },
  { name: "Mango Tango", tag: "Sun-ripe Burst", color: "oklch(0.82 0.17 75)", text: "oklch(0.25 0.1 40)", img: bottleRed, accent: "Summer fave" },
  { name: "Lemon Storm", tag: "Zesty Punch", color: "oklch(0.88 0.16 110)", text: "oklch(0.25 0.1 100)", img: bottleGreen, accent: "Bold zing" },
  { name: "Kala Khatta", tag: "Tangy Twist", color: "oklch(0.32 0.08 320)", text: "oklch(0.95 0.05 90)", img: bottleRed, accent: "Street legend" },
  { name: "Jeera Masala", tag: "Spice Spark", color: "oklch(0.45 0.1 60)", text: "oklch(0.95 0.05 90)", img: bottleGreen, accent: "Desi classic" },
];

function Flavors() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, 1 - r.top / window.innerHeight));
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="flavors" ref={ref} className="relative py-28 bg-cream overflow-hidden">
      <div
        className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-saffron/30 blur-3xl"
        style={{ transform: `translateY(${progress * -80}px)` }}
      />
      <div
        className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-leaf/30 blur-3xl"
        style={{ transform: `translateY(${progress * 60}px)` }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.4em] text-secondary font-bold mb-3">★ OUR LINEUP ★</div>
          <h2 className="font-display text-5xl md:text-7xl text-primary">SIX FLAVORS, ONE LEGEND</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">From the original 1946 fizz to bold modern remixes — pick your pop.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLAVORS.map((f, i) => (
            <article
              key={f.name}
              className="group relative rounded-3xl overflow-hidden p-8 h-96 flex flex-col justify-between shadow-xl hover:scale-[1.03] transition-transform duration-500 cursor-pointer"
              style={{
                backgroundColor: f.color,
                color: f.text,
                transform: `translateY(${(1 - progress) * (i % 2 === 0 ? 60 : 30)}px)`,
                transition: "transform 0.6s cubic-bezier(0.2, 0.9, 0.3, 1.1)",
              }}
            >
              <div className="absolute inset-0 opacity-30">
                <Bubbles count={8} />
              </div>
              <div className="relative">
                <div className="text-[10px] tracking-[0.3em] opacity-80">{f.accent.toUpperCase()}</div>
                <h3 className="font-display text-4xl mt-2">{f.name}</h3>
                <p className="opacity-80 mt-1 text-sm">{f.tag}</p>
              </div>
              <img
                src={f.img}
                alt={f.name}
                className="absolute -right-6 -bottom-6 h-72 object-contain group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500"
              />
              <div className="relative font-bold text-sm flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-current animate-ping" />
                Sip the vibe →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  const y = useScrollY();
  return (
    <section id="story" className="relative py-32 overflow-hidden text-cream" style={{ background: "linear-gradient(180deg, oklch(0.42 0.16 25) 0%, oklch(0.25 0.1 30) 100%)" }}>
      <div className="absolute inset-0 opacity-20">
        <Bubbles count={20} />
      </div>
      <div
        className="absolute top-10 left-10 h-72 w-72 rounded-full bg-saffron/40 blur-3xl"
        style={{ transform: `translateY(${y * 0.05}px)` }}
      />
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px]" style={{ transform: `translateY(${(y - 1500) * -0.05}px)` }}>
          <img src={logo} alt="Jallikattu Soda Heritage" className="absolute inset-0 m-auto h-80 w-80 rounded-full object-cover ring-8 ring-saffron/60 shadow-2xl animate-float-mid" />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-saffron text-primary px-6 py-2 rounded-full font-display text-2xl tracking-wider">
            EST. 1946
          </div>
        </div>
        <div>
          <div className="text-xs tracking-[0.4em] text-saffron font-bold mb-3">★ HERITAGE ★</div>
          <h2 className="font-display text-5xl md:text-6xl">EIGHT DECADES OF FIZZ.</h2>
          <p className="mt-6 text-cream/80 text-lg leading-relaxed">
            Born in a small Tamil Nadu town in 1946, Jallikattu Soda was first bottled by hand — a humble fizz with a fierce name, after the brave bull-taming sport of our soil. Three generations later, our recipe still carries that same untamed spirit.
          </p>
          <p className="mt-4 text-cream/70 leading-relaxed">
            Real ingredients. Slow craft. Bottles that pop with the same satisfying hiss your grandfather knew. We never chased trends — we stayed true to the taste that built us.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[{n:"1946",l:"Founded"},{n:"3",l:"Generations"},{n:"100%",l:"Desi Craft"}].map(s => (
              <div key={s.n} className="rounded-2xl bg-cream/10 backdrop-blur p-4 text-center border border-cream/20">
                <div className="font-display text-3xl text-saffron">{s.n}</div>
                <div className="text-xs tracking-widest mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Crafted() {
  const y = useScrollY();
  const steps = [
    { n: "01", t: "Pure Source", d: "Mineral-rich water, triple-filtered." },
    { n: "02", t: "Slow Brew", d: "Hand-blended syrups, real fruit & spice." },
    { n: "03", t: "Big Fizz", d: "Carbonated to that perfect Jallikattu kick." },
    { n: "04", t: "Bottled Bold", d: "Sealed for that signature satisfying pop." },
  ];
  return (
    <section id="crafted" className="relative py-28 bg-background overflow-hidden">
      <div
        className="absolute top-1/2 -left-40 h-[600px] w-[600px] rounded-full bg-leaf/20 blur-3xl"
        style={{ transform: `translate(${y * 0.05}px, ${(y - 2500) * 0.1}px)` }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.4em] text-secondary font-bold mb-3">★ THE CRAFT ★</div>
          <h2 className="font-display text-5xl md:text-7xl text-primary">FIZZ, FOUR WAYS PERFECT</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="rounded-3xl bg-card border-2 border-border p-8 hover:border-secondary hover:-translate-y-2 transition-all shadow-md"
              style={{ transform: `translateY(${Math.max(0, (3000 - y) * 0.05 - i * 10)}px)` }}
            >
              <div className="font-display text-6xl text-saffron">{s.n}</div>
              <h3 className="font-display text-2xl text-primary mt-3">{s.t}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <Bubbles count={20} />
      <div className="relative max-w-4xl mx-auto px-6 text-center text-cream">
        <h2 className="font-display text-5xl md:text-7xl drop-shadow-lg">POP THE BOTTLE.<br/>JOIN THE LEGACY.</h2>
        <p className="mt-6 text-cream/90 max-w-xl mx-auto text-lg">
          Find Jallikattu Soda at a store near you, or partner with us to stock the legend.
        </p>
        <form className="mt-10 max-w-md mx-auto flex gap-2 bg-cream/10 backdrop-blur p-2 rounded-full border border-cream/30">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-transparent px-4 py-3 text-cream placeholder:text-cream/60 outline-none"
          />
          <button type="button" className="rounded-full bg-cream text-primary px-6 py-3 font-bold hover:scale-105 transition-transform">
            Notify Me
          </button>
        </form>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
          <div><div className="font-display text-2xl text-saffron">CALL</div><div>+91 98765 43210</div></div>
          <div><div className="font-display text-2xl text-saffron">EMAIL</div><div>hello@jallikattusoda.in</div></div>
          <div><div className="font-display text-2xl text-saffron">VISIT</div><div>Madurai, Tamil Nadu</div></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-cream py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-10 w-10 rounded-full" />
          <div className="font-display text-xl tracking-widest">JALLIKATTU SODA</div>
        </div>
        <div className="text-xs tracking-widest opacity-80">© 1946 — {new Date().getFullYear()} · BOTTLED IN TAMIL NADU WITH PRIDE</div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Flavors />
      <Story />
      <Crafted />
      <Gallery />
      <CTA />
      <ContactForm />
      <Footer />
      <Toaster richColors position="top-center" />
    </main>
  );
}
