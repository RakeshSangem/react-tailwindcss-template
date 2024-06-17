import React, { useState, useEffect } from "react";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
import "react-resizable/css/styles.css";

interface Size {
  width: number;
  height: number;
}

interface ResizableCardProps {
  allowedSizes: Size[];
}

const ResizableCard: React.FC<ResizableCardProps> = ({ allowedSizes }) => {
  const initialSize = allowedSizes[0];
  const [size, setSize] = useState<Size>({
    width: initialSize.width,
    height: initialSize.height,
  });
  const [animatingSize, setAnimatingSize] = useState<Size>(size);
  console.log(size, animatingSize);

  const onResize = (
    _event: React.SyntheticEvent,
    { size: newSize }: ResizeCallbackData
  ) => {
    setSize(newSize);
  };

  const onResizeStop = (
    _event: React.SyntheticEvent,
    { size: newSize }: ResizeCallbackData
  ) => {
    // Find the closest allowed size
    let closestSize = allowedSizes[0];
    let closestDistance = Infinity;

    allowedSizes.forEach((allowedSize) => {
      const distance =
        Math.abs(allowedSize.width - newSize.width) +
        Math.abs(allowedSize.height - newSize.height);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestSize = allowedSize;
      }
    });

    setSize(closestSize);
    setAnimatingSize(closestSize);
  };

  useEffect(() => {
    setAnimatingSize(size);
  }, [size]);

  return (
    <ResizableBox
      width={size.width}
      height={size.height}
      minConstraints={[allowedSizes[0].width, allowedSizes[0].height]}
      maxConstraints={[
        allowedSizes[allowedSizes.length - 1].width,
        allowedSizes[allowedSizes.length - 1].height,
      ]}
      onResize={onResize}
      onResizeStop={onResizeStop}
    >
      <div
        style={{
          width: size.width,
          height: size.height,
          border: "1px solid black",
        }}
      >
        Resizable Card
      </div>
    </ResizableBox>
  );
};

const App: React.FC = () => {
  const allowedSizes: Size[] = [
    { width: 100, height: 100 },
    { width: 150, height: 150 },
    { width: 200, height: 200 },
    { width: 250, height: 250 },
  ];

  return (
    <div>
      <ResizableCard allowedSizes={allowedSizes} />
    </div>
  );
};

export default App;
