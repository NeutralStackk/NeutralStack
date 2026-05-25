import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarCheck,
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
  Workflow,
  X,
  XCircle,
} from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Goal", href: "/goal" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Process", href: "/process" },
  { label: "Comparison", href: "/comparison" },
];

const heroFeatures = ["Fast Launch", "Managed Platform", "Upgrade Anytime", "Websites + Mobile Apps"];

const goals = [
  {
    title: "Simpler launches",
    copy: "A guided path from business idea to a refined digital launch without complex development management.",
    icon: Rocket,
  },
  {
    title: "Smarter investment",
    copy: "Start with what creates value now, then add features and capacity as your business grows.",
    icon: BarChart3,
  },
  {
    title: "Ongoing confidence",
    copy: "Hosting, improvements, and maintenance remain supported after your website or app launches.",
    icon: ShieldCheck,
  },
];

const features = [
  {
    title: "Faster Launch Time",
    copy: "Focused workflows help your business go online in days or weeks rather than long, uncertain cycles.",
    icon: Rocket,
  },
  {
    title: "Pay As You Grow",
    copy: "Launch the essential experience first and add integrations or advanced features when you need them.",
    icon: BarChart3,
  },
  {
    title: "Fully Managed Delivery",
    copy: "Design, development, deployment, hosting support, and updates stay coordinated under one partner.",
    icon: Headphones,
  },
  {
    title: "Custom Feature Requests",
    copy: "From bookings to payments and internal workflows, we build functions aligned to your operations.",
    icon: Code2,
  },
  {
    title: "Websites + Mobile Apps",
    copy: "Deliver consistent experiences across desktop and mobile channels with one digital team.",
    icon: MonitorSmartphone,
  },
  {
    title: "Business-Focused Support",
    copy: "Clear communication and reliable guidance help you make confident decisions after launch.",
    icon: Building2,
  },
];

const services = [
  {
    title: "Business Websites",
    copy: "Credible, conversion-focused company websites that clearly present your business and build trust.",
    icon: Globe,
  },
  {
    title: "Portfolio Websites",
    copy: "Elegant portfolios and personal brand sites designed to make your work easy to discover.",
    icon: Sparkles,
  },
  {
    title: "E-commerce Websites",
    copy: "Modern storefront experiences that guide customers from discovery to confident purchase.",
    icon: ShoppingBag,
  },
  {
    title: "Booking Platforms",
    copy: "Appointment and reservation experiences that make it simple for customers to engage.",
    icon: CalendarCheck,
  },
  {
    title: "Admin Dashboards",
    copy: "Secure operational tools that organize business activity, customer data, and day-to-day workflows.",
    icon: BarChart3,
  },
  {
    title: "Mobile Apps",
    copy: "Mobile experiences that keep your services accessible and your customers connected.",
    icon: Smartphone,
  },
  {
    title: "Custom Features",
    copy: "Purpose-built forms, payments, portals, integrations, and automation for unique requirements.",
    icon: Code2,
  },
  {
    title: "Maintenance & Hosting",
    copy: "Performance monitoring, technical updates, hosting guidance, and support after launch.",
    icon: CloudCog,
  },
];

const process = [
  {
    title: "Share Your Business Idea",
    copy: "We learn your audience, offers, challenges, and what success should look like online.",
    outcome: "Clarity on goals and scope",
  },
  {
    title: "Plan The Right Solution",
    copy: "We recommend the website, app, features, and launch approach that fits your priorities.",
    outcome: "Practical delivery roadmap",
  },
  {
    title: "Design, Build & Launch",
    copy: "We turn the approved direction into a polished customer experience and deploy it reliably.",
    outcome: "A live premium experience",
  },
  {
    title: "Manage & Improve",
    copy: "We support maintenance, updates, new features, and future growth after your launch.",
    outcome: "Long-term digital partner",
  },
];

const values = [
  {
    title: "Business-first thinking",
    copy: "We evaluate technology through business impact: credibility, leads, customer service, and efficiency.",
    icon: Building2,
  },
  {
    title: "Premium craft",
    copy: "Every screen and interaction is shaped to make your brand feel modern, clear, and trustworthy.",
    icon: Sparkles,
  },
  {
    title: "Long-term partnership",
    copy: "NeutralStack remains available as your requirements mature, rather than disappearing after delivery.",
    icon: Headphones,
  },
];

const traditional = [
  "One-time delivery with limited continuity",
  "Maintenance and hosting decisions fall to you",
  "Fixed scope makes new needs harder to add",
  "Multiple vendors may be needed for apps and websites",
  "Timelines can become unclear as complexity increases",
  "Scaling often means beginning a new project",
];

const modern = [
  "Long-term managed digital solution",
  "Hosting, updates, and improvements supported by us",
  "Flexible feature upgrades as your business develops",
  "Websites and mobile apps under one partner",
  "Focused planning and faster delivery",
  "Designed to grow with your business",
];

function BrandMark({ compact = false }) {
  return (
    <span className="flex items-center gap-3">
      <span className="brand-mark">
        <Layers3 className="relative z-10 h-5 w-5 text-white" />
      </span>
      {!compact && (
        <span className="text-xl font-semibold tracking-tight text-white">
          Neutral<span className="gradient-text">Stack</span>
        </span>
      )}
    </span>
  );
}

function Button({ children, href = "/contact", secondary = false, className = "" }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition duration-300 ${
        secondary
          ? "border border-white/15 bg-white/[0.04] text-white hover:border-electric/50 hover:bg-white/[0.08]"
          : "brand-button text-white shadow-glow hover:-translate-y-0.5"
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
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {copy && <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">{copy}</p>}
    </div>
  );
}

function Navbar({ currentPath }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#070c19]/78 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="/" aria-label="NeutralStack home">
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link ${currentPath === link.href ? "active" : ""}`}
            >
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
        <nav className="mobile-menu border-t border-white/10 px-5 pb-6 pt-3 lg:hidden" aria-label="Mobile navigation">
          <a href="/" onClick={() => setOpen(false)} className={`mobile-link ${currentPath === "/" ? "active" : ""}`}>
            Home
          </a>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`mobile-link ${currentPath === link.href ? "active" : ""}`}
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

function PageHero({ eyebrow, title, accent, copy, children }) {
  return (
    <section className="page-hero relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="hero-grid absolute inset-0 opacity-55" />
      <div className="brand-orb absolute left-1/2 top-28 h-80 w-80 -translate-x-1/2 rounded-full" />
      <div className="page-enter relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">{eyebrow}</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title} {accent && <span className="gradient-text">{accent}</span>}
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">{copy}</p>
        {children}
      </div>
    </section>
  );
}

function LogoStatement() {
  return (
    <div className="logo-statement glass-card mx-auto mt-14 flex max-w-4xl flex-col items-center gap-6 rounded-3xl px-6 py-8 sm:flex-row sm:text-left">
      <BrandMark compact />
      <div>
        <p className="font-semibold text-white">Neutral foundation. Powerful stack.</p>
        <p className="mt-2 text-sm leading-7 text-slate-400">
          Our layered mark represents the connected design, technology, and support that help businesses scale
          confidently online.
        </p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-32 lg:pt-32">
      <div className="hero-grid absolute inset-0 opacity-50" />
      <div className="brand-orb absolute -left-48 top-40 h-[420px] w-[420px] rounded-full" />
      <div className="brand-orb absolute right-0 top-24 h-[420px] w-[420px] rounded-full" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="page-enter">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-4 py-2 text-sm text-blue-300">
            <Sparkles className="h-4 w-4" />
            Premium digital experiences for modern businesses
          </div>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.8rem] xl:text-[4.1rem]">
            Build Your Business Online - <span className="gradient-text">Faster Than Ever.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Premium websites and mobile apps without the traditional development hassle. From strategy to support,
            NeutralStack gives your business one accountable digital partner.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
            {heroFeatures.map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                {item}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button>Contact Us</Button>
            <Button href="/services" secondary>
              Explore Services
            </Button>
          </div>
        </div>

        <div className="hero-visual relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-violet/20 to-electric/20 blur-3xl animate-pulse-soft" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-2 shadow-violet backdrop-blur-xl sm:p-3">
            <img
              src="/hero-neutralstack.png"
              alt="Premium website and mobile app concept presented on laptop and phone"
              className="aspect-[1.72/1] w-full rounded-[1.45rem] object-cover"
            />
            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#0d1428]/75 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl">
              Digital Growth Ecosystem
            </div>
          </div>
          <div className="floating-badge glass-card absolute -bottom-7 left-4 flex items-center gap-3 rounded-2xl p-4 sm:-left-7 sm:p-5">
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
            {services.map((service) => (
              <option key={service.title}>{service.title}</option>
            ))}
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
        className="brand-button mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-65 sm:w-auto"
      >
        <Send className="h-5 w-5" />
        {submitting ? "Sending..." : "Contact Us"}
      </button>
    </form>
  );
}

function CtaBanner({ title = "Ready to build your digital presence?", copy = "Tell us what your business needs and we will guide you toward a practical launch plan." }) {
  return (
    <section className="pb-24 pt-6 sm:pb-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="cta-panel reveal rounded-[2rem] px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">{copy}</p>
          <Button className="mt-9">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionIntro
            eyebrow="One Digital Partner"
            title="Build, launch, and grow without technical friction"
            copy="NeutralStack brings the essentials of an excellent online business together: premium design, modern development, mobile-ready delivery, and dependable ongoing support."
            centered
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {goals.map(({ title, copy, icon: Icon }, index) => (
              <article key={title} className="glass-card reveal rounded-2xl p-7" style={{ animationDelay: `${index * 90}ms` }}>
                <div className="mb-6 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="font-sans text-xl font-semibold text-white">{title}</h2>
                <p className="mt-3 leading-7 text-slate-400">{copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/why-us" secondary>Discover Why NeutralStack</Button>
          </div>
        </div>
      </section>
      <section className="section-spacing pt-4">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionIntro
            eyebrow="What We Build"
            title="Web and mobile services designed for real businesses"
            copy="Launch a polished website, customer app, commerce experience, or internal workflow with a team focused on clarity and measurable value."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {services.slice(0, 4).map(({ title, copy, icon: Icon }) => (
              <article key={title} className="service-card rounded-2xl p-5">
                <Icon className="mb-3 h-5 w-5 text-blue-400" />
                <h2 className="font-sans font-medium text-white">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button href="/services">View All Services</Button>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NeutralStack"
        title="A digital partner built for businesses ready to"
        accent="move forward."
        copy="NeutralStack helps modern businesses establish, improve, and scale their online presence through premium websites, mobile applications, and ongoing technical support."
      >
        <LogoStatement />
      </PageHero>
      <section className="section-spacing">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <SectionIntro
            eyebrow="Who We Are"
            title="A simpler way to build with technology"
            copy="Many businesses need stronger digital experiences but do not want the uncertainty and coordination of traditional development. NeutralStack exists to remove that friction."
          />
          <div className="glass-card reveal rounded-3xl p-7 sm:p-10">
            <p className="text-lg leading-9 text-slate-300">
              We create web and mobile experiences that reflect the quality of your business, support customers, and
              remain manageable after launch. Instead of delivering a project and disappearing, we provide a digital
              foundation that can improve over time.
            </p>
            <p className="mt-6 text-lg leading-9 text-slate-300">
              Our aim is straightforward: modern technology should feel useful and understandable to business owners,
              not like another complex operation they have to manage alone.
            </p>
          </div>
        </div>
      </section>
      <section className="section-spacing pt-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionIntro eyebrow="Our Principles" title="The standard behind every project" centered />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {values.map(({ title, copy, icon: Icon }, index) => (
              <article key={title} className="glass-card reveal rounded-2xl p-7" style={{ animationDelay: `${index * 90}ms` }}>
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
      <CtaBanner title="Build with a partner that stays involved." />
    </>
  );
}

function GoalPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Goal"
        title="Make digital transformation"
        accent="simple and practical."
        copy="Businesses should be able to access excellent websites and applications without assembling expensive teams or managing technical complexity."
      />
      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {goals.map(({ title, copy, icon: Icon }, index) => (
              <article key={title} className="glass-card reveal rounded-3xl p-8" style={{ animationDelay: `${index * 110}ms` }}>
                <Icon className="mb-7 h-8 w-8 text-blue-400" />
                <h2 className="font-sans text-xl font-semibold text-white">{title}</h2>
                <p className="mt-4 leading-7 text-slate-400">{copy}</p>
              </article>
            ))}
          </div>
          <div className="cta-panel mt-14 grid gap-8 rounded-3xl p-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:p-12">
            <SectionIntro
              eyebrow="Our Promise"
              title="Modern technology. Simple experience."
              copy="We translate business needs into scalable digital experiences with direct communication, clear priorities, and support that continues after launch."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {["Clear planning", "Premium delivery", "Managed technology", "Flexible upgrades"].map((item) => (
                <span key={item} className="glass-card flex items-center gap-3 rounded-xl p-4 text-white">
                  <CheckCircle2 className="h-5 w-5 text-blue-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Digital solutions designed to"
        accent="move business."
        copy="From premium company websites to mobile experiences and custom platforms, NeutralStack builds technology your customers can trust and your team can grow with."
      />
      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, copy, icon: Icon }, index) => (
              <article key={title} className="service-card reveal rounded-2xl p-6" style={{ animationDelay: `${(index % 4) * 75}ms` }}>
                <Icon className="mb-5 h-6 w-6 text-blue-400" />
                <h2 className="font-sans text-lg font-semibold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">{copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {["Strategy & UI Design", "Development & Deployment", "Maintenance & Growth"].map((title, index) => (
              <div key={title} className="glass-card rounded-2xl p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">0{index + 1}</p>
                <h2 className="mt-4 font-sans text-xl font-semibold text-white">{title}</h2>
                <p className="mt-3 leading-7 text-slate-400">
                  {[
                    "Shape a clear solution, visual direction, and customer journey before development begins.",
                    "Build, test, and launch an experience engineered for responsive performance and stability.",
                    "Continue with reliable support, upgrades, improvements, and technical guidance.",
                  ][index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title="Need a digital solution built around your business?" />
    </>
  );
}

function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why NeutralStack"
        title="Built for companies that want"
        accent="speed and ownership."
        copy="A good digital partner should simplify delivery, remain accountable, and give your business room to evolve. That is the difference NeutralStack is designed to provide."
      />
      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, copy, icon: Icon }, index) => (
              <article key={title} className="glass-card reveal rounded-2xl p-7" style={{ animationDelay: `${(index % 3) * 90}ms` }}>
                <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-violet/25 to-blue-500/15 p-3 text-blue-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="font-sans text-xl font-semibold text-white">{title}</h2>
                <p className="mt-3 leading-7 text-slate-400">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title="Choose a team that grows with the work." />
    </>
  );
}

function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="A clear process from idea to"
        accent="lasting growth."
        copy="Our process is built to keep decisions clear, timelines focused, and your digital experience supported after it becomes part of your business."
      />
      <section className="section-spacing">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="space-y-5">
            {process.map(({ title, copy, outcome }, index) => (
              <article key={title} className="process-row reveal grid gap-5 rounded-3xl p-6 sm:grid-cols-[72px_1fr_auto] sm:items-center sm:p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-blue-600 text-lg font-semibold text-white shadow-glow">
                  0{index + 1}
                </span>
                <div>
                  <h2 className="font-sans text-xl font-semibold text-white">{title}</h2>
                  <p className="mt-2 leading-7 text-slate-400">{copy}</p>
                </div>
                <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                  {outcome}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title="Start with an idea. Launch with confidence." />
    </>
  );
}

function ComparisonPage() {
  return (
    <>
      <PageHero
        eyebrow="Comparison"
        title="Traditional delivery versus a"
        accent="managed partner."
        copy="A launch should begin the value of your digital investment, not leave you alone with maintenance, hosting, and the next feature request."
      />
      <section className="section-spacing">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-700/40 bg-slate-900/45 p-6 sm:p-9">
              <p className="mb-8 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Traditional Freelancer</p>
              <div className="space-y-5">
                {traditional.map((item) => (
                  <p key={item} className="flex items-start gap-3 text-slate-400">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-slate-600" />
                    {item}
                  </p>
                ))}
              </div>
            </article>
            <article className="comparison-premium rounded-3xl p-[1px]">
              <div className="h-full rounded-[calc(1.5rem-1px)] bg-[#0b142c]/95 p-6 sm:p-9">
                <p className="mb-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                  <Layers3 className="h-4 w-4" />
                  NeutralStack
                </p>
                <div className="space-y-5">
                  {modern.map((item) => (
                    <p key={item} className="flex items-start gap-3 font-medium text-white">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          </div>
          <p className="mt-12 text-center text-2xl font-medium text-white">
            Not just development. <span className="gradient-text">A complete business ecosystem.</span>
          </p>
        </div>
      </section>
      <CtaBanner title="Replace technical stress with managed progress." />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Tell us what you want to"
        accent="build next."
        copy="Share your business idea, existing challenge, or upcoming launch. We will review your needs and respond with the right next conversation."
      />
      <section className="pb-24 pt-6 sm:pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <aside className="space-y-5">
            <div className="cta-panel rounded-3xl p-7">
              <h2 className="font-sans text-2xl font-semibold text-white">Start a project</h2>
              <p className="mt-4 leading-8 text-slate-300">
                Provide a few details and our inquiry notification is sent securely to the NeutralStack team.
              </p>
              <p className="mt-6 flex items-center gap-3 text-sm text-slate-300">
                <Mail className="h-5 w-5 text-blue-400" />
                adminneutralstack@gmail.com
              </p>
            </div>
            {["Fast response", "Flexible project scope", "Managed after launch"].map((item) => (
              <p key={item} className="glass-card flex items-center gap-3 rounded-xl p-4 text-white">
                <Check className="h-5 w-5 text-blue-400" />
                {item}
              </p>
            ))}
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#070c19]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.25fr_1fr_0.9fr]">
        <div>
          <a href="/" aria-label="NeutralStack home">
            <BrandMark />
          </a>
          <p className="mt-4 max-w-sm leading-7 text-slate-400">
            Premium websites and mobile apps for modern businesses, built and managed by a long-term digital partner.
          </p>
        </div>
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">Pages</p>
          <div className="grid grid-cols-2 gap-y-3">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-slate-400 transition hover:text-white">
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

const routes = {
  "/": HomePage,
  "/about": AboutPage,
  "/goal": GoalPage,
  "/services": ServicesPage,
  "/why-us": WhyUsPage,
  "/process": ProcessPage,
  "/comparison": ComparisonPage,
  "/contact": ContactPage,
};

const pageTitles = {
  "/": "NeutralStack | Premium Websites and Mobile Apps",
  "/about": "About Us | NeutralStack",
  "/goal": "Our Goal | NeutralStack",
  "/services": "Services | NeutralStack",
  "/why-us": "Why NeutralStack | NeutralStack",
  "/process": "How It Works | NeutralStack",
  "/comparison": "NeutralStack vs Traditional Development | NeutralStack",
  "/contact": "Contact Us | NeutralStack",
};

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const CurrentPage = routes[path] || HomePage;

  useEffect(() => {
    document.title = pageTitles[path] || pageTitles["/"];
  }, [path]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070c19] text-slate-100">
      <Navbar currentPath={path} />
      <main>
        <CurrentPage />
      </main>
      <Footer />
    </div>
  );
}
