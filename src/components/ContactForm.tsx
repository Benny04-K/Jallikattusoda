import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email").max(255, "Email too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message too long"),
});

type Form = z.infer<typeof schema>;

export function ContactForm() {
  const [form, setForm] = useState<Form>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof Form, string>> = {};
      result.error.issues.forEach((i) => {
        const k = i.path[0] as keyof Form;
        if (!fieldErrors[k]) fieldErrors[k] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent! We'll be in touch soon.");
      setForm({ name: "", email: "", message: "" });
      setSubmitting(false);
    }, 600);
  };

  const update = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact-form" className="relative py-28 bg-cream overflow-hidden">
      <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-leaf/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-saffron/30 blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.4em] text-secondary font-bold mb-3">★ GET IN TOUCH ★</div>
          <h2 className="font-display text-5xl md:text-6xl text-primary">DROP US A FIZZ</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Stockists, partnerships, or just a love letter to the bubbles — we read every message.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-card border-2 border-border p-8 md:p-10 shadow-xl space-y-5"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block text-xs font-bold tracking-widest text-primary mb-2">
              YOUR NAME
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={update("name")}
              maxLength={100}
              className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none focus:border-secondary transition-colors"
              placeholder="Karthik R."
            />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold tracking-widest text-primary mb-2">
              EMAIL
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={update("email")}
              maxLength={255}
              className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none focus:border-secondary transition-colors"
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold tracking-widest text-primary mb-2">
              MESSAGE
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={update("message")}
              maxLength={1000}
              rows={5}
              className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none focus:border-secondary transition-colors resize-none"
              placeholder="Tell us what's on your mind..."
            />
            <div className="mt-1 flex justify-between text-xs">
              <span className="text-destructive">{errors.message}</span>
              <span className="text-muted-foreground">{form.message.length}/1000</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-primary text-primary-foreground px-7 py-4 font-bold tracking-widest hover:bg-berry transition-colors shadow-lg disabled:opacity-60"
          >
            {submitting ? "SENDING..." : "SEND MESSAGE →"}
          </button>
        </form>
      </div>
    </section>
  );
}
