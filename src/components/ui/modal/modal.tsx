"use client";

import { ReactElement } from "react";
import { Dialog, Drawer } from "@/components/ui";
import { useMediaQuery } from "@/hooks";

interface PropTypes {
  title: string;
  content: ReactElement;
  trigger?: ReactElement;
  open?: boolean;
  onClose?: () => void;
}

export function Modal({ title, content, trigger, open, onClose }: PropTypes) {
  const isLargeDevice = useMediaQuery("(min-width : 993px)");

  if (isLargeDevice) {
    return (
      <Dialog
        content={content}
        title={title}
        trigger={trigger}
        open={open}
        onClose={onClose}
      />
    );
  } else {
    return (
      <Drawer
        content={content}
        title={title}
        trigger={trigger}
        open={open}
        onClose={onClose}
      />
    );
  }
}
