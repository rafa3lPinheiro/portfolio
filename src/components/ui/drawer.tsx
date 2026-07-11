import { X } from "lucide-react";
import { type ReactNode } from "react";
import { Drawer as VaulDrawer } from "vaul";

type DrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
};

export function Drawer({ open, onOpenChange, title, children }: DrawerProps) {
  return (
    <VaulDrawer.Root open={open} onOpenChange={onOpenChange}>
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.72)]" />
        <VaulDrawer.Content className="fixed right-0 bottom-0 left-0 z-50 max-h-[86svh] overflow-auto rounded-t-[12px] border border-[var(--line-strong)] bg-[#111010] px-[18px] pt-[18px] pb-7 shadow-[0_24px_80px_rgba(0,0,0,0.46)]">
          <div className="mx-auto mb-[18px] h-1 w-[42px] rounded-full bg-[rgba(255,237,230,0.22)]" />
          <div className="flex items-start justify-between gap-[18px]">
            <VaulDrawer.Title className="mb-[22px] text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.08] font-extrabold text-[var(--text)]">
              {title}
            </VaulDrawer.Title>
            <VaulDrawer.Close
              className="inline-flex h-[38px] min-w-[38px] cursor-pointer items-center justify-center border border-[var(--line)] bg-[rgba(255,255,255,0.04)] text-[var(--text)]"
              aria-label="Fechar"
            >
              <X size={18} />
            </VaulDrawer.Close>
          </div>
          {children}
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  );
}
