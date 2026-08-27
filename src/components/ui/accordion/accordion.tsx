import * as React from "react";
import { Accordion as BaseUiAccordion } from "@base-ui/react/accordion";
import styles from "./index.module.css";
import { AccordionItem } from "@/types/ui/accordion";

interface PropTypes {
  items: AccordionItem[];
}

export function Accordion({ items }: PropTypes) {
  return (
    <BaseUiAccordion.Root className={styles.Accordion}>
      {items.map((item) => (
        <BaseUiAccordion.Item key={item.id} className={styles.Item}>
          <BaseUiAccordion.Header className={styles.Header}>
            <BaseUiAccordion.Trigger className={styles.Trigger}>
              {item.header}
              <PlusIcon className={styles.Icon} />
            </BaseUiAccordion.Trigger>
          </BaseUiAccordion.Header>
          <BaseUiAccordion.Panel className={styles.Panel}>
            <div className={styles.Content}>{item.content}</div>
          </BaseUiAccordion.Panel>
        </BaseUiAccordion.Item>
      ))}
    </BaseUiAccordion.Root>
  );
}

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M1.5 8h13M8 14.5v-13" />
    </svg>
  );
}
