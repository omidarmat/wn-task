"use client";

import { ModalProptypes } from "@/types/ui/modal";
import { Dialog as BaseUiDialog } from "@base-ui/react/dialog";
import styles from "./index.module.css";

export function Dialog({
  title,
  content,
  trigger,
  open,
  onClose,
  classes = "",
}: ModalProptypes) {
  return (
    <BaseUiDialog.Root open={open}>
      <BaseUiDialog.Trigger render={trigger}></BaseUiDialog.Trigger>
      <BaseUiDialog.Portal className={classes}>
        <BaseUiDialog.Backdrop onClick={onClose} className={styles.Backdrop} />
        <BaseUiDialog.Popup className={styles.Popup}>
          <div className={styles.Intro}>
            <div className="flex items-start justify-between">
              <BaseUiDialog.Title className={styles.Title}>
                {title}
              </BaseUiDialog.Title>
              <div className={styles.Actions}>
                <BaseUiDialog.Close onClick={onClose} className={styles.Button}>
                  Close
                </BaseUiDialog.Close>
              </div>
            </div>
            <BaseUiDialog.Description
              render={content}
            ></BaseUiDialog.Description>
          </div>
        </BaseUiDialog.Popup>
      </BaseUiDialog.Portal>
    </BaseUiDialog.Root>
  );
}
