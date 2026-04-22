"use client";

import { useState } from "react";

const contactInfo = [
  { label: "Email", value: "alex.rivera@footballvideo.com", href: "mailto:alex.rivera@footballvideo.com" },
  { label: "LinkedIn", value: "linkedin.com/in/alexrivera-video", href: "#" },
  { label: "Location", value: "Buffalo, NY / Remote", href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit handler
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <p className="text-[#d4af37] uppercase tracking-[0.4em] text-xs mb-4">
            Let&apos;s Connect
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
            Contact
          </h2>
          <div className="cinema-divider w-16 mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left — copy + info */}
          <div>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-12 max-w-md">
              Whether you&apos;re looking to build a program-defining video
              presence, produce a recruiting film that changes the game, or
              need a creative partner for your athletic department — let&apos;s talk.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-6 items-start">
                  <span className="text-[#d4af37] text-xs uppercase tracking-widest w-20 pt-0.5">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white/70 text-sm hover:text-[#d4af37] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white/70 text-sm">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
                Affiliated Programs
              </p>
              <div className="flex gap-6">
                <div className="text-white/50 text-sm font-semibold">
                  University at Buffalo
                  <span className="block text-white/25 text-xs font-normal">NCAA D1 · MAC</span>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-white/50 text-sm font-semibold">
                  Southern Utah University
                  <span className="block text-white/25 text-xs font-normal">NCAA D1 · Big Sky</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div>
            {submitted ? (
              <div className="border border-[#d4af37]/30 p-10 text-center">
                <p className="text-[#d4af37] text-2xl font-black uppercase tracking-wider mb-3">
                  Message Sent
                </p>
                <p className="text-white/50 text-sm">
                  Thanks for reaching out. I&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your Name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-white/40 text-xs uppercase tracking-widest mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, [field.id]: e.target.value }))
                      }
                      className="w-full bg-[#111] border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/40 text-xs uppercase tracking-widest mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="w-full bg-[#111] border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#d4af37] text-black text-sm font-bold uppercase tracking-widest hover:bg-[#e8c84a] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-white/20 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Alex Rivera. All rights reserved.
        </p>
        <p className="text-white/20 text-xs uppercase tracking-widest">
          Director of Football Video
        </p>
      </div>
    </section>
  );
}
