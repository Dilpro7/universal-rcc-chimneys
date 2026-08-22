import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, CheckCircle2, Factory, Flame, HardHat, Menu, Phone, ShieldCheck, X } from 'lucide-react';
import './styles.css';

const phone = '91542 86786';
const phoneHref = 'tel:+919154286786';
const email = 'universalchimneys@gmail.com';

const services = [
  { icon: Factory, title: 'RCC Chimney Construction', text: 'Industrial RCC chimney construction with design, structural engineering and installation capability.' },
  { icon: ShieldCheck, title: 'Chimney & Boiler Repair', text: 'Repair and maintenance support for industrial chimneys, boilers and related structures.' },
  { icon: Flame, title: 'Refractory Works', text: 'Refractory work and material supply for industrial applications.' },
  { icon: HardHat, title: 'Chimney Painting', text: 'RCC and MS chimney painting services for industrial structures.' },
  { icon: Factory, title: 'Refractory Material Supply', text: 'Supply of refractory materials for industrial project requirements.' },
];

function App() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  return (
    <div className="site-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Industrial chimney & refractory services across India</span>
          <a href={phoneHref}><Phone size={14} /> {phone}</a>
        </div>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={close}>
            <span className="brand-mark">UR</span>
            <span><strong>Universal RCC</strong><small>CHIMNEYS</small></span>
          </a>
          <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
          <nav className={open ? 'nav open' : 'nav'}>
            <a href="#home" onClick={close}>Home</a>
            <a href="#services" onClick={close}>Services</a>
            <a href="#about" onClick={close}>About</a>
            <a href="#projects" onClick={close}>Projects</a>
            <a href="#contact" onClick={close}>Contact</a>
            <a className="nav-cta" href={phoneHref}><Phone size={16} /> Talk to us</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid" />
          <div className="container hero-content">
            <div className="eyebrow"><span /> A Unit of KGN Ceramics & Refractories</div>
            <h1>Industrial chimney expertise built for demanding environments.</h1>
            <p className="hero-copy">Universal RCC Chimneys provides RCC chimney construction, chimney and boiler repair, refractory works, chimney painting and refractory material supply for industrial customers across India.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#contact">Discuss your project <ArrowRight size={18} /></a>
              <a className="btn secondary" href="#services">Explore services</a>
            </div>
            <div className="hero-proof">
              <div><strong>1998</strong><span>Established</span></div>
              <div><strong>2</strong><span>Active branches</span></div>
              <div><strong>India</strong><span>Service coverage</span></div>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="chimney-art"><div className="smoke s1" /><div className="smoke s2" /><div className="smoke s3" /><div className="stack" /><div className="base" /></div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <span>Design & Engineering</span><i /> <span>Construction</span><i /> <span>Repair & Maintenance</span><i /> <span>Refractory Works</span><i /> <span>Installation</span>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <div className="section-head"><div><span className="kicker">WHAT WE DO</span><h2>Industrial services, from engineering to execution.</h2></div><p>Our current service scope covers chimney construction, repair, refractory work, painting and material supply, with engineering and installation capabilities.</p></div>
            <div className="service-grid">{services.map(({ icon: Icon, title, text }) => <article className="service-card" key={title}><div className="icon-box"><Icon size={23} /></div><h3>{title}</h3><p>{text}</p><a href="#contact">Enquire <ArrowRight size={15} /></a></article>)}</div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container about-grid">
            <div className="about-panel"><div className="about-number">01</div><span className="kicker">THE COMPANY</span><h2>Built around industrial work, not generic contracting.</h2><p>Universal RCC Chimneys is an industrial chimney and refractory services business serving customers across Andhra Pradesh, Telangana, Gujarat and other states across India.</p><p>The company operates from a main branch in Gujarat and a secondary active branch in Vuyyuru, Andhra Pradesh.</p></div>
            <div className="capabilities"><div className="cap-row"><strong>01</strong><div><h3>Engineering capability</h3><p>Design and structural engineering support for chimney projects.</p></div></div><div className="cap-row"><strong>02</strong><div><h3>Project execution</h3><p>Construction, installation and turnkey project capability.</p></div></div><div className="cap-row"><strong>03</strong><div><h3>Lifecycle support</h3><p>Repair, inspection, maintenance and emergency repair services.</p></div></div><div className="cap-row"><strong>04</strong><div><h3>Industrial materials</h3><p>Refractory works and refractory material supply.</p></div></div></div>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="container">
            <div className="section-head"><div><span className="kicker">PROJECT EXPERIENCE</span><h2>Industrial work with a long operating history.</h2></div><p>Project records and photographs are being prepared for publication. Client names, logos and project-specific claims will be shown only where publication permission is verified.</p></div>
            <div className="project-placeholder"><div><span className="placeholder-icon"><Factory /></span><h3>Project gallery coming next</h3><p>We will build this section from verified project records rather than inventing portfolio content.</p></div></div>
          </div>
        </section>

        <section className="cta-band"><div className="container cta-inner"><div><span className="kicker">START A CONVERSATION</span><h2>Have an industrial chimney or refractory requirement?</h2></div><a className="btn light" href={phoneHref}><Phone size={18} /> Call {phone}</a></div></section>

        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div><span className="kicker">CONTACT</span><h2>Tell us what you need.</h2><p>For project enquiries, repair requirements and material supply, contact the office directly.</p><div className="contact-item"><span>Phone</span><a href={phoneHref}>{phone}</a></div><div className="contact-item"><span>Email</span><a href={`mailto:${email}`}>{email}</a></div></div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}><div className="form-grid"><label>Name<input required placeholder="Your name" /></label><label>Company<input placeholder="Company name" /></label><label>Phone<input required type="tel" placeholder="Phone number" /></label><label>Email<input type="email" placeholder="Email address" /></label></div><label>Service required<select defaultValue=""><option value="" disabled>Select a service</option>{services.map(s => <option key={s.title}>{s.title}</option>)}</select></label><label>Project details<textarea rows="5" placeholder="Briefly describe your requirement" /></label><button className="btn primary" type="submit">Send enquiry <ArrowRight size={18} /></button><small>Form submission will be connected to the approved enquiry route during the next implementation step.</small></form>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="container footer-grid"><div><a className="brand" href="#home"><span className="brand-mark">UR</span><span><strong>Universal RCC</strong><small>CHIMNEYS</small></span></a><p>A Unit of KGN Ceramics & Refractories.</p></div><div><strong>Branches</strong><p>Gujarat — Main Branch<br />Vuyyuru, Andhra Pradesh — Secondary Branch</p></div><div><strong>Contact</strong><p><a href={phoneHref}>{phone}</a><br /><a href={`mailto:${email}`}>{email}</a></p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Universal RCC Chimneys</span><span>Industrial services across India</span></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
