import { Reveal } from './useReveal';
import { DATA } from '../data';

const css = `
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2px; background: var(--bdr);
}
.sk-cat {
  background: var(--bg2); padding: 32px;
  transition: background 0.3s;
}
.sk-cat:hover { background: var(--bg3); }
.sk-cat-title {
  font-family: var(--fm); font-size: 0.62rem;
  letter-spacing: 0.2em; color: var(--teal);
  text-transform: uppercase; margin-bottom: 18px;
  display: flex; align-items: center; gap: 8px;
}
.sk-cat-title::after {
  content: ''; flex: 1; height: 1px;
  background: var(--bdrb);
}
.sk-pills { display: flex; flex-wrap: wrap; gap: 8px; }
.pill {
  font-size: 0.76rem; color: var(--w2);
  padding: 5px 12px;
  border: 1px solid var(--bdr);
  background: var(--surf);
  transition: all 0.2s;
}
.pill:hover { border-color: var(--goldd); color: var(--gold); }
.pill.core { border-color: var(--goldd); color: var(--gold); background: var(--goldd); }

@media (max-width: 768px) {
  .skills-grid { grid-template-columns: 1fr; }
  .sk-cat { padding: 22px 18px; }
}
`;

export default function Skills() {
  return (
    <>
      <style>{css}</style>
      <section id="skills" className="alt-bg">
        <Reveal className="sec-header">
          <span className="sec-num">02</span>
          <h2 className="sec-title">Key <em>Skills</em></h2>
          <div className="sec-line" />
        </Reveal>

        <Reveal className="skills-grid">
          {DATA.skills.map(cat => (
            <div className="sk-cat" key={cat.category}>
              <div className="sk-cat-title">{cat.category}</div>
              <div className="sk-pills">
                {cat.items.map(item => (
                  <span className={`pill${item.core ? ' core' : ''}`} key={item.name}>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </section>
    </>
  );
}
