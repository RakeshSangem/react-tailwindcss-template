import { useState, useRef, useEffect } from "react";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { lgLayout, mdLayout, smLayout } from "./config";
import GridItem from "./components/Grid/GridItem";
import TipTap from "./TipTap";
import ImageComponent from "./components/ImageComponent";
import TextComponent from "./components/TextComponent";
import SocialCard from "./components/SocialCard";

const ResponsiveGridLayout = WidthProvider(Responsive);

const breakpoints = {
  lg: 1200,
  md: 996,
  sm: 768,
  xs: 480,
  xxs: 0,
};

// const initialLayoutConfig = [
//   {
//     i: "item1",
//     x: 0,
//     y: 0,
//     w: 2,
//     h: 2,
//     minW: 1,
//     minH: 1,
//     type: "SocialCardComponent",
//   },
//   {
//     i: "item2",
//     x: 1,
//     y: 0,
//     w: 1,
//     h: 1,
//     minW: 1,
//     minH: 1,
//     type: "ImageComponent",
//     src: "https://source.unsplash.com/random",
//   },
//   {
//     i: "item3",
//     x: 2,
//     y: 0,
//     w: 2,
//     h: 0.5,
//     minW: 2,
//     minH: 0.5,
//     type: "TextComponent",
//     text: "Hello World",
//   },
//   {
//     i: "item4",
//     x: 3,
//     y: 0,
//     w: 2,
//     h: 0.5,
//     minW: 2,
//     minH: 0.5,
//     type: "TipTap",
//   },
//   {
//     i: "item5",
//     x: 0,
//     y: 1,
//     w: 1,
//     h: 1,
//     minW: 1,
//     minH: 1,
//     type: "SocialCardComponent",
//   },
//   {
//     i: "item6",
//     x: 1,
//     y: 1,
//     w: 1,
//     h: 1,
//     minW: 1,
//     minH: 1,
//     type: "ImageComponent",
//     src: "https://source.unsplash.com/random",
//   },
//   {
//     i: "item7",
//     x: 2,
//     y: 1,
//     w: 1,
//     h: 1,
//     minW: 1,
//     minH: 1,
//     type: "TextComponent",
//     text: "Hello World",
//   },
//   {
//     i: "item8",
//     x: 3,
//     y: 1,
//     w: 2,
//     h: 2,
//     minW: 2,
//     minH: 0.5,
//     type: "TipTap",
//   },
// ];

const GRID_WIDTH = 1024;
const COLUMNS_COUNT = 4;
const GAP = 50;

const GridLayout = () => {
  // const initialLayout = JSON.parse(localStorage?.getItem("layout")) || lgLayout;

  const [layout, setLayout] = useState<Layout[]>(lgLayout);
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>("lg");

  const gridRef = useRef<GridLayout>(null);

  const onDropHandler = (layout: any, layoutItem: any) => {
    layoutItem.i = `item${layout.length + 1}`;
    layoutItem.w = 2;
    layoutItem.h = 3;
    layoutItem.x = 0;
    layoutItem.y = Infinity;
    layoutItem.type = "NewComponent"; // Assign a default type or handle appropriately
    setLayout((prevLayout) => [...prevLayout, layoutItem]);
  };

  const renderComponent = (item: any) => {
    console.log("Item from renderComponent", item);
    switch (item.type) {
      case "TipTap":
        return <TipTap {...item} />;
      case "ImageComponent":
        return <ImageComponent src={item.src} {...item} />;
      case "TextComponent":
        return <TextComponent text={item.text} {...item} />;
      case "SocialCardComponent":
        return <SocialCard {...item} />;
      default:
        return <span>something</span>;
    }
  };

  const onBreakpointChange = (newBreakpoint: string) => {
    setCurrentBreakpoint(newBreakpoint);
  };

  return (
    <section className="flex min-h-screen">
      <div className="w-60 bg-gray-200 border-r min-h-screen p-2">
        <div className="w-full p-4 border rounded-md bg-white shadow-sm">
          <h3 className="text-xl font-semibold">Note</h3>
        </div>
      </div>
      <section className="min-h-screen flex-1 relative">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <ResponsiveGridLayout
          ref={gridRef}
          layouts={{ lg: layout, md: mdLayout, sm: smLayout }}
          breakpoints={breakpoints}
          cols={{ lg: 8, md: 4, sm: 2, xs: 1, xxs: 1 }}
          rowHeight={(GRID_WIDTH - COLUMNS_COUNT * GAP) / COLUMNS_COUNT}
          onDrop={onDropHandler}
          margin={[GAP, GAP]}
          width={GRID_WIDTH}
          isDroppable={true}
          isDraggable={false}
          autoSize={false}
          allowOverlap={false}
          onBreakpointChange={onBreakpointChange}
        >
          {layout.map((item) => (
            <GridItem
              key={item.i}
              ref={gridRef}
              item={item}
              setLayout={setLayout}
              data-grid={{
                ...item,
                static: false,
                isDraggable: true,
                isResizable: true,
              }}
            >
              {renderComponent(item)}
            </GridItem>
          ))}
        </ResponsiveGridLayout>
      </section>
    </section>
  );
};

export default GridLayout;

// import { useState, useRef } from "react";
// import { Responsive, WidthProvider } from "react-grid-layout";
// import "react-grid-layout/css/styles.css";
// import "react-resizable/css/styles.css";
// import { lgLayout, mdLayout, smLayout } from "./config";
// import GridItem from "./GridItem";
// import TipTap from "./TipTap";
// import ImageComponent from "./components/ImageComponent";
// import TextComponent from "./components/TextComponent";
// import SocialCard from "./components/SocialCard";

// const GridLayout = WidthProvider(Responsive);

// const breakpoints = {
//   lg: 1200,
//   md: 996,
//   sm: 768,
//   xs: 480,
//   xxs: 0,
// };

// const initialLayoutConfig = [
//   {
//     i: "item1",
//     x: 0,
//     y: 0,
//     w: 1,
//     h: 1,
//     minW: 1,
//     minH: 1,
//     type: "SocialCardComponent",
//   },
//   {
//     i: "item2",
//     x: 1,
//     y: 0,
//     w: 1,
//     h: 1,
//     minW: 1,
//     minH: 1,
//     type: "ImageComponent",
//     src: "https://source.unsplash.com/random",
//   },
//   {
//     i: "item3",
//     x: 2,
//     y: 0,
//     w: 2,
//     h: 0.5,
//     minW: 2,
//     minH: 0.5,
//     type: "TextComponent",
//     text: "Hello World",
//   },
//   {
//     i: "item4",
//     x: 3,
//     y: 0,
//     w: 2,
//     h: 0.5,
//     minW: 2,
//     minH: 0.5,
//     type: "TipTap",
//   },
//   {
//     i: "item5",
//     x: 0,
//     y: 1,
//     w: 1,
//     h: 1,
//     minW: 1,
//     minH: 1,
//     type: "SocialCardComponent",
//   },
//   {
//     i: "item6",
//     x: 1,
//     y: 1,
//     w: 1,
//     h: 1,
//     minW: 1,
//     minH: 1,
//     type: "ImageComponent",
//     src: "https://source.unsplash.com/random",
//   },
//   {
//     i: "item7",
//     x: 2,
//     y: 1,
//     w: 1,
//     h: 1,
//     minW: 1,
//     minH: 1,
//     type: "TextComponent",
//     text: "Hello World",
//   },
//   {
//     i: "item8",
//     x: 3,
//     y: 1,
//     w: 2,
//     h: 2,
//     minW: 2,
//     minH: 0.5,
//     type: "TipTap",
//   },
// ];

// const GRID_WIDTH = 1024;
// const COLUMNS_COUNT = 8;
// const GAP = 40;

// const ResponsiveGrid = () => {
//   const [layout, setLayout] = useState(initialLayoutConfig);

//   const gridRef = useRef<GridLayout>(null);

//   const onDropHandler = (layout: any, layoutItem: any) => {
//     layoutItem.i = `item${layout.length + 1}`;
//     layoutItem.w = 2;
//     layoutItem.h = 3;
//     layoutItem.x = 0;
//     layoutItem.y = Infinity;
//     setLayout((prevLayout) => [...prevLayout, layoutItem]);
//   };

//   const calculateRowHeight = () => {
//     const width = window.innerWidth;

//     if (width >= breakpoints.lg) {
//       return 1200 / 8; // Assuming 8 columns at lg breakpoint
//     } else if (width >= breakpoints.md) {
//       return 1200 / 4; // Assuming 4 columns at md breakpoint
//     } else {
//       return 1200 / 2; // Assuming 2 columns at sm breakpoint
//     }
//   };

//   const renderComponent = (item: any) => {
//     console.log("Item from renderComponent", item);
//     switch (item.type) {
//       case "TipTap":
//         return <TipTap />;
//       case "ImageComponent":
//         return <ImageComponent src={item.src} />;
//       case "TextComponent":
//         return <TextComponent text={item.text} />;
//       case "SocialCardComponent":
//         return (
//           <SocialCard
//             platform={""}
//             name={""}
//             description={""}
//             followers={[]}
//             mainImage={""}
//             profileImage={""}
//           />
//         );
//       default:
//         return <span>something</span>;
//     }
//   };

//   const handleLayoutChange = (updatedLayout: any) => {
//     setLayout(
//       updatedLayout.map((item: any) => ({
//         ...item,
//         w: item.w,
//         h: item.h,
//       }))
//     );
//   };

//   const columnsAtBreakPoint = { lg: 8, md: 4, sm: 2, xs: 1, xxs: 1 };

//   return (
//     <section className="flex min-h-screen">
//       <div className="w-60 bg-gray-200 border-r min-h-screen p-2">
//         <div className="w-full p-4 border rounded-md bg-white shadow-sm">
//           <h3 className="text-xl font-semibold">Note</h3>
//         </div>
//       </div>
//       <section className="min-h-screen flex-1 relative">
//         <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
//         <GridLayout
//           ref={gridRef}
//           layouts={{
//             lg: lgLayout,
//             md: mdLayout,
//             sm: smLayout,
//           }}
//           breakpoints={breakpoints}
//           cols={columnsAtBreakPoint}
//           rowHeight={(GRID_WIDTH - COLUMNS_COUNT * GAP) / COLUMNS_COUNT}
//           onDrop={onDropHandler}
//           onLayoutChange={handleLayoutChange}
//           margin={[GAP, GAP]}
//           compactType={"vertical"}
//           width={GRID_WIDTH}
//         >
//           {layout.map((item) => {
//             console.log("Item from the map", item);
//             return (
//               <GridItem
//                 key={item.i}
//                 item={item} // Pass item directly to GridItem
//                 ref={gridRef}
//               >
//                 {renderComponent(item)}
//               </GridItem>
//             );
//           })}
//         </GridLayout>
//       </section>
//     </section>
//   );
// };

// export default ResponsiveGrid;

// import React, { useState, useRef } from "react";
// import { Responsive, WidthProvider } from "react-grid-layout";
// import "react-grid-layout/css/styles.css";
// import "react-resizable/css/styles.css";
// import { lgLayout, mdLayout, smLayout } from "./config";
// import GridItem from "./GridItem";
// import TipTap from "./TipTap"; // Import your components here
// // import GridCard from "./GridCard"; // Assuming this is your GridCard component
// import ImageComponent from "./components/ImageComponent"; // Import your components here
// import TextComponent from "./components/TextComponent"; // Import your components here
// import SocialCardComponent from "./components/SocialCard"; // Import your components here

// const GridLayout = WidthProvider(Responsive);

// const components = {
//   TipTap,
//   ImageComponent,
//   TextComponent,
//   SocialCardComponent,
// };

// const breakpoints = {
//   lg: 1200,
//   md: 996,
//   sm: 768,
//   xs: 480,
//   xxs: 0,
// };

// const initialLayoutConfig = [
//   {
//     i: "item1",
//     x: 0,
//     y: 0,
//     w: 1,
//     h: 1,
//     minW: 1,
//     minH: 1,
//     type: "SocialCardComponent",
//   },
//   {
//     i: "item2",
//     x: 1,
//     y: 0,
//     w: 1,
//     h: 1,
//     minW: 1,
//     minH: 1,
//     type: "ImageComponent",
//     src: "https://source.unsplash.com/random",
//   },
//   {
//     i: "item3",
//     x: 2,
//     y: 0,
//     w: 2,
//     h: 0.5,
//     minW: 2,
//     minH: 0.5,
//     type: "TextComponent",
//     text: "Hello World",
//   },
//   {
//     i: "item4",
//     x: 3,
//     y: 0,
//     w: 2,
//     h: 0.5,
//     minW: 2,
//     minH: 0.5,
//     type: "TipTap",
//   },
//   {
//     i: "item5",
//     x: 0,
//     y: 1,
//     w: 1,
//     h: 1,
//     minW: 1,
//     minH: 1,
//     type: "SocialCardComponent",
//   },
//   {
//     i: "item6",
//     x: 1,
//     y: 1,
//     w: 1,
//     h: 1,
//     minW: 1,
//     minH: 1,
//     type: "ImageComponent",
//     src: "https://source.unsplash.com/random",
//   },
//   {
//     i: "item7",
//     x: 2,
//     y: 1,
//     w: 1,
//     h: 1,
//     minW: 1,
//     minH: 1,
//     type: "TextComponent",
//     text: "Hello World",
//   },
//   {
//     i: "item8",
//     x: 3,
//     y: 1,
//     w: 2,
//     h: 2,
//     minW: 2,
//     minH: 0.5,
//     type: "TipTap",
//   },
// ];

// const GRID_WIDTH = 1024;
// const COLUMNS_COUNT = 8;
// const GAP = 40;

// const ResponsiveGrid = () => {
//   const [layout, setLayout] = useState(initialLayoutConfig);

//   const gridRef = useRef<GridLayout>(null);

//   const onDropHandler = (layout: any, layoutItem: any) => {
//     layoutItem.i = `item${layout.length + 1}`;
//     layoutItem.w = 2;
//     layoutItem.h = 3;
//     layoutItem.x = 0;
//     layoutItem.y = Infinity;
//     setLayout((prevLayout) => [...prevLayout, layoutItem]);
//   };

//   const calculateRowHeight = () => {
//     const width = window.innerWidth;

//     if (width >= breakpoints.lg) {
//       return 1200 / 8; // Assuming 8 columns at lg breakpoint
//     } else if (width >= breakpoints.md) {
//       return 1200 / 4; // Assuming 4 columns at md breakpoint
//     } else {
//       return 1200 / 2; // Assuming 2 columns at sm breakpoint
//     }
//   };

//   const handleLayoutChange = (updatedLayout: any) => {
//     setLayout(
//       updatedLayout.map((item: any) => ({
//         ...item,
//         w: item.w,
//         h: item.h,
//       }))
//     );
//   };

//   const columnsAtBreakPoint = { lg: 8, md: 4, sm: 2, xs: 1, xxs: 1 };

//   return (
//     <section className="flex min-h-screen">
//       <div className="w-60 bg-gray-200 border-r min-h-screen p-2">
//         <div
//           draggable
//           className="w-full p-4 border rounded-md bg-white shadow-sm"
//         >
//           <h3 className="text-xl font-semibold">Note</h3>
//         </div>
//       </div>
//       <section className="min-h-screen flex-1 relative">
//         <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
//         <GridLayout
//           ref={gridRef}
//           layouts={{
//             lg: lgLayout,
//             md: mdLayout,
//             sm: smLayout,
//           }}
//           breakpoints={breakpoints}
//           cols={columnsAtBreakPoint}
//           rowHeight={(GRID_WIDTH - COLUMNS_COUNT * GAP) / COLUMNS_COUNT}
//           onDrop={onDropHandler}
//           onLayoutChange={handleLayoutChange}
//           margin={[GAP, GAP]}
//           compactType={"vertical"}
//           width={GRID_WIDTH}
//         >
//           {layout.map((item) => (
//             <GridItem
//               key={item.i}
//               {...item}
//               value={item.i}
//               size={{ w: item.w, h: item.h }}
//               gridRef={gridRef}
//             >
//               {React.createElement(components[item.type], { ...item })}
//             </GridItem>
//           ))}
//         </GridLayout>
//       </section>
//     </section>
//   );
// };

// export default ResponsiveGrid;
