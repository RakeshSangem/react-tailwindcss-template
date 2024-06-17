import React from "react";

const ResizeHandle = React.forwardRef<
  HTMLInputElement,
  { handleAxis?: string }
>((props, ref) => {
  const { handleAxis, ...restProps } = props;

  console.log({
    handleAxis,
    restProps,
  });
  return (
    <div
      ref={ref}
      className={`resizeHandle absolute bottom-0 right-0 handle-${handleAxis} cursor-${handleAxis}-resize`}
      {...restProps}
    >
      <svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" fill="none">
        <path
          fill="currentColor"
          d="M22 22h-2v-2h2zm0-4h-2v-2h2zm-4 4h-2v-2h2zm0-4h-2v-2h2zm-4 4h-2v-2h2zm8-8h-2v-2h2z"
        ></path>
      </svg>
    </div>
  );
});

export default ResizeHandle;

// export function ResizeHandle(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" {...props}>
//       <path
//         fill="currentColor"
//         d="M22 22h-2v-2h2zm0-4h-2v-2h2zm-4 4h-2v-2h2zm0-4h-2v-2h2zm-4 4h-2v-2h2zm8-8h-2v-2h2z"
//       ></path>
//     </svg>
//   );
// }
