import { ReactElement } from "react";

export interface ModalProptypes {
  title: string;
  content: ReactElement;
  trigger?: ReactElement;
  open?: boolean;
  onClose?: () => void;
  classes?: string;
}
