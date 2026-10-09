"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dog,
  Cat,
  Rabbit,
  Bone,
  Footprints,
  Droplets,
  Stethoscope,
  Moon,
  Heart,
  Home,
  Syringe,
  Sparkles,
  PawPrint,
  Check,
  X,
  Carrot,
  ShieldCheck,
  Scissors,
  ArrowRight,
} from "lucide-react";

/* ---------------- DATA ---------------- */
const SPECIES = [
  { id: "dogs", label: "Dogs", icon: Dog },
  { id: "cats", label: "Cats", icon: Cat },
  { id: "rabbits", label: "Rabbits", icon: Rabbit },
];

const TIPS = {
  dogs: [
    { icon: Footprints, title: "Daily exercise", text: "Most adult dogs need 30–60 minutes of walks and play every day. Puppies need shorter, more frequent sessions." },
    { icon: Bone, title: "Steady meals", text: "Feed measured portions twice a day at the same times. Switch foods slowly over 7–10 days to avoid tummy upset." },
    { icon: Stethoscope, title: "Vet check in week one", text: "Book a health check, vaccinations, and parasite prevention within the first week of adoption." },
    { icon: ShieldCheck, title: "ID & microchip", text: "Add a collar tag and register a microchip with your current phone number before the first outing." },
    { icon: Heart, title: "Reward-based training", text: "Treats and praise build trust faster than scolding. Keep sessions short, 5–10 minutes at a time." },
    { icon: Sparkles, title: "Teeth & coat", text: "Brush teeth several times a week and groom regularly. It also helps you spot lumps or skin problems early." },
  ],
  cats: [
    { icon: Home, title: "Safe room first", text: "Let your new cat settle in one quiet room for a few days, then open up the rest of the home gradually." },
    { icon: Droplets, title: "Fresh water & wet food", text: "Cats drink little on their own. Offer fresh water daily and add wet food to support kidney health." },
    { icon: Sparkles, title: "Litter box rules", text: "Provide one box per cat plus one extra. Keep it away from food, and scoop at least once a day." },
    { icon: Footprints, title: "Scratch & climb", text: "A sturdy scratching post and a high perch protect your sofa and keep your cat happy and confident." },
    { icon: Heart, title: "Play twice a day", text: "Use a wand toy for 10–15 minutes, morning and evening, to burn energy and prevent boredom." },
    { icon: Syringe, title: "Yearly check-ups", text: "Keep vaccines, deworming, and flea control up to date. Spaying or neutering is strongly recommended." },
  ],
  rabbits: [
    { icon: Carrot, title: "Hay is everything", text: "Unlimited fresh hay should make up most of the diet, with a small portion of leafy greens and a few pellets." },
    { icon: Home, title: "Room to hop", text: "Rabbits need a large enclosure plus several hours of supervised free-roam time every day." },
    { icon: Scissors, title: "Chew & trim", text: "Provide safe wood chews so teeth wear down naturally, and check nails regularly." },
    { icon: Stethoscope, title: "Find an exotic vet", text: "Not every vet treats rabbits. Locate one before you need it. Spaying or neutering improves health and behavior." },
    { icon: Heart, title: "Gentle handling", text: "Never lift a rabbit by the ears. Support its back and hindquarters, and keep it close to the ground." },
    { icon: Moon, title: "Calm & cool", text: "Rabbits overheat easily and dislike loud noise. Keep them in a quiet, shaded, well-ventilated spot." },
  ],
};

const CHECKLIST = {
  dogs: ["Morning walk", "Fresh water refill", "Two meals served", "Training & play session", "Evening cuddle time"],
  cats: ["Scoop the litter box", "Fresh water & wet food", "Wand-toy play (10 min)", "Quick brush or health check", "Evening cuddle time"],
  rabbits: ["Fresh hay topped up", "Fresh greens & water", "Free-roam time", "Clean the toilet corner", "Gentle bonding time"],
};

const STEPS = [
  { n: "01", title: "Meet & match", text: "Pick a pet that fits your space, schedule, and energy." },
  { n: "02", title: "Prepare home", text: "Set up food bowls, a bed, safe corners, and basic supplies." },
  { n: "03", title: "Welcome day", text: "Keep it calm and quiet, and let your pet explore at its own pace." },
  { n: "04", title: "Grow together", text: "Build routines, schedule vet visits, and enjoy the bond." },
];

const DOS = ["Give a 2–4 week settling-in period", "Keep a consistent daily routine", "Use positive, gentle training", "Keep vaccination records handy"];
const DONTS = ["Don't leave pets alone for long hours", "Don't feed chocolate, grapes, onions or xylitol", "Don't skip vet visits to save money", "Don't punish fear or accidents"];

/* ---------------- MOTION ---------------- */
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 16 } },
};

/* ---------------- COMPONENT ---------------- */
export default function CareGuide() {
  const [species, setSpecies] = useState("dogs");
  const [done, setDone] = useState({});

  const list = CHECKLIST[species];
  const checkedCount = list.filter((_, i) => done[`${species}-${i}`]).length;
  const progress = Math.round((checkedCount / list.length) * 100);

  return (
    <section className="relative overflow-hidden bg-[#FFF9F5] py-20 sm:py-28">
      {/* floating decorations */}
      <motion.div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-100/70 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#FF7A65]/15 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute text-[#FF7A65]/25"
          style={{ left: `${8 + i * 20}%`, top: `${12 + (i % 2) * 70}%` }}
          animate={{ y: [0, -14, 0], rotate: [-12, 12, -12] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        >
          <PawPrint className="h-8 w-8" />
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* ---------- Header ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF7A65]">
            <PawPrint className="h-4 w-4" /> Care Guide
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#1E293B] sm:text-5xl">
            Love is the start. <span className="text-[#FF7A65]">Care</span> is the journey.
          </h2>
          <p className="mt-4 text-base font-medium text-[#1E293B]/70 sm:text-lg">Simple, vet-informed tips to help your adopted friend feel safe, healthy, and truly at home.</p>
        </motion.div>

        {/* ---------- Species tabs ---------- */}
        <div className="mt-10 flex justify-center">
          <div className="relative flex gap-1 rounded-full border border-orange-100 bg-white p-1.5 shadow-sm">
            {SPECIES.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setSpecies(id)}
                className={`relative z-10 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-colors sm:px-6 ${
                  species === id ? "text-white" : "text-[#1E293B]/70 hover:text-[#1E293B]"
                }`}
              >
                {species === id && (
                  <motion.span
                    layoutId="species-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-[#FF7A65] shadow-lg shadow-[#FF7A65]/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ---------- Tip cards ---------- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={species}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {TIPS[species].map(({ icon: Icon, title, text }, i) => (
              <motion.article
                key={title}
                variants={item}
                whileHover={{ y: -8, rotate: i % 2 ? 0.8 : -0.8 }}
                className="group relative overflow-hidden rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#FF7A65]/10"
              >
                <span className="absolute -right-3 -top-3 text-7xl font-black text-orange-100/70 transition-colors group-hover:text-[#FF7A65]/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <motion.div
                  whileHover={{ rotate: [0, -12, 12, 0] }}
                  transition={{ duration: 0.5 }}
                  className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100/70 text-[#FF7A65]"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <h3 className="relative mt-4 text-lg font-bold text-[#1E293B]">{title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-[#1E293B]/70">{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ---------- Journey + Checklist ---------- */}
        <div className="mt-20 grid gap-8 lg:grid-cols-5">
          {/* Journey */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] bg-[#1E293B] p-7 text-white sm:p-9 lg:col-span-3"
          >
            <h3 className="text-2xl font-extrabold">Your adoption journey</h3>
            <p className="mt-1 text-sm text-white/60">Four gentle steps from first hello to forever home.</p>

            <div className="relative mt-8">
              <div className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-0.5 bg-white/10" />
              <motion.div
                className="absolute left-[19px] top-2 w-0.5 origin-top bg-[#FF7A65]"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                style={{ height: "calc(100% - 1rem)" }}
              />
              <ul className="space-y-7">
                {STEPS.map((s, i) => (
                  <motion.li
                    key={s.n}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 * i, duration: 0.5 }}
                    className="relative flex gap-5"
                  >
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF7A65] text-sm font-extrabold shadow-lg shadow-[#FF7A65]/40">
                      {s.n}
                    </span>
                    <div>
                      <h4 className="font-bold">{s.title}</h4>
                      <p className="mt-0.5 text-sm text-white/65">{s.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-orange-100 bg-orange-100/70 p-7 sm:p-9 lg:col-span-2"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-[#1E293B]">Today&apos;s care checklist</h3>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#FF7A65]">{progress}%</span>
            </div>

            <div className="mt-4 h-3 overflow-hidden rounded-full bg-white">
              <motion.div className="h-full rounded-full bg-[#FF7A65]" animate={{ width: `${progress}%` }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
            </div>

            <ul className="mt-5 space-y-2.5">
              {list.map((label, i) => {
                const key = `${species}-${i}`;
                const on = !!done[key];
                return (
                  <li key={key}>
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setDone((d) => ({ ...d, [key]: !d[key] }))}
                      className={`flex w-full items-center gap-3 rounded-2xl bg-white px-4 py-3 text-left text-sm font-semibold transition-colors ${
                        on ? "text-[#1E293B]/40 line-through" : "text-[#1E293B]"
                      }`}
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                          on ? "border-[#FF7A65] bg-[#FF7A65] text-white" : "border-[#1E293B]/20"
                        }`}
                      >
                        <AnimatePresence>
                          {on && (
                            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                              <Check className="h-3.5 w-3.5" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </span>
                      {label}
                    </motion.button>
                  </li>
                );
              })}
            </ul>

            <AnimatePresence>
              {progress === 100 && (
                <motion.p
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-center text-sm font-bold text-[#FF7A65]"
                >
                  🐾 Amazing! Your pet is happy and cared for today.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ---------- Do / Don't ---------- */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            { title: "Do", list: DOS, icon: Check, tone: "bg-emerald-50 text-emerald-600", border: "border-emerald-100" },
            { title: "Don't", list: DONTS, icon: X, tone: "bg-rose-50 text-rose-500", border: "border-rose-100" },
          ].map(({ title, list: l, icon: Icon, tone, border }) => (
            <motion.div key={title} variants={item} className={`rounded-3xl border ${border} bg-white p-6`}>
              <h3 className="text-lg font-extrabold text-[#1E293B]">{title}</h3>
              <ul className="mt-4 space-y-3">
                {l.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm font-medium text-[#1E293B]/75">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${tone}`}>
                      <Icon className="h-3 w-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* ---------- CTA ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-14 overflow-hidden rounded-[2rem] bg-[#FF7A65] px-6 py-10 text-center text-white sm:px-12"
        >
          <motion.div className="absolute -left-6 -top-6 opacity-20" animate={{ rotate: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity }}>
            <PawPrint className="h-28 w-28" />
          </motion.div>
          <motion.div className="absolute -bottom-8 -right-4 opacity-20" animate={{ rotate: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity }}>
            <PawPrint className="h-32 w-32" />
          </motion.div>
          <h3 className="relative text-2xl font-extrabold sm:text-3xl">Ready to change a life?</h3>
          <p className="relative mx-auto mt-2 max-w-md text-sm font-medium text-white/90">Thousands of loving pets are waiting for someone like you.</p>
          <motion.a
            href="/pets"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-[#1E293B] px-7 py-3 text-sm font-bold text-white shadow-xl"
          >
            Meet adoptable pets <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
