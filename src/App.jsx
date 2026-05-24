import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  CheckCircle2,
  CloudCog,
  Code2,
  Gauge,
  Globe,
  Headphones,
  Layers3,
  Mail,
  Menu,
  MonitorSmartphone,
  Rocket,
  Send,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  X,
  XCircle,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/about" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Services", href: "/#services" },
  { label: "Comparison", href: "/#comparison" },
  { label: "Contact", href: "/#contact" },
];

const heroFeatures = ["Fast Launch", "Managed Platform", "Upgrade Anytime", "Websites + Mobile Apps"];

const goals = [
  {
    title: "No complicated development cycles.",
    copy: "A direct, guided path from concept to a polished digital launch.",
    icon: Layers3,
  },
  {
    title: "No hiring expensive teams.",
    copy: "Access design, development, deployment, and support through one partner.",
    icon: ShieldCheck,
  },
  {
    title: "No maintenance stress.",
    copy: "We keep your digital presence stable, updated, and ready to evolve.",
    icon: CloudCog,
  },
];

const features = [
  {
    title: "Faster Launch Time",
    copy: "Go live in days, not months, with focused delivery built around your business priorities.",
    icon: Rocket,
  },
  {
    title: "Pay As You Grow",
    copy: "Begin with what matters today and add powerful capabilities as demand grows.",
    icon: BarChart3,
  },
  {
    title: "Fully Managed",
    copy: "Hosting, updates, maintenance, and technical guidance stay under one accountable team.",
    icon: Headphones,
  },
  {
    title: "Custom Feature Requests",
    copy: "Need bookings, payments, integrations, or an internal workflow? We build it.",
    icon: Code2,
  },
  {
    title: "Websites + Mobile Apps",
    copy: "Offer consistent, premium customer experiences across web and mobile.",
    icon: MonitorSmartphone,
  },
];

const traditional = [
  "One-time delivery",
  "Maintenance is your responsibility",
  "Fixed functionality",
  "Slow development cycles",
  "Separate teams for apps & websites",
  "Hard to scale",
];

const modern = [
  "Long-term managed solution",
  "Everything managed by us",
  "Flexible upgrades",
  "Faster deployment",
  "One complete platform",
  "Built for growth",
];

const services = [
  { title: "Business Websites", copy: "Credible, conversion-ready company websites.", icon: Globe },
  { title: "Portfolio Websites", copy: "Elegant digital showcases for your work and brand.", icon: Sparkles },
  { title: "E-commerce Websites", copy: "Online storefronts built to make purchasing simple.", icon: ShoppingBag },
  { title: "Booking Platforms", copy: "Smooth scheduling experiences for service businesses.", icon: CheckCircle2 },
  { title: "Admin Dashboards", copy: "Practical internal tools to manage operations.", icon: BarChart3 },
  { title: "Mobile Apps", copy: "Customer-facing mobile experiences for daily reach.", icon: Smartphone },
  { title: "Custom Features", copy: "Integrations and workflows shaped for your needs.", icon: Code2 },
  { title: "Maintenance & Hosting", copy: "Ongoing performance, updates, and dependable support.", icon: CloudCog },
];

const process = [
  {
    title: "Share Your Business Idea",
    copy: "Tell us about your audience, goals, current challenges, and the outcome you want online.",
  },
  {
    title: "Choose Your Plan",
    copy: "Select an approach that meets today’s needs while leaving room to add features later.",
  },
  {
    title: "We Build & Launch",
    copy: "We design, develop, review, and launch a refined digital experience with clear communication.",
  },
  {
    title: "We Manage Everything",
    copy: "Hosting, updates, maintenance, and improvements are handled by us after launch.",
  },
];

const values = [
  {
    title: "Business-first thinking",
    copy: "Technology is only valuable when it helps you earn trust, improve service, or operate more efficiently.",
    icon: Building2,
  },
  {
    title: "Premium craft",
    copy: "Every layout, interaction, and mobile experience is designed to make your brand feel credible and modern.",
    icon: Sparkles,
  },
  {
    title: "Long-term partnership",
    copy: "We stay involved beyond launch so your website or app can mature alongside the business.",
    icon: Headphones,
  },
];

function Button({ children, href = "/#contact", secondary = false, className = "" }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition duration-300 ${
        secondary
          ? "border border-white/15 bg-white/[0.04] text-white hover:border-electric/50 hover:bg-white/[0.08]"
          : "bg-gradient-to-r from-violet to-blue-600 text-white shadow-glow hover:-translate-y-0.5 hover:shadow-[0_0_48px_rgba(59,130,246,0.48)]"
      } ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function SectionIntro({ eyebrow, title, copy, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {copy && <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">{copy}</p>}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#080e1e]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/" className="flex items-center gap-3" aria-label="NeutralStack home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-electric shadow-glow">
            <Layers3 className="h-5 w-5 text-white" />
          </span>
          <span className="text-xl font-semibold tracking-tight text-white">
            Neutral<span className="text-blue-400">Stack</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <Button className="hidden lg:inline-flex">Contact Us</Button>

        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#080e1e] px-5 pb-6 pt-3 lg:hidden" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-slate-200 transition hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <Button className="mt-3 w-full">Contact Us</Button>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-32 lg:pt-32">
      <div className="hero-grid absolute inset-0 opacity-50" />
      <div className="absolute -left-56 top-40 h-[430px] w-[430px] rounded-full bg-violet/20 blur-[110px]" />
      <div className="absolute right-0 top-20 h-[460px] w-[460px] rounded-full bg-electric/15 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-4 py-2 text-sm text-blue-300">
            <Sparkles className="h-4 w-4" />
            Premium digital experiences for modern businesses
          </div>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.8rem] xl:text-[4.1rem]">
            Build Your Business Online -{" "}
            <span className="gradient-text">Faster Than Ever.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Premium websites &amp; mobile apps for modern businesses without the traditional development hassle.
            From planning through launch and support, one partner handles the technical work behind your growth.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
            {heroFeatures.map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                {item}
              </span>
            ))}
          </div>
          <p className="mt-6 text-lg font-medium text-white">You focus on growth. We handle the tech.</p>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <Button>Get Started</Button>
            <Button href="#services" secondary>
              Explore Services
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-violet/20 to-electric/20 blur-3xl animate-pulse-soft" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-2 shadow-violet backdrop-blur-xl sm:p-3">
            <img
              src="/hero-neutralstack.png"
              alt="Glowing premium website and mobile app concept displayed on laptop and phone"
              className="aspect-[1.72/1] w-full rounded-[1.45rem] object-cover"
            />
            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#0d1428]/75 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl">
              Website + Mobile Ecosystem
            </div>
          </div>
          <div className="glass-card absolute -bottom-7 left-4 flex items-center gap-3 rounded-2xl p-4 sm:-left-7 sm:p-5">
            <span className="rounded-xl bg-blue-500/15 p-3 text-blue-400">
              <Gauge className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-400">Launch ready</p>
              <p className="text-sm font-semibold text-white">Built for growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Goal() {
  return (
    <section id="goal" className="section-spacing relative">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="Our Goal"
            title="To simplify digital transformation for every business."
            copy="NeutralStack helps businesses launch scalable websites and apps with flexible plans that grow with their needs. We turn digital ideas into dependable customer experiences without making business owners manage developers, hosting, or ongoing upgrades."
          />
          <p className="mt-7 text-xl font-medium text-white">Modern technology. Simple experience.</p>
        </div>
        <div className="relative grid gap-4 sm:grid-cols-3">
          <div className="absolute left-[15%] right-[15%] top-14 hidden h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent sm:block" />
          {goals.map(({ title, copy, icon: Icon }) => (
            <div key={title} className="glass-card relative z-10 rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400 shadow-glow">
                <Icon className="h-6 w-6" />
              </div>
              <p className="text-base font-medium leading-7 text-white">{title}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
            </div>
          ))}
          <div className="sm:col-span-3">
            <div className="glass-card flex flex-wrap items-center justify-center gap-4 rounded-2xl px-5 py-4 text-sm text-slate-300">
              {[Globe, Smartphone, CloudCog, Headphones].map((Icon, index) => (
                <span key={index} className="flex items-center gap-4">
                  {index > 0 && <span className="hidden h-px w-8 bg-blue-400/40 sm:block" />}
                  <Icon className="h-5 w-5 text-blue-400" />
                </span>
              ))}
              <span className="font-medium text-white">One connected business ecosystem</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="section-spacing relative">
      <div className="absolute inset-x-0 top-1/3 h-72 bg-gradient-to-r from-violet/5 via-blue-500/10 to-violet/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="Why NeutralStack"
          title="Why Businesses Choose NeutralStack"
          copy="Traditional development often leaves businesses coordinating multiple specialists and handling technical decisions alone. NeutralStack combines speed, ownership, and ongoing support in one relationship."
          centered
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {features.map(({ title, copy, icon: Icon }, index) => (
            <article
              key={title}
              className={`glass-card group rounded-2xl p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-400/35 ${
                index < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-violet/25 to-blue-500/15 p-3 text-blue-300 transition group-hover:shadow-glow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section id="comparison" className="section-spacing">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="The Difference"
          title="Traditional Development vs NeutralStack"
          copy="A launch should be the beginning of a useful digital asset, not the point where technical responsibility is handed back to you."
          centered
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-700/40 bg-slate-900/45 p-6 sm:p-9">
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Traditional Freelancer</p>
            <div className="space-y-5">
              {traditional.map((item) => (
                <p key={item} className="flex items-center gap-3 text-slate-400">
                  <XCircle className="h-5 w-5 shrink-0 text-slate-600" />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="comparison-premium rounded-3xl p-[1px]">
            <div className="h-full rounded-[calc(1.5rem-1px)] bg-[#0b142c]/95 p-6 sm:p-9">
              <p className="mb-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                <Layers3 className="h-4 w-4" />
                NeutralStack
              </p>
              <div className="space-y-5">
                {modern.map((item) => (
                  <p key={item} className="flex items-center gap-3 font-medium text-white">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-11 text-center text-xl font-medium text-white">
          Not just development. <span className="gradient-text">A complete business ecosystem.</span>
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-spacing">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="What We Build"
          title="Digital services shaped around your business"
          copy="From your first online presence to a custom platform and mobile experience, we deliver the technology your customers expect."
          centered
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, copy, icon: Icon }) => (
            <div key={title} className="service-card rounded-2xl p-6">
              <Icon className="mb-4 h-6 w-6 shrink-0 text-blue-400" />
              <p className="font-medium text-slate-100">{title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="How It Works"
          title="A clear path from idea to launch"
          copy="You always know what is being built, why it matters, and what happens after your digital experience goes live."
          centered
        />
        <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-10 right-10 top-[2.15rem] hidden h-px bg-gradient-to-r from-violet/10 via-blue-400/50 to-violet/10 lg:block" />
          {process.map(({ title, copy }, index) => (
            <article key={title} className="relative rounded-2xl border border-white/[0.07] bg-[#0b1327]/50 p-6">
              <span className="relative z-10 mb-7 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet to-blue-600 text-sm font-semibold text-white shadow-glow">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-44">
          <div className="hero-grid absolute inset-0 opacity-50" />
          <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-violet/15 blur-[110px]" />
          <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">About NeutralStack</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Digital experiences built for businesses that want to{" "}
              <span className="gradient-text">move forward.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              NeutralStack is a digital service company helping modern businesses establish, improve, and scale their
              online presence through premium websites, mobile apps, and ongoing technical support.
            </p>
          </div>
        </section>

        <section className="section-spacing pt-8">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <SectionIntro
              eyebrow="Who We Are"
              title="A simpler way to build with technology"
              copy="Many businesses know they need better digital tools, but do not want the cost, uncertainty, or coordination involved in managing a traditional development project. NeutralStack exists to close that gap."
            />
            <div className="glass-card rounded-3xl p-7 sm:p-10">
              <p className="text-lg leading-9 text-slate-300">
                We create professional web and mobile experiences that reflect the quality of your business, serve
                your customers well, and remain manageable after launch. Instead of handing over a finished project
                and disappearing, we provide a foundation you can improve over time.
              </p>
              <p className="mt-6 text-lg leading-9 text-slate-300">
                Whether you need a company website, an e-commerce store, a booking experience, a custom dashboard, or
                a mobile application, our focus remains the same: clear communication, refined execution, and
                technology that supports real business goals.
              </p>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionIntro
              eyebrow="Our Principles"
              title="The standard behind every project"
              copy="NeutralStack combines thoughtful strategy with modern delivery, giving businesses a partner that can build today and support tomorrow."
              centered
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {values.map(({ title, copy, icon: Icon }) => (
                <article key={title} className="glass-card rounded-2xl p-7">
                  <div className="mb-6 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="font-sans text-xl font-semibold text-white">{title}</h2>
                  <p className="mt-4 leading-7 text-slate-400">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24 sm:pb-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="cta-panel rounded-[2rem] px-6 py-14 text-center sm:px-12">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let&apos;s build a stronger online business.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Tell NeutralStack about your goals and we will help you choose a practical, scalable digital solution.
              </p>
              <Button className="mt-9">Contact Us</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ContactForm() {
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setFormStatus({ type: "", message: "" });
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your message.");
      }

      form.reset();
      setFormStatus({ type: "success", message: data.message });
    } catch (error) {
      setFormStatus({ type: "error", message: error.message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="contact-form rounded-3xl p-5 sm:p-7" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-field">
          <span>Name *</span>
          <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
        </label>
        <label className="form-field">
          <span>Work Email *</span>
          <input name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
        </label>
        <label className="form-field">
          <span>Company</span>
          <input name="company" type="text" autoComplete="organization" placeholder="Business name" />
        </label>
        <label className="form-field">
          <span>Service Needed</span>
          <select name="service" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Business Website</option>
            <option>E-commerce Website</option>
            <option>Booking Platform</option>
            <option>Mobile App</option>
            <option>Custom Features</option>
            <option>Maintenance & Hosting</option>
          </select>
        </label>
      </div>
      <label className="form-field mt-5">
        <span>Project Details *</span>
        <textarea
          name="message"
          required
          maxLength="3000"
          rows="5"
          placeholder="Tell us what your business needs, what you want to launch, and any timeline in mind."
        />
      </label>
      <label className="hidden" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex="-1" autoComplete="off" />
      </label>
      {formStatus.message && (
        <p
          role="status"
          className={`mt-5 rounded-xl px-4 py-3 text-sm ${
            formStatus.type === "success"
              ? "border border-emerald-400/25 bg-emerald-400/10 text-emerald-200"
              : "border border-red-400/25 bg-red-400/10 text-red-200"
          }`}
        >
          {formStatus.message}
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet to-blue-600 px-8 py-4 font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] disabled:cursor-wait disabled:opacity-65 sm:w-auto"
      >
        <Send className="h-5 w-5" />
        {submitting ? "Sending..." : "Contact Us"}
      </button>
    </form>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="pb-24 pt-12 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="cta-panel relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-12 lg:py-16">
          <div className="absolute left-0 top-0 h-72 w-96 rounded-full bg-blue-500/20 blur-[90px]" />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">Start Today</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Ready To Go Digital?</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Launch your website or mobile app with NeutralStack. Share your idea and our team will contact you
              about the right path forward.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {["Fast", "Scalable", "Fully Managed"].map((item) => (
                <span key={item} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white">
                  <Check className="h-4 w-4 text-blue-400" />
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm text-slate-400">
              <Mail className="h-4 w-4 text-blue-400" />
              Inquiries are sent securely to adminneutralstack@gmail.com
            </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#070c19]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_0.8fr_0.9fr]">
        <div>
          <a href="/" className="flex items-center gap-3 text-xl font-semibold text-white">
            <Layers3 className="h-6 w-6 text-blue-400" />
            NeutralStack
          </a>
          <p className="mt-4 max-w-sm leading-7 text-slate-400">
            Premium websites and mobile apps for modern businesses, built and managed by a long-term digital partner.
          </p>
        </div>
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</p>
          <div className="space-y-3">
            {navLinks.slice(1).map((link) => (
              <a key={link.label} href={link.href} className="block text-sm text-slate-400 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">Contact</p>
          <p className="mb-5 text-sm leading-7 text-slate-400">Have an idea? Tell us what you need and receive a focused response.</p>
          <Button>Contact Us</Button>
        </div>
      </div>
      <div className="border-t border-white/[0.06] px-5 py-6 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} NeutralStack. All rights reserved.
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Goal />
        <WhyUs />
        <Comparison />
        <Services />
        <Process />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const isAboutPage = window.location.pathname.replace(/\/+$/, "") === "/about";

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070c19] text-slate-100">
      {isAboutPage ? <AboutPage /> : <HomePage />}
    </div>
  );
}
