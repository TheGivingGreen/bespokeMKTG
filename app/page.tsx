"use client";

import { useState } from "react";

const githubPagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const disciplines = [
  {
    number: "01",
    title: "Brand Direction",
    copy: "Positioning, identity, voice, visual systems, and the decisions that shape how your brand enters the world.",
  },
  {
    number: "02",
    title: "Marketing Strategy",
    copy: "Clear direction for what you should say, where you should say it, and what is actually worth spending money on.",
  },
  {
    number: "03",
    title: "Social & Content",
    copy: "A social presence that sounds, looks, and behaves like your brand instead of a content calendar anyone could have posted.",
  },
  {
    number: "04",
    title: "Campaigns & Experiences",
    copy: "Creative concepts, promotions, events, activations, and real-world moments designed to make people feel something.",
  },
  {
    number: "05",
    title: "Websites & Digital",
    copy: "Websites and digital touchpoints that bring the strategy, identity, voice, and customer experience together.",
  },
];

const projects = [
  {
    number: "01",
    name: "The Giving Green",
    category: "Brand / Experience / Digital / Community",
    copy: "A charity golf event built into a complete brand, merchandise platform, digital experience, and growing community.",
    className: "giving-green",
    mark: "FORE GOOD",
  },
  {
    number: "02",
    name: "Oxford Roofing",
    category: "Strategy / Voice / Website",
    copy: "A trusted St. Louis roofing company repositioned through clearer strategy, stronger language, and a rebuilt digital presence.",
    className: "oxford",
    mark: "BUILT TO OUTLAST",
  },
  {
    number: "03",
    name: "Cornerstone Construction",
    category: "Identity / Digital / Market Presence",
    copy: "A construction company shaped into a cohesive identity across its website, social presence, business materials, and market presentation.",
    className: "cornerstone",
    mark: "FOUNDATION",
  },
  {
    number: "04",
    name: "Hospitality & Experiences",
    category: "Promotion / Activation / Participation",
    copy: "Thirty-plus years of building promotions, events, environments, and customer experiences that move people from attention to participation.",
    className: "hospitality",
    mark: "BE THERE",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <section className="hero" id="top">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="bespoke MKTG home">
            <span>bespoke</span> <strong>MKTG</strong>
          </a>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? "Close" : "Menu"} <span aria-hidden="true">↗</span>
          </button>

          <nav id="site-nav" className={menuOpen ? "site-nav is-open" : "site-nav"}>
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#system" onClick={() => setMenuOpen(false)}>Journal</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <span className="nav-plus" aria-hidden="true">+</span>
          </nav>
        </header>

        <p className="hero-rail">Independent creative agency / 2026</p>
        <span className="hero-cross hero-cross-left" aria-hidden="true">+</span>
        <span className="hero-cross hero-cross-top" aria-hidden="true">+</span>

        <div className="hero-grid">
          <h1>
            <span>Nothing about your</span>
            <span>brand gets recycled.</span>
          </h1>

          <div className="hero-copy">
            <p>
              <span>More than 30 years of experiential</span>
              <span>marketing and hospitality experience,</span>
              <span>focused directly on your brand.</span>
            </p>
            <a className="hero-cta" href="#approach">
              See how we work <span aria-hidden="true">⟶</span>
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <img src={`${githubPagesBasePath}/bespoke-sheep-lineup-transparent.png`} alt="" />
        </div>

        <span className="hero-corner" aria-hidden="true">⌟</span>
      </section>

      <section className="eyes-section" id="approach">
        <p className="eyes-eyebrow">
          <span>Senior direction.</span>
          <strong>Direct access.</strong>
        </p>

        <div className="eyes-layout">
          <h2>
            You get my
            <br />
            eyes on
            <br />
            everything.
          </h2>

          <div className="eyes-copy">
            <p>
              Most businesses can find people to make things. What they are
              missing is someone experienced enough to see the whole picture
              and keep every part moving in the same direction.
            </p>
            <p>
              That is where I come in. I oversee the brand, the voice, the
              creative, the social presence, and the marketing behind it. You
              get more than 30 years of judgment and creative direction applied
              directly to your business, without having to build an entire
              marketing department to get it.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-label light">
          <span>02 / What we do</span>
          <span>Connected by one point of view</span>
        </div>

        <div className="services-intro">
          <h2>IT ALL HAS TO<br />FEEL LIKE YOU.</h2>
          <div className="services-manifesto">
            <div className="services-drumbeat">
              <p>Brand direction. Feels like you.</p>
              <p>Marketing strategy. Feels like you.</p>
              <p>Social &amp; content. Feels like you.</p>
              <p>Campaigns &amp; experiences. Feels like you.</p>
              <p>Websites &amp; digital. Feels like you.</p>
            </div>
            <div className="services-declarations">
              <p className="services-thesis">The brand is yours. It should sound like it.</p>
              <p className="services-thesis">Where you spend says who you are. It should say you.</p>
            </div>
          </div>
        </div>

        <div className="discipline-list">
          {disciplines.map((discipline) => (
            <article className="discipline" key={discipline.number}>
              <span className="discipline-number">{discipline.number}</span>
              <h3>{discipline.title}</h3>
              <p>{discipline.copy}</p>
              <span className="discipline-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-label">
          <span>03 / Selected work</span>
          <span>Different answers by design</span>
        </div>

        <div className="work-intro">
          <h2>The work<br />speaks bespoke.</h2>
          <p>
            Different industries. Different challenges. Different answers.
            Every project begins with the business in front of us, then becomes
            something only that business could own.
          </p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className={`project ${project.className}`} key={project.number}>
              <div className="project-visual" aria-hidden="true">
                <span className="project-mark">{project.mark}</span>
                <span className="project-index">{project.number}</span>
                <span className="project-cross">+</span>
              </div>
              <div className="project-meta">
                <div>
                  <span>{project.number} / Case study</span>
                  <h3>{project.name}</h3>
                </div>
                <div>
                  <span>{project.category}</span>
                  <p>{project.copy}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <h3 className="work-close">
          The medium changes.
          <br />
          <span>The standard doesn&apos;t.</span>
        </h3>
      </section>

      <section className="system-section" id="system">
        <div className="section-label light">
          <span>04 / How we work</span>
          <span>Original without improvising</span>
        </div>

        <div className="system-head">
          <p className="eyebrow">The bespoke design operating system™</p>
          <h2>
            No templates.
            <br />
            <span>No guesswork.</span>
          </h2>
        </div>

        <div className="system-grid">
          <article>
            <span>01</span>
            <h3>See the whole picture</h3>
            <p>
              Before a single pixel gets touched, we run a deep brand
              discovery. The business, the audience, the competitors, the
              decisions already in play. The work starts with a 60-question
              process built specifically for you. Not a template. Not a form.
              A system designed to surface what makes you actually different.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>
              Own
              <br />
              Your answer
            </h3>
            <p>
              Everything that comes out of discovery gets reconciled into a
              single canonical document. Your brand voice, your rules, your
              vocabulary, what you never say, and who you are always talking
              to. This is the operating system. Every decision from here lives
              inside it.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Build it as one system</h3>
            <p>
              Identity, website, copy, content, campaigns. Built together so
              they behave like one brand. Not handed off to separate vendors
              who have never spoken to each other. One creative mind on all of
              it, start to finish.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Keep my eyes on it</h3>
            <p>
              The relationship does not end at launch. The brand intelligence
              we built together becomes the engine for everything that comes
              next. Content, campaigns, new channels, new products. The system
              keeps working because the foundation was built to last.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-sheep" aria-hidden="true">
          <img src={`${githubPagesBasePath}/bespoke-sheep-hero.png`} alt="" />
        </div>
        <div className="contact-content">
          <span className="contact-label">05 / Your move</span>
          <h2>
            <span>You didn&apos;t</span>
            <span>build all this</span>
            <span>to feel like</span>
            <em>everyone else.</em>
          </h2>
          <p className="contact-support">
            <span>You already know something isn&apos;t working.</span>
            <span>That&apos;s why you&apos;re here.</span>
          </p>
          <a href="mailto:ozzie@bespoke-mktg.com">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top">
          <span>bespoke</span> MKTG
        </a>
        <div>
          <span>Strategy / Creative Direction / Experience</span>
          <span>bespoke-mktg.com</span>
        </div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
