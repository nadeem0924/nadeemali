import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Menu, X, Play, Plus, Minus, Instagram, Linkedin, Mail } from 'lucide-react';
import './styles.css';

const services = [
  ['01','Social strategy','A sharp content system built around what your audience actually stops for.'],
  ['02','Short-form content','Reels, edits and campaign worlds designed for the feed, not a pitch deck.'],
  ['03','AI production','A faster creative engine that turns one idea into an always-on content universe.'],
  ['04','Growth & analytics','Creative decisions backed by signals, testing and relentless iteration.']
];
const work = [
  {n:'01', tag:'BEAUTY / LAUNCH', title:'Make the scroll stop.', stat:'3.8×', desc:'A launch system that made a new beauty drop feel culturally inevitable.'},
  {n:'02', tag:'FASHION / SOCIAL', title:'From catalogue to culture.', stat:'+142%', desc:'A visual identity and content rhythm built for a fashion-first audience.'},
  {n:'03', tag:'CREATOR / GROWTH', title:'Turn attention into equity.', stat:'68M', desc:'A creator-led content engine designed to compound reach across formats.'}
];
const faqs = [
  ['What does Nodi Verse actually do?','We build and run social growth systems: strategy, creative, short-form production, community, launches and performance iteration. AI makes the system faster. Taste keeps it human.'],
  ['Who is it for?','Modern D2C, fashion, beauty, luxury and creator-led brands that already have something worth saying and want social to become a serious growth channel.'],
  ['How do we start?','Book a strategy call. We diagnose the current social engine, identify the biggest opportunity, then map a focused first sprint.'],
];

function App(){
 const [open,setOpen]=useState(false), [faq,setFaq]=useState(null), [sent,setSent]=useState(false);
 const scroll=id=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setOpen(false)};
 return <>
  <header className="nav"><button className="logo" onClick={()=>scroll('top')} aria-label="Nodi Verse home"><span>N</span> NODI VERSE</button><nav className={open?'open':''}><button onClick={()=>scroll('work')}>Work</button><button onClick={()=>scroll('services')}>Capabilities</button><button onClick={()=>scroll('process')}>Process</button><button className="nav-cta" onClick={()=>scroll('contact')}>Start a project <ArrowUpRight size={15}/></button></nav><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></header>
  <main id="top">
   <section className="hero"><div className="hero-copy"><p className="kicker">AI-NATIVE SOCIAL STUDIO</p><h1>We don't post.<br/><em>We engineer</em> growth.</h1><p className="hero-sub">Social systems for brands that want to become impossible to scroll past.</p><div className="hero-actions"><button className="btn red" onClick={()=>scroll('contact')}>Book a strategy call <ArrowUpRight size={17}/></button><button className="text-btn" onClick={()=>scroll('work')}>See our work <ArrowUpRight size={16}/></button></div></div><div className="orb" aria-hidden="true"><div className="orb-core">NV</div><i/><i/><i/></div><div className="hero-bottom"><span>NEW DELHI · WORLDWIDE</span><span>SCROLL TO EXPLORE ↓</span></div></section>
   <section className="manifesto"><div className="section-index">01 / WHY US</div><div><h2>Attention is<br/><span>the new real estate.</span></h2><p>Most brands are publishing. Very few are building a point of view people want to live inside. Nodi Verse combines cultural instinct, obsessive craft and AI-native production to make social a growth asset.</p></div></section>
   <section id="services" className="services"><div className="section-head"><div><span className="section-index">02 / CAPABILITIES</span><h2>Everything social.<br/><em>One sharp system.</em></h2></div><p>Strategy → creative → production → learning. No handoffs into the void.</p></div><div className="service-list">{services.map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight className="service-arrow"/></article>)}</div></section>
   <section id="work" className="work"><div className="section-head"><div><span className="section-index">03 / SELECTED WORK</span><h2>Built for the<br/><em>feed.</em></h2></div><p>Three ways we think beyond “content.”</p></div><div className="work-grid">{work.map(x=><article className="work-card" key={x.n}><div className="work-art"><span>{x.n}</span><div className="art-lines"></div><strong>{x.stat}</strong></div><div className="work-meta"><small>{x.tag}</small><h3>{x.title}</h3><p>{x.desc}</p><button className="text-btn">View case <ArrowUpRight size={15}/></button></div></article>)}</div></section>
   <section id="process" className="process"><div className="section-index">04 / THE METHOD</div><div className="process-copy"><h2>Fast enough for culture.<br/><em>Rigorous enough for growth.</em></h2><div className="steps"><div><b>01</b><h3>Diagnose</h3><p>Find the signal hiding inside the noise.</p></div><div><b>02</b><h3>Build</h3><p>Create the visual and editorial system.</p></div><div><b>03</b><h3>Compound</h3><p>Ship, measure, learn, sharpen, repeat.</p></div></div></div></section>
   <section className="ai-band"><div><span className="section-index">05 / THE AI ENGINE</span><h2>More iterations.<br/><em>More interesting ideas.</em></h2></div><div className="ai-statement"><span>HUMAN TASTE × MACHINE VELOCITY</span><p>AI handles the repetition. Our team handles the judgement. The result is a creative production system that can move at internet speed without looking like everyone else.</p><button className="btn black" onClick={()=>scroll('contact')}>Build your system <ArrowUpRight size={16}/></button></div></section>
   <section className="proof"><p>“The difference was not more content. It was finally having a system that knew what to do with attention.”</p><span>— Brand partner, D2C / BEAUTY</span></section>
   <section className="faq"><div className="section-index">06 / FAQ</div><div>{faqs.map(([q,a],i)=><article key={q}><button onClick={()=>setFaq(faq===i?null:i)}><span>{q}</span>{faq===i?<Minus/>:<Plus/>}</button>{faq===i&&<p>{a}</p>}</article>)}</div></section>
   <section id="contact" className="contact"><div className="section-index">07 / LET'S MAKE SOMETHING</div><h2>Your next<br/><em>scroll-stopper.</em></h2><div className="contact-grid"><div><p>Tell us what you're building. We'll tell you where we'd start.</p><a href="mailto:hello@nodiverse.com">hello@nodiverse.com <ArrowUpRight size={15}/></a></div><form onSubmit={e=>{e.preventDefault();setSent(true)}}>{sent?<div className="success"><strong>Brief received.</strong><span>We'll be in touch.</span></div>:<><input required placeholder="Your name"/><input required type="email" placeholder="Work email"/><input placeholder="Brand / company"/><textarea placeholder="What are you trying to grow?" rows="4"/><button className="btn red" type="submit">Send the brief <ArrowUpRight size={17}/></button></>}</form></div></section>
  </main>
  <footer><div className="logo"><span>N</span> NODI VERSE</div><div><a href="#top">Back to top ↑</a><a href="https://instagram.com" target="_blank"><Instagram size={16}/> Instagram</a><a href="https://linkedin.com" target="_blank"><Linkedin size={16}/> LinkedIn</a></div><small>© 2026 Nodi Verse. Built for attention.</small></footer>
 </>
}
createRoot(document.getElementById('root')).render(<App/>);
