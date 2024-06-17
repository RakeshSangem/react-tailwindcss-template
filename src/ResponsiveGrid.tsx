import GridLayout from "react-grid-layout";
// import { Responsive } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import BlockNoteEditor from "./BlockNoteEditor";
import Tiptap from "./TipTap";
import { useState } from "react";
import Test from "./Test";
// import ResizeHandle from "./ResizeHandle";

function ResponsiveGrid() {
  const [isDraggable, setIsDraggable] = useState(true);

  const layoutConfig = [
    { i: "item1", x: 0, y: 0, w: 2, h: 3 },
    { i: "item2", x: 2, y: 0, w: 4, h: 3 },
    { i: "item3", x: 6, y: 0, w: 2, h: 3 },
  ];

  return (
    <GridLayout
      className="example-layout"
      layout={layoutConfig}
      cols={12}
      rowHeight={40}
      width={1200}
      isDraggable={isDraggable}
      isDroppable={true}
    >
      <div
        key="item1"
        className="border react-grid-item  rounded-3xl overflow-hidden p-4 bg-white shadow-md"
        onMouseDown={(e) => console.log(e)}
      >
        <Test />
      </div>
      <div key="item2" className="select-none">
        <Tiptap setIsDraggable={setIsDraggable} />
      </div>
      <div
        key="item3"
        className="react-grid-item rounded-3xl bg-white shadow-md"
      >
        <BlockNoteEditor />
      </div>
    </GridLayout>
  );
}

// function GridCard() {
//     return <div className="border "></div>
//   }

export default ResponsiveGrid;
