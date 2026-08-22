import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Check, ChevronDown, Instagram, Linkedin, Mail, Menu, Minus, Plus, X } from 'lucide-react';
import './styles.css';

const services = [
  ['01', 'Social strategy', 'A sharp content system built around what your audience actually stops for.'],
  ['02', 'Short-form content', 'Reels, edits and campaign worlds designed for the feed, not a pitch deck.'],
  ['03', 'AI production', 'A faster creative engine that turns one idea into an always-on content universe.'],
  ['04', 'Growth & analytics', 'Creative decisions backed by signals, testing and relentless iteration.'],
  ['05', 'Launch campaigns', 'Product launches that arrive with a point of view, not just a posting calendar.'],
  ['06', 'Creator systems', 'Creator-led production with clear briefs, repeatable formats and tighter creative direction.'],
];

const work = [
  { id: 'beauty', n: '01', tag: 'BEAUTY / LAUNCH', title: 'Make the scroll stop.', stat: 'LAUNCH', desc: 'A beauty launch system built around a distinct visual world, repeatable formats and faster creative iteration.', details: ['Positioning before production', 'Modular short-form creative', 'Launch-week testing loops'] },
  { id: 'fashion', n: '02', tag: 'FASHION / SOCIAL', title: 'From catalogue to culture.', stat: 'SOCIAL', desc: 'A sharper social identity that makes a fashion brand feel native to the feed without losing premium restraint.', details: ['Visual language system', 'Editorial content rhythm', 'Format-level optimization'] },
  { id: 'creator', n: '03', tag: 'CREATOR / GROWTH', title: 'Turn attention into equity.', stat: 'CREATOR', desc: 'A creator-first content engine designed to compound a recognisable point of view across formats.', details: ['Creator briefing system', 'Hook and retention testing', 'Repurposing architecture'] },
];

const faqs = [
  ['What does Nodi Verse actually do?', 'We build and run social growth systems: strategy, creative, short-form production, community, launches and performance iteration. AI makes the system faster. Taste keeps it human.'],
  ['Who is it for?', 'Modern D2C, fashion, beauty, luxury and creator-led brands that already have something worth saying and want social to become a serious growth channel.'],
  ['How do we start?', 'Book a strategy call. We diagnose the current social engine, identify the biggest opportunity, then map a focused first sprint.'],
  ['Do you only do content?', 'No. Content is one part of the system. We connect positioning, creative direction, production, publishing and learning so the pieces compound instead of living in silos.'],
];

const packages = [
  { name: 'SPARK', fit: 'For teams building their first real social system.', body: 'Focused strategy, creative direction and a clear first production sprint.', action: 'Start with diagnosis' },
  { name: 'RISE', fit: 'For brands ready to make social a growth channel.', body: 'Ongoing creative production, social management, testing and monthly optimization.', action: 'Build a growth system', featured: true },
  { name: 'REIGN', fit: 'For ambitious brands that need an always-on partner.', body: 'Integrated creative, launches, creator systems, AI production and performance thinking.', action: 'Build the full engine' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faq, setFaq] = useState(null);
  const [caseId, setCaseId] = useState(null);
  const [sent, setSent] = useState(false);
  const [projectType, setProjectType] = useState('Growth system');

  useEffect(() => {
    document.body.classList.toggle('modal-open', Boolean(caseId));
    return () => document.body.classList.remove('modal-open');
  }, [caseId]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setCaseId(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  const selectedCase = work.find((item) => item.id === caseId);

  return (
    <>
      <header className="nav">
        <button className="logo" onClick={() => scrollTo('top')} aria-label="Nodi Verse home"><span>N</span> NODI VERSE</button>
        <nav className={menuOpen ? 'open' : ''} aria-label="Primary navigation">
          <button onClick={() => scrollTo('work')}>Work</button>
          <button onClick={() => scrollTo('services')}>Capabilities</button>
          <button onClick={() => scrollTo('process')}>Process</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
          <button className="nav-cta" onClick={() => scrollTo('contact')}>Start a project <ArrowUpRight size={15} aria-hidden="true" /></button>
        </nav>
        <button className="menu" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="kicker">AI-NATIVE SOCIAL STUDIO</p>
            <h1>We don't post.<br /><em>We engineer</em> growth.</h1>
            <p className="hero-sub">Social systems for brands that want to become impossible to scroll past.</p>
            <div className="hero-actions">
              <button className="btn red" onClick={() => scrollTo('contact')}>Book a strategy call <ArrowUpRight size={17} aria-hidden="true" /></button>
              <button className="text-btn" onClick={() => scrollTo('work')}>See our work <ArrowUpRight size={16} aria-hidden="true" /></button>
            </div>
          </div>
          <div className="orb" aria-hidden="true"><div className="orb-core">NV</div><i /><i /><i /></div>
          <div className="hero-bottom"><span>NEW DELHI · WORLDWIDE</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="manifesto">
          <div className="section-index">01 / WHY US</div>
          <div>
            <h2>Attention is<br /><span>the new real estate.</span></h2>
            <p>Most brands are publishing. Very few are building a point of view people want to live inside. Nodi Verse combines cultural instinct, obsessive craft and AI-native production to make social a growth asset.</p>
            <div className="signal-row"><span>STRATEGY</span><span>CREATIVE</span><span>PRODUCTION</span><span>LEARNING</span></div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="section-head">
            <div><span className="section-index">02 / CAPABILITIES</span><h2>Everything social.<br /><em>One sharp system.</em></h2></div>
            <p>Strategy → creative → production → learning. No handoffs into the void.</p>
          </div>
          <div className="service-list">
            {services.map(([n, title, desc]) => (
              <article key={n}>
                <span>{n}</span>
                <div><h3>{title}</h3><p>{desc}</p></div>
                <ArrowUpRight className="service-arrow" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="work">
          <div className="section-head">
            <div><span className="section-index">03 / SELECTED WORK</span><h2>Built for the<br /><em>feed.</em></h2></div>
            <p>Case-study patterns without invented client numbers.</p>
          </div>
          <div className="work-grid">
            {work.map((item) => (
              <article className="work-card" key={item.id}>
                <button className="work-art" onClick={() => setCaseId(item.id)} aria-label={`Open ${item.title} case study`}>
                  <span>{item.n}</span>
                  <div className="art-lines" />
                  <strong>{item.stat}</strong>
                  <span className="art-open"><ArrowUpRight size={18} aria-hidden="true" /></span>
                </button>
                <div className="work-meta">
                  <small>{item.tag}</small>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <button className="text-btn" onClick={() => setCaseId(item.id)}>View case <ArrowUpRight size={15} aria-hidden="true" /></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="process">
          <div className="section-index">04 / THE METHOD</div>
          <div className="process-copy">
            <h2>Fast enough for culture.<br /><em>Rigorous enough for growth.</em></h2>
            <div className="steps">
              <div><b>01</b><h3>Diagnose</h3><p>Find the signal hiding inside the noise.</p></div>
              <div><b>02</b><h3>Build</h3><p>Create the visual and editorial system.</p></div>
              <div><b>03</b><h3>Compound</h3><p>Ship, measure, learn, sharpen, repeat.</p></div>
            </div>
          </div>
        </section>

        <section className="ai-band">
          <div><span className="section-index">05 / THE AI ENGINE</span><h2>More iterations.<br /><em>More interesting ideas.</em></h2></div>
          <div className="ai-statement">
            <span>HUMAN TASTE × MACHINE VELOCITY</span>
            <p>AI handles the repetition. Our team handles the judgement. The result is a creative production system that can move at internet speed without looking like everyone else.</p>
            <div className="ai-rail"><span>IDEA</span><span>VARIATION</span><span>TEST</span><span>LEARN</span><span>REFINE</span></div>
            <button className="btn black" onClick={() => scrollTo('contact')}>Build your system <ArrowUpRight size={16} aria-hidden="true" /></button>
          </div>
        </section>

        <section className="packages">
          <div className="section-head">
            <div><span className="section-index">06 / WAYS TO WORK</span><h2>Choose the<br /><em>depth of partnership.</em></h2></div>
            <p>Start focused. Scale when the system proves itself.</p>
          </div>
          <div className="package-grid">
            {packages.map((pack) => (
              <article className={pack.featured ? 'package featured' : 'package'} key={pack.name}>
                <div className="package-top"><span>{pack.name}</span>{pack.featured && <b>RECOMMENDED</b>}</div>
                <h3>{pack.fit}</h3>
                <p>{pack.body}</p>
                <button className="package-link" onClick={() => { setProjectType(`${pack.name} partnership`); scrollTo('contact'); }}>{pack.action} <ArrowUpRight size={15} aria-hidden="true" /></button>
              </article>
            ))}
          </div>
        </section>

        <section className="proof">
          <p>“The difference was not more content. It was finally having a system that knew what to do with attention.”</p>
          <span>— Brand partner, D2C / BEAUTY</span>
        </section>

        <section className="faq">
          <div className="section-index">07 / FAQ</div>
          <div>
            {faqs.map(([question, answer], index) => (
              <article key={question}>
                <button onClick={() => setFaq(faq === index ? null : index)} aria-expanded={faq === index}>
                  <span>{question}</span>{faq === index ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}
                </button>
                {faq === index && <p>{answer}</p>}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="section-index">08 / LET'S MAKE SOMETHING</div>
          <h2>Your next<br /><em>scroll-stopper.</em></h2>
          <div className="contact-grid">
            <div>
              <p>Tell us what you're building. We'll tell you where we'd start.</p>
              <a href="mailto:hello@nodiverse.com">hello@nodiverse.com <ArrowUpRight size={15} aria-hidden="true" /></a>
              <div className="contact-note"><Check size={16} aria-hidden="true" /> Strategy-first. No obligation.</div>
            </div>
            <form onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
              {sent ? (
                <div className="success" role="status"><strong>Brief received.</strong><span>We’ll be in touch with the next step.</span><button className="text-btn" type="button" onClick={() => setSent(false)}>Send another brief <ArrowUpRight size={15} aria-hidden="true" /></button></div>
              ) : (
                <>
                  <label>Name<input required name="name" autoComplete="name" placeholder="Your name" /></label>
                  <label>Work email<input required name="email" type="email" autoComplete="email" placeholder="you@company.com" /></label>
                  <label>Brand / company<input name="company" autoComplete="organization" placeholder="Brand or company" /></label>
                  <label>Project type<select value={projectType} onChange={(event) => setProjectType(event.target.value)}><option>Growth system</option><option>Launch campaign</option><option>Content engine</option><option>Creator system</option><option>SPARK partnership</option><option>RISE partnership</option><option>REIGN partnership</option></select></label>
                  <label>What are you trying to grow?<textarea required name="brief" placeholder="A short brief is perfect." rows="4" /></label>
                  <button className="btn red" type="submit">Send the brief <ArrowUpRight size={17} aria-hidden="true" /></button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="logo"><span>N</span> NODI VERSE</div>
        <div><a href="#top">Back to top ↑</a><a href="mailto:hello@nodiverse.com"><Mail size={16} aria-hidden="true" /> Email</a><a href="#contact"><Instagram size={16} aria-hidden="true" /> Social</a><a href="#contact"><Linkedin size={16} aria-hidden="true" /> LinkedIn</a></div>
        <small>© 2026 Nodi Verse. Built for attention.</small>
      </footer>

      {selectedCase && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) setCaseId(null); }}>
          <div className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title">
            <button className="modal-close" onClick={() => setCaseId(null)} aria-label="Close case study"><X /></button>
            <span className="section-index">{selectedCase.n} / CASE STUDY DIRECTION</span>
            <h2 id="case-title">{selectedCase.title}</h2>
            <p className="modal-lead">{selectedCase.desc}</p>
            <div className="detail-list">{selectedCase.details.map((detail) => <div key={detail}><Check size={15} aria-hidden="true" /><span>{detail}</span></div>)}</div>
            <button className="btn black" onClick={() => { setCaseId(null); setProjectType(`${selectedCase.tag} brief`); scrollTo('contact'); }}>Discuss a project <ArrowUpRight size={16} aria-hidden="true" /></button>
          </div>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
