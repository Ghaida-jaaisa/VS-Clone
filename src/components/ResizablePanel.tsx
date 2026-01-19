import type { ReactNode } from "react";
import { Group, Panel, Separator } from "react-resizable-panels";

interface IProps {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  showLeftPanel: boolean;
}
const ResizablePanel = ({ leftPanel, rightPanel, showLeftPanel }: IProps) => {
  return (
    <Group  orientation="horizontal" autoSave="condition">
      {showLeftPanel && (
        <>
          <Panel minSize="0%" collapsible>{leftPanel}</Panel>
          <Separator className="border-r-2 border-[#ffffff1f] cursor-" />
        </>
      )}
      <Panel minSize="10%">{rightPanel}</Panel>
    </Group>
  );
};

export default ResizablePanel;
