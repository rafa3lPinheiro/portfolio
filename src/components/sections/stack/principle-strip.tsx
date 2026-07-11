import { principles } from "../../../content/stack";

export function PrincipleStrip() {
  return (
    <div className="mt-[18px] flex flex-wrap gap-[10px] rounded-[16px] border border-[var(--line)] p-[18px]">
      {principles.map((principle) => (
        <span key={principle} className="text-[0.88rem] text-[var(--muted)]">
          {principle}
        </span>
      ))}
    </div>
  );
}
