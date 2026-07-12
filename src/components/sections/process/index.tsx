import { ProcessTimeline } from "./process-timeline";

export function ProcessSection() {
  return (
    <section id="processo" className="bg-[var(--surface)]">
      <div className="mx-auto max-w-[1120px] px-[clamp(18px,4vw,40px)] py-[72px] md:py-[104px]">
        <header className="mx-auto max-w-[650px] text-center">
          <h2 className="text-5xl leading-[1.05] font-bold tracking-[0] text-[var(--text)]">
            Como <span className="text-[var(--accent)]">construo</span>
          </h2>
          <p className="mt-3 text-base leading-7 text-[var(--muted)]">
            Da ideia ao software.
          </p>
        </header>

        <ProcessTimeline />
      </div>
    </section>
  );
}
