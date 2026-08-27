import { TabItem } from "@/types/ui/tab";
import { Tabs as BaseUiTabs } from "@base-ui/react";
import styles from "./tabs.module.css";

interface PropTypes {
  tabs: TabItem[];
}

export function Tabs({ tabs }: PropTypes) {
  return (
    <BaseUiTabs.Root className={styles.Root} defaultValue="overview">
      <BaseUiTabs.List className={styles.List}>
        {tabs.map((tab) => (
          <BaseUiTabs.Tab
            key={`tab-${tab.id}`}
            className={styles.Tab}
            value={tab.id}
          >
            {tab.label}
          </BaseUiTabs.Tab>
        ))}

        <BaseUiTabs.Indicator className={styles.Indicator} />
      </BaseUiTabs.List>
      <div className={styles.PanelViewport}>
        {tabs.map((tab) => (
          <BaseUiTabs.Panel
            key={`panel-${tab.id}`}
            className={styles.Panel}
            value={tab.id}
          >
            {tab.panel}
          </BaseUiTabs.Panel>
        ))}
      </div>
    </BaseUiTabs.Root>
  );
}
