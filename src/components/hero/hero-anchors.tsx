const anchors = [
  "Engenharia com IA",
  "SDD / TDD",
  "Software confiável",
] as const;

export function HeroAnchors() {
  return (
    <div className="hero-anchors" aria-label="Especialidades">
      {anchors.map((anchor) => (
        <span key={anchor}>{anchor}</span>
      ))}
    </div>
  );
}
