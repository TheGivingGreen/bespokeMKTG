"use client";

import { useState } from "react";

const githubPagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Booking goes to email for now (Ozzie, Nov 25, 2026). Swap for a scheduling link later.
const bookingHref =
  "mailto:ozzie@bespoke-mktg.com?subject=" +
  encodeURIComponent("Promotional Director walkthrough");

const processSteps = [
  {
    number: "01",
    title: "Brand Extraction",
    copy: "We pull the real personality, audience, strengths and opportunities out of the business you already built.",
  },
  {
    number: "02",
    title: "Night Identity",
    copy: "Each selected night gets a name, a look and a platform plan. People know what is happening and why they should be there. Night Identities are established during the Promotional System Build. The monthly retainer promotes established nights.",
  },
  {
    number: "03",
    title: "Hero Library Shoot",
    copy: "A separately priced shoot builds the core photo and video library your venue needs to promote its food, drinks, crowd and nights.",
  },
  {
    number: "04",
    title: "30 Day Calendar",
    copy: "The first month is mapped before the work starts moving. Every post, promotion, update and call to action has a job.",
  },
];

const monthlyDeliverables = [
  "Social and content",
  "Weekly night promotion",
  "Website updates",
  "Ticketing and RSVP setup, available on select tiers",
  "A chatbot for reservations or catering, available as a separately priced add on",
];

export default function PromotionalDirectorPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="pd-page">
      <section className="pd-hero" id="top">
        <header className="site-header">
          <a
            className="wordmark"
            href={`${githubPagesBasePath}/`}
            aria-label="bespoke MKTG home"
          >
            <span>bespoke</span> <strong>MKTG</strong>
          </a>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? "Close" : "Menu"}
            <span className="ui-arrow ui-arrow-diagonal" aria-hidden="true" />
          </button>

          <nav id="site-nav" className={menuOpen ? "site-nav is-open" : "site-nav"}>
            <a href="#top" onClick={() => setMenuOpen(false)}>Promotional Director</a>
            <a href={`${githubPagesBasePath}/#work`} onClick={() => setMenuOpen(false)}>Work</a>
            <a href={`${githubPagesBasePath}/#approach`} onClick={() => setMenuOpen(false)}>Approach</a>
            <a href={`${githubPagesBasePath}/#services`} onClick={() => setMenuOpen(false)}>Services</a>
            <a href={`${githubPagesBasePath}/#contact`} onClick={() => setMenuOpen(false)}>Contact</a>
            <span className="nav-plus" aria-hidden="true">+</span>
          </nav>
        </header>

        <div className="pd-hero-inner">
          <p className="pd-kicker">For independent bars, clubs and restaurants</p>
          <h1>
            <span>Your Director</span>
            <span>of Promotions.</span>
            <em>Without the salary.</em>
          </h1>
          <div className="pd-hero-bottom">
            <p>30 years of filling rooms, now running your nights.</p>
            <a
              className="pd-button pd-button-light"
              href={bookingHref}
            >
              Book a 30 minute walkthrough
              <span className="ui-arrow ui-arrow-horizontal" aria-hidden="true" />
            </a>
          </div>
        </div>
        <span className="pd-hero-index" aria-hidden="true">01</span>
      </section>

      <section className="pd-problem pd-section" id="problem">
        <div className="pd-section-label">
          <span>02 / The problem</span>
          <span>The venue cannot promote itself</span>
        </div>
        <div className="pd-problem-grid">
          <h2>Great nights.<br />Nobody knows.</h2>
          <div className="pd-large-copy">
            <p>
              Independent venues have great nights nobody knows about. No
              marketing staff. Inconsistent social. A website nobody has
              touched in a year.
            </p>
            <p>
              You do not need another person waiting for instructions. You need
              senior promotional direction without adding another full time
              salary to payroll.
            </p>
            <p className="pd-emphasis">
              AI handles production. Ozzie&apos;s 30 years decides what gets made.
            </p>
          </div>
        </div>
      </section>

      <section className="pd-proof pd-section" id="proof">
        <div className="pd-section-label pd-section-label-light">
          <span>03 / Proof</span>
          <span>Built in real rooms</span>
        </div>
        <div className="pd-proof-intro">
          <h2>Not learned<br />from a feed.</h2>
          <p>
            Three decades inside nightlife, hospitality and promotion. The
            judgment comes from building the night, reading the crowd and knowing
            what makes people move.
          </p>
        </div>

        <p className="pd-career-label">
          Selected career highlights from more than 30 years working across
          hundreds of venues nationwide.
        </p>

        <div className="pd-credential-list">
          <article>
            <span>01</span>
            <h3>1990s New York nightlife</h3>
            <p>Tunnel, Twilo, Centro Fly, Webster Hall, Lyricist Lounge</p>
          </article>
          <article>
            <span>02</span>
            <h3>Built and directed</h3>
            <p>
              Founded Sniper Marketing. Directed promotions at TAO Las Vegas.
              Launched Home Nightclub at Ameristar St. Louis. Angad Arts Hotel.
            </p>
          </article>
        </div>
      </section>

      <section className="pd-process pd-section" id="process">
        <div className="pd-section-label">
          <span>04 / How it works</span>
          <span>Build the system first</span>
        </div>
        <div className="pd-process-intro">
          <h2>Four moves.<br />Then every month.</h2>
          <p>
            The separately priced Promotional System Build creates the
            foundation before the retainer begins. The Hero Library Shoot is
            priced separately. Then the ongoing monthly work keeps the nights
            visible, the calendar moving and every channel current.
          </p>
        </div>
        <div className="pd-process-grid">
          {processSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
        <div className="pd-ongoing">
          <span>Ongoing monthly work</span>
          <p>
            Direction, production, publishing, promotion and updates. One point
            of view stays on the whole business every month.
          </p>
        </div>
      </section>

      <section className="pd-crowds pd-section" id="crowds">
        <div className="pd-section-label pd-section-label-light">
          <span>05 / Two Crowd Theory</span>
          <span>One venue, two conversations</span>
        </div>
        <div className="pd-crowds-head">
          <p>Two Crowd Theory</p>
          <h2>Before 10pm.<br /><em>After 10pm.</em></h2>
        </div>
        <div className="pd-crowd-grid">
          <article>
            <span>Before 10pm</span>
            <h3>Regulars and food.</h3>
            <p>
              The people who come for the kitchen, the neighborhood, the drinks
              and the place they already trust.
            </p>
          </article>
          <article>
            <span>After 10pm</span>
            <h3>The night crowd.</h3>
            <p>
              The people choosing where the energy is, what the night means and
              who they want to be around.
            </p>
          </article>
        </div>
        <p className="pd-crowds-close">One system that speaks to both.</p>
      </section>

      <section className="pd-monthly pd-section" id="monthly">
        <div className="pd-section-label">
          <span>06 / Every month</span>
          <span>The work that keeps the calendar moving</span>
        </div>
        <div className="pd-monthly-layout">
          <h2>What you get<br />each month.</h2>
          <div className="pd-deliverable-list">
            {monthlyDeliverables.map((deliverable, index) => (
              <article key={deliverable}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{deliverable}</h3>
                <span className="ui-arrow ui-arrow-diagonal" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pd-final" id="contact">
        <div>
          <span>07 / Your move</span>
          <h2>You already know<br />something isn&apos;t working.</h2>
          <a className="pd-button pd-button-dark" href={bookingHref}>
            Book a 30 minute walkthrough
            <span className="ui-arrow ui-arrow-horizontal" aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href={`${githubPagesBasePath}/`}>
          <span>bespoke</span> MKTG
        </a>
        <div>
          <span>Strategy / Creative Direction / Experience</span>
          <span>bespoke-mktg.com</span>
        </div>
        <a href="#top">
          Back to top
          <span className="ui-arrow ui-arrow-up" aria-hidden="true" />
        </a>
      </footer>
    </main>
  );
}
