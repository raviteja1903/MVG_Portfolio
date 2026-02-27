const css = `
.footer {
  padding: 24px 60px;
  border-top: 1px solid var(--bdr);
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 10px;
}
.footer p {
  font-family: var(--fm); font-size: 0.62rem;
  letter-spacing: 0.1em; color: var(--w3);
}
.footer span { color: var(--gold); }

@media (max-width: 768px) {
  .footer { padding: 18px 20px; flex-direction: column; text-align: center; gap: 6px; }
}
`;

export default function Footer() {
  return (
    <>
      <style>{css}</style>
      <footer className="footer">
        <p>© 2025 <span>Madasu Venkata Guruvulu</span>. All rights reserved.</p>
        <p>Pharmacovigilance · Drug Safety · ICSR · MedDRA</p>
      </footer>
    </>
  );
}
