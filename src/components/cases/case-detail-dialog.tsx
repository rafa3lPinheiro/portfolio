import { type CaseStudy } from "../../content/cases";
import { Dialog } from "../ui/dialog";
import { CaseDetailContent } from "./case-detail-content";

type CaseDetailDialogProps = {
  study: CaseStudy | null;
  onOpenChange: (open: boolean) => void;
};

export function CaseDetailDialog({
  study,
  onOpenChange,
}: CaseDetailDialogProps) {
  return (
    <Dialog
      open={Boolean(study)}
      onOpenChange={onOpenChange}
      title={study?.title ?? "Detalhes do case"}
    >
      {study ? <CaseDetailContent study={study} /> : null}
    </Dialog>
  );
}
