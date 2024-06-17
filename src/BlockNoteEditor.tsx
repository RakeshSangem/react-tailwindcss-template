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

interface BlockNoteEditorProps {
  initialContent?: Block[];
}

const BlockNoteEditor: React.FC<BlockNoteEditorProps> = ({
  initialContent = [],
}) => {
  const [editorFocused, setEditorFocused] = useState<boolean>(false);
  const editor = useCreateBlockNote({
    initialContent: initialContent?.length
      ? initialContent
      : [{ type: "paragraph", content: "" }],
  });

  return (
    <div className="bg-white p-3 border inline-block rounded-3xl relative group h-full w-full">
      <button className="rounded-full size-8 grid place-items-center absolute -top-4 shadow-md -left-4 m-2 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
        <DustBin className="size-4 text-black/70" />
      </button>
      <div
        className={`h-full w-full cursor-text rounded-2xl p-2 overflow-y-scroll hover:bg-[#f0f0f0] ${
          !editorFocused ? "bg-[#f0f0f0]" : ""
        } duration-300 transition-colors ease-in-out`}
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
                <CreateLinkButton key={"createLinkButton"} />
              </FormattingToolbar>
            )}
          />
        </BlockNoteView>
      </div>
    </div>
  );
};

export default BlockNoteEditor;
