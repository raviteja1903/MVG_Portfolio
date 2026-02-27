import { useEffect, useRef } from 'react';
import { DATA } from '../data';
import photo from '../assets/photo.jpg';

const css = `
.hero {
  min-height: 100vh;
  display: flex; align-items: center;
  padding: 0 60px;
  position: relative; overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 60% 70% at 65% 50%, #1a1a2e, transparent 70%),
    radial-gradient(ellipse 40% 40% at 15% 80%, #0d1b2a, transparent 60%);
}
.hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(#ffffff0f 1px, transparent 1px),
    linear-gradient(90deg, #ffffff0f 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent);
}
.hero-content { position: relative; z-index: 2; max-width: 720px; }

.hero-tag {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: 'DM Mono', monospace;
  font-size: 0.68rem; letter-spacing: 0.2em;
  color: #4ecdc4; text-transform: uppercase;
  margin-bottom: 24px; padding: 8px 16px;
  border: 1px solid #4ecdc415;
  background: #4ecdc408;
  opacity: 0; animation: fadeUp 0.7s ease 0.1s forwards;
}
.hero-tag::before { content: '//'; opacity: 0.5; }
.hero-name {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(3rem, 6.5vw, 6rem);
  font-weight: 300; line-height: 1;
  color: #f0ede8; margin-bottom: 8px;
  opacity: 0; animation: fadeUp 0.7s ease 0.2s forwards;
}
.hero-name span { color: #c9a84c; font-style: italic; }
.hero-sub {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(1rem, 2vw, 1.6rem);
  font-weight: 300; font-style: italic;
  color: #b8b5af; margin-bottom: 24px;
  opacity: 0; animation: fadeUp 0.7s ease 0.3s forwards;
}
.hero-desc {
  font-size: 0.88rem; color: #6e6c68;
  max-width: 480px; line-height: 1.85; margin-bottom: 40px;
  opacity: 0; animation: fadeUp 0.7s ease 0.4s forwards;
}
.hero-btns {
  display: flex; gap: 14px; flex-wrap: wrap;
  opacity: 0; animation: fadeUp 0.7s ease 0.5s forwards;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* PHOTO */
.hero-photo-wrap {
  position: absolute; right: 80px; top: 50%;
  transform: translateY(-50%);
  z-index: 3; display: flex; flex-direction: column; align-items: center;
}
.hero-photo-frame {
  position: relative; width: 270px; height: 330px;
}
.hero-photo-frame::before {
  content: ''; position: absolute; inset: -2px;
  background: linear-gradient(135deg, #c9a84c, transparent 50%, #4ecdc4);
  z-index: -1;
}
.hero-photo-frame::after {
  content: ''; position: absolute;
  bottom: -18px; right: -18px;
  width: 100%; height: 100%;
  border: 1px solid #c9a84c30; z-index: -2;
}
.hero-photo {
  width: 100%; height: 100%;
  object-fit: cover; object-position: top;
  display: block; filter: contrast(1.05);
}
.hero-photo-name {
  margin-top: 26px;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1rem; color: #c9a84c;
  letter-spacing: 0.05em; text-align: center;
}
.hero-photo-role {
  font-family: 'DM Mono', monospace;
  font-size: 0.6rem; color: #6e6c68;
  letter-spacing: 0.15em; text-transform: uppercase;
  text-align: center; margin-top: 4px;
}

/* STATS BAR */
.stats-bar {
  position: absolute; bottom: 0; left: 0; right: 0;
  z-index: 3; display: flex; justify-content: center;
  border-top: 1px solid #ffffff0f;
}
.stat-item {
  flex: 1; max-width: 200px; padding: 20px;
  text-align: center; border-right: 1px solid #ffffff0f;
}
.stat-item:last-child { border-right: none; }
.stat-num {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2rem; font-weight: 500; color: #c9a84c; line-height: 1;
}
.stat-lbl {
  font-family: 'DM Mono', monospace;
  font-size: 0.6rem; letter-spacing: 0.15em;
  color: #6e6c68; text-transform: uppercase; margin-top: 4px;
}

/* SCROLL HINT */
.scroll-hint {
  position: absolute; bottom: 80px; left: 60px;
  z-index: 3; display: flex; align-items: center; gap: 12px;
  font-family: 'DM Mono', monospace;
  font-size: 0.62rem; letter-spacing: 0.15em; color: #6e6c68;
}
.scroll-line {
  width: 40px; height: 1px;
  background: linear-gradient(to right, transparent, #c9a84c);
  animation: sl 2s ease-in-out infinite;
}
@keyframes sl {
  0%, 100% { width: 40px; opacity: 1; }
  50%       { width: 60px; opacity: 0.5; }
}

@media (max-width: 1100px) {
  .hero-photo-frame { width: 220px; height: 270px; }
  .hero-content { max-width: 560px; }
}
@media (max-width: 900px) {
  .hero-photo-wrap { display: none; }
  .stats-bar { display: none; }
}
@media (max-width: 768px) {
  .hero {
    padding: 0; flex-direction: column;
    justify-content: flex-start; align-items: stretch; min-height: 100vh;
  }
  .hero-bg { background: radial-gradient(ellipse 100% 50% at 50% 30%, #1a1a2e, transparent 70%); }
  .hero-photo-wrap {
    display: flex !important;
    position: relative; top: unset; right: unset; transform: none;
    width: 100%; flex-direction: row;
    align-items: flex-end; justify-content: center;
    padding: 80px 20px 0; gap: 18px; order: 0;
  }
  .hero-photo-frame { width: 148px; height: 182px; flex-shrink: 0; }
  .hero-photo-frame::after { bottom: -10px; right: -10px; }
  .hero-photo-name { font-size: 0.9rem; text-align: left; margin-top: 0; }
  .hero-photo-role { text-align: left; margin-top: 3px; }
  .hero-content { order: 1; padding: 24px 20px 48px; max-width: 100%; }
  .hero-tag { font-size: 0.6rem; padding: 6px 12px; margin-bottom: 16px; }
  .hero-name { font-size: clamp(2.3rem, 9vw, 3.2rem); }
  .hero-sub { font-size: clamp(0.9rem, 3.5vw, 1.1rem); }
  .hero-desc { font-size: 0.83rem; margin-bottom: 26px; max-width: 100%; }
  .scroll-hint { display: none; }
  .stats-bar { display: none; }
}
@media (max-width: 380px) {
  .hero-photo-frame { width: 128px; height: 158px; }
  .hero-name { font-size: 2.1rem; }
}
`;

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const count = window.innerWidth <= 768 ? 6 : 18;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const sz = (1 + Math.random() * 3) + 'px';
      p.style.cssText = `left:${Math.random()*100}%;bottom:${Math.random()*30}px;width:${sz};height:${sz};animation-delay:${Math.random()*8}s;animation-duration:${6+Math.random()*6}s;`;
      el.appendChild(p);
    }
  }, []);

  return (
    <>
      <style>{css}</style>
      <section className="hero" id="home" ref={heroRef}>
        <div className="hero-bg" />
        <div className="hero-grid" />

        <div className="hero-photo-wrap">
          <div className="hero-photo-frame">
            <img className="hero-photo" src={photo} alt="Madasu Venkata Guruvulu" />
          </div>
          <div>
            <div className="hero-photo-name">{DATA.name}</div>
            <div className="hero-photo-role">Pharmacovigilance Professional</div>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-tag">{DATA.tagline}</div>
          <h1 className="hero-name">
            Madasu <span>Venkata</span><br />Guruvulu
          </h1>
          <p className="hero-sub">{DATA.title}</p>
          <p className="hero-desc">{DATA.objective}</p>
          <div className="hero-btns">
            <a className="btn-gold" href={`mailto:${DATA.email}`}>Get In Touch</a>
            <a className="btn-outline" href="#resume">View Resume</a>
            <a className="btn-outline" href={DATA.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="stats-bar">
          {DATA.stats.map(s => (
            <div className="stat-item" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="scroll-hint">
          <div className="scroll-line" />
          Scroll to explore
        </div>
      </section>
    </>
  );
}
