import React from "react";

interface GridItemToolbarProps {
  onIncreaseWidth: () => void;
  onDecreaseWidth: () => void;
  onIncreaseHeight: () => void;
  onDecreaseHeight: () => void;
}

const GridItemToolbar: React.FC<GridItemToolbarProps> = ({
  onIncreaseWidth,
  onDecreaseWidth,
  onIncreaseHeight,
  onDecreaseHeight,
}) => {
  return (
    <div className="grid-item-toolbar absolute top-0 right-0 flex space-x-2 p-1">
      <button
        className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
        onClick={onIncreaseWidth}
      >
        Increase Width
      </button>
      <button
        className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
        onClick={onDecreaseWidth}
      >
        Decrease Width
      </button>
      <button
        className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
        onClick={onIncreaseHeight}
      >
        Increase Height
      </button>
      <button
        className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
        onClick={onDecreaseHeight}
      >
        Decrease Height
      </button>
    </div>
  );
};

export default GridItemToolbar;
