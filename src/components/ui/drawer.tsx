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
        <VaulDrawer.Overlay className="drawer-overlay" />
        <VaulDrawer.Content className="drawer-content">
          <div className="drawer-handle" />
          <div className="dialog-header">
            <VaulDrawer.Title className="dialog-title">{title}</VaulDrawer.Title>
            <VaulDrawer.Close className="icon-button" aria-label="Fechar">
              <X size={18} />
            </VaulDrawer.Close>
          </div>
          {children}
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  );
}
