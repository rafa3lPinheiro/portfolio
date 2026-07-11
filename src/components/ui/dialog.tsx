import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { type ReactNode } from "react";

type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
};

export function Dialog({ open, onOpenChange, title, children }: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.72)]" />
        <DialogPrimitive.Content className="fixed top-1/2 left-1/2 z-50 max-h-[min(760px,calc(100svh-48px))] w-[min(calc(100vw-32px),780px)] max-w-[780px] -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-[16px] border border-[var(--line-strong)] bg-[#111010] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.46)]">
          <div className="flex items-start justify-between gap-[18px]">
            <DialogPrimitive.Title className="mb-[22px] text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.08] font-extrabold text-[var(--text)]">
              {title}
            </DialogPrimitive.Title>
            <DialogPrimitive.Close
              className="inline-flex h-[38px] min-w-[38px] cursor-pointer items-center justify-center border border-[var(--line)] bg-[rgba(255,255,255,0.04)] text-[var(--text)]"
              aria-label="Fechar"
            >
              <X size={18} />
            </DialogPrimitive.Close>
          </div>
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
