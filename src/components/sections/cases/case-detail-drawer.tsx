import { type CaseStudy } from "../../../content/cases";
import { Drawer } from "../../ui/drawer";
import { CaseDetailContent } from "./case-detail-content";

type CaseDetailDrawerProps = {
  study: CaseStudy | null;
  onOpenChange: (open: boolean) => void;
};

export function CaseDetailDrawer({
  study,
  onOpenChange,
}: CaseDetailDrawerProps) {
  return (
    <Drawer
      open={Boolean(study)}
      onOpenChange={onOpenChange}
      title={study?.title ?? "Detalhes do case"}
    >
      {study ? <CaseDetailContent study={study} /> : null}
    </Drawer>
  );
}
