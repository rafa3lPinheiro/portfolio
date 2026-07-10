const anchors = ["Full-stack", "SDD/TDD", "Context engineering"] as const;

export function HeroAnchors() {
  return (
    <div className="hero-anchors" aria-label="Especialidades">
      {anchors.map((anchor) => (
        <span key={anchor}>{anchor}</span>
      ))}
    </div>
  );
}
