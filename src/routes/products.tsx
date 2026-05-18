import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import bottleRed from "@/assets/bottle-red.png";
import bottleGreen from "@/assets/bottle-green.png";
import logo from "@/assets/logo.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Jallikattu Soda" },
      { name: "description", content: "Explore the full Jallikattu Soda lineup: six bold flavors crafted in Tamil Nadu since 1946." },
      { property: "og:title", content: "Products — Jallikattu Soda" },
      { property: "og:description", content: "Six bold flavors. One legendary fizz. Since 1946." },
    ],
  }),
  component: ProductsPage,
});

const PRODUCTS = [
  { name: "Classic Soda", tag: "Crystal Crisp", note: "Original since 1946", desc: "The fizz that started it all — clean, sharp, unapologetic.", size: "300 ml", img: bottleGreen, color: "oklch(0.62 0.19 145)", text: "oklch(0.99 0 0)" },
  { name: "Rose Berry", tag: "Sweet & Floral", note: "Bestseller", desc: "Rose petals meet wild berry — a romance in every sip.", size: "300 ml", img: bottleRed, color: "oklch(0.78 0.18 18)", text: "oklch(0.99 0 0)" },
  { name: "Mango Tango", tag: "Sun-ripe Burst", note: "Summer fave", desc: "Alphonso-rich pulp, bottled with monsoon-day energy.", size: "300 ml", img: bottleRed, color: "oklch(0.82 0.17 75)", text: "oklch(0.25 0.1 40)" },
  { name: "Lemon Storm", tag: "Zesty Punch", note: "Bold zing", desc: "Hand-squeezed lemon, a pinch of salt, all the thunder.", size: "300 ml", img: bottleGreen, color: "oklch(0.88 0.16 110)", text: "oklch(0.25 0.1 100)" },
  { name: "Kala Khatta", tag: "Tangy Twist", note: "Street legend", desc: "That nostalgic gola flavor — now in a bold bottle.", size: "300 ml", img: bottleRed, color: "oklch(0.32 0.08 320)", text: "oklch(0.95 0.05 90)" },
  { name: "Jeera Masala", tag: "Spice Spark", note: "Desi classic", desc: "Roasted cumin and rock salt — the after-meal hero.", size: "300 ml", img: bottleGreen, color: "oklch(0.45 0.1 60)", text: "oklch(0.95 0.05 90)" },
];

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

function ProductsPage() {
  const y = useScrollY();
  return (
    <main className="min-h-screen bg-cream">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-cream/70 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Jallikattu Soda" className="h-12 w-12 rounded-full object-cover ring-2 ring-secondary" />
            <div className="leading-tight">
              <div className="font-display text-xl text-primary tracking-wider">JALLIKATTU</div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground">SODA · SINCE 1946</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <Link to="/products" className="text-secondary" activeProps={{ className: "text-secondary" }}>Products</Link>
            <Link to="/" hash="story" className="hover:text-secondary transition-colors">Heritage</Link>
            <Link to="/" hash="contact-form" className="hover:text-secondary transition-colors">Contact</Link>
          </nav>
          <Link to="/" className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-bold hover:bg-berry transition-colors shadow-lg">
            ← Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-60 animate-spin-slow"
          style={{ background: "var(--gradient-sun)", transform: `translateY(${y * 0.3}px)` }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-cream text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-cream/90 px-4 py-1.5 text-xs font-bold text-primary tracking-widest mb-6">
            ★ THE LINEUP ★
          </div>
          <h1 className="font-display text-6xl md:text-8xl drop-shadow-lg">
            SIX BOTTLES.<br /><span className="text-saffron">ONE LEGEND.</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-cream/90 text-lg">
            Every flavor brewed with the same untamed spirit since 1946.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              className="group relative rounded-3xl overflow-hidden p-8 h-[460px] flex flex-col justify-between shadow-xl hover:scale-[1.03] transition-transform duration-500"
              style={{
                backgroundColor: p.color,
                color: p.text,
                transform: `translateY(${Math.max(0, (800 - y) * 0.05 + (i % 3) * 8)}px)`,
              }}
            >
              <div className="relative">
                <div className="text-[10px] tracking-[0.3em] opacity-80">{p.note.toUpperCase()}</div>
                <h2 className="font-display text-4xl mt-2">{p.name}</h2>
                <p className="opacity-80 mt-1 text-sm">{p.tag}</p>
                <p className="opacity-90 mt-4 text-sm leading-relaxed max-w-[60%]">{p.desc}</p>
              </div>
              <img
                src={p.img}
                alt={p.name}
                className="absolute -right-8 -bottom-4 h-80 object-contain group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500"
              />
              <div className="relative flex items-center justify-between font-bold text-sm">
                <span className="rounded-full bg-cream/20 backdrop-blur px-3 py-1 text-xs tracking-widest">{p.size}</span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-current animate-ping" />
                  In stock →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-primary text-cream text-center overflow-hidden border-y-4 border-saffron">
        <h2 className="font-display text-4xl md:text-6xl">FIND A STOCKIST NEAR YOU</h2>
        <p className="mt-4 text-cream/80">Or partner with us to carry the legend.</p>
        <Link to="/" hash="contact-form" className="inline-block mt-8 rounded-full bg-cream text-primary px-8 py-3 font-bold hover:scale-105 transition-transform shadow-xl">
          Get in Touch →
        </Link>
      </section>

      <footer className="bg-primary text-cream py-10 border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-10 rounded-full" />
            <div className="font-display text-xl tracking-widest">JALLIKATTU SODA</div>
          </div>
          <div className="text-xs tracking-widest opacity-80">© 1946 — {new Date().getFullYear()} · BOTTLED IN TAMIL NADU WITH PRIDE</div>
        </div>
      </footer>
    </main>
  );
}
