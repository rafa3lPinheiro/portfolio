import { principles } from "../../content/stack";

export function PrincipleStrip() {
  return (
    <div className="principle-strip">
      {principles.map((principle) => (
        <span key={principle}>{principle}</span>
      ))}
    </div>
  );
}
