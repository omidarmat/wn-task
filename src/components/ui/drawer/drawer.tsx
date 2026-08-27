"use client";

import { ModalProptypes } from "@/types/ui/modal";
import { Drawer as BaseUiDrawer } from "@base-ui/react/drawer";
import styles from "./index.module.css";

export function Drawer({
  title,
  content,
  trigger,
  open,
  onClose,
  classes = "",
}: ModalProptypes) {
  return (
    <BaseUiDrawer.Root open={open}>
      <BaseUiDrawer.Trigger render={trigger}></BaseUiDrawer.Trigger>
      <BaseUiDrawer.Portal className={classes}>
        <BaseUiDrawer.Backdrop className={styles.Backdrop} />
        <BaseUiDrawer.Viewport className={styles.Viewport}>
          <BaseUiDrawer.Popup className={styles.Popup}>
            <div className={styles.Handle} />
            <BaseUiDrawer.Content className={styles.Content}>
              <div className="flex items-center justify-between mb-4">
                <BaseUiDrawer.Title className={styles.Title}>
                  {title}
                </BaseUiDrawer.Title>
                <div className={styles.Actions}>
                  <BaseUiDrawer.Close
                    onClick={onClose}
                    className={styles.Button}
                  >
                    Close
                  </BaseUiDrawer.Close>
                </div>
              </div>
              <BaseUiDrawer.Description render={content}>
                You are all caught up. Good job!
              </BaseUiDrawer.Description>
            </BaseUiDrawer.Content>
          </BaseUiDrawer.Popup>
        </BaseUiDrawer.Viewport>
      </BaseUiDrawer.Portal>
    </BaseUiDrawer.Root>
  );
}
