import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import {
  BasicTextStyleButton,
  CreateLinkButton,
  FileCaptionButton,
  FileReplaceButton,
  FormattingToolbar,
  FormattingToolbarController,
  useCreateBlockNote,
} from "@blocknote/react";
import { useState } from "react";
import { DustBin } from "./DustBin";
import { InlineContent, TableContent } from "@blocknote/core";

type Block = {
  id: string;
  type: string;
  props: Record<string, boolean | number | string>;
  content: InlineContent[] | TableContent | undefined;
  children: Block[];
};

export default function App() {
  const [editorFocused, setEditorFocused] = useState<boolean>(false);
  const [blocks, setBlocks] = useState<Block[]>([]);

  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: "",
      },
    ],
  });

  return (
    <section
      className="grid place-items-center min-h-screen bg-gray-100"
      draggable
    >
      {/* blogck quote component */}
      <div className="bg-white p-3 shadow-inner inline-block rounded-[28px] relative group">
        <button className="rounded-full size-8 grid place-items-center absolute -top-4 shadow-md -left-4 m-2 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          <DustBin className="size-4 text-black/70" />
        </button>
        <div
          // onClick={() => editor.focus()}
          className={`size-80 border-4 outline-2 cursor-text outline-white outline p-3 border-white rounded-2xl overflow-y-scroll hover:bg-[#f0f0f0] ${editorFocused ? "bg-[#f0f0f0]" : ""} duration-300 transition-colors ease-in-out`}
        >
          <BlockNoteView
            theme="light"
            editor={editor}
            sideMenu={false}
            formattingToolbar={true}
          >
            <FormattingToolbarController
              formattingToolbar={() => (
                <FormattingToolbar>
                  {/* <BlockTypeSelect key={"blockTypeSelect"} /> */}

                  {/* Extra button to toggle blue text & background */}
                  {/* <BlueButton key={"customButton"} /> */}

                  <FileCaptionButton key={"fileCaptionButton"} />
                  <FileReplaceButton key={"replaceFileButton"} />

                  <BasicTextStyleButton
                    basicTextStyle={"bold"}
                    key={"boldStyleButton"}
                  />
                  <BasicTextStyleButton
                    basicTextStyle={"italic"}
                    key={"italicStyleButton"}
                  />
                  <BasicTextStyleButton
                    basicTextStyle={"underline"}
                    key={"underlineStyleButton"}
                  />
                  <BasicTextStyleButton
                    basicTextStyle={"strike"}
                    key={"strikeStyleButton"}
                  />
                  {/* Extra button to toggle code styles */}
                  {/* <BasicTextStyleButton
              key={"codeStyleButton"}
              basicTextStyle={"code"}
            /> */}

                  {/* <TextAlignButton
              textAlignment={"left"}
              key={"textAlignLeftButton"}
            />
            <TextAlignButton
              textAlignment={"center"}
              key={"textAlignCenterButton"}
            />
            <TextAlignButton
              textAlignment={"right"}
              key={"textAlignRightButton"}
            /> */}

                  {/* <ColorStyleButton key={"colorStyleButton"} /> */}

                  {/* <NestBlockButton key={"nestBlockButton"} /> */}
                  {/* <UnnestBlockButton key={"unnestBlockButton"} /> */}

                  <CreateLinkButton key={"createLinkButton"} />
                </FormattingToolbar>
              )}
            />
          </BlockNoteView>
        </div>
      </div>
    </section>
  );
}
