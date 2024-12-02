"use client";

import { useCallback } from "react";
import { type Accept, useDropzone } from "react-dropzone";
import { Canvas } from "fabric";
import { CopyPlus, Download, FlipHorizontal, Trash2, Type } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PickerColor } from "@/components/ui/picker-color";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ToolbarProps {
  setBackgroundImage: (imageUrl: string) => Promise<Canvas | null>;
  addText: () => void;
  addChillGuy: () => void;
  flipImage: (direction: "horizontal" | "vertical") => void;
  deleteSelectedObject: () => void;
  downloadCanvas: () => void;
  changeBackgroundColor: (color: string) => void;
  currentBackgroundColor: string;
}

export function Toolbar({
  setBackgroundImage,
  addText,
  addChillGuy,
  flipImage,
  deleteSelectedObject,
  downloadCanvas,
  changeBackgroundColor,
  currentBackgroundColor,
}: ToolbarProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const dataUrl = URL.createObjectURL(acceptedFiles[0]);
        setBackgroundImage(dataUrl).catch((error) => {
          console.error("Error setting background image:", error);
        });
      }
    },
    [setBackgroundImage]
  );

  const accept: Accept = {
    "image/*": [".jpg", ".jpeg", ".png"],
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    maxFiles: 1,
  });

  return (
    <div className="max-w-[100vw] px-5">
      <div className="no-scrollbar w-full overflow-x-auto rounded-full border bg-white sm:overflow-visible">
        <div className="flex items-center space-x-4 px-4 py-2 text-2xl md:justify-center">
          <Button
            {...getRootProps()}
            variant="outline"
            size={"icon"}
            className="rounded-full shrink-0 hover:animate-jelly"
            tooltip="Fundo"
          >
            <input {...getInputProps()} />
            <CopyPlus className="size-4" />
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size={"icon"}
                className="rounded-full shrink-0 hover:animate-jelly"
                style={{ backgroundColor: currentBackgroundColor }}
                tooltip="Cor"
              />
            </PopoverTrigger>
            <PopoverContent
              className="mt-3 w-fit p-4 bg-white rounded-md"
              align="start"
            >
              <PickerColor
                currentBackgroundColor={currentBackgroundColor}
                name="color"
                onChange={(color: string) => {
                  return changeBackgroundColor(color);
                }}
              />
            </PopoverContent>
          </Popover>
          <div className="h-5">
            <div className="mx-1.5 h-full w-px bg-[#e5e5e5]"></div>
          </div>
          <Button
            onClick={addChillGuy}
            variant="outline"
            size={"icon"}
            className="rounded-full shrink-0 hover:animate-jelly"
            tooltip="Cara tranquilo"
          >
            <img src="chillguy.png" className="size-6" />
          </Button>
          <Button
            onClick={() => flipImage("horizontal")}
            variant="outline"
            size={"icon"}
            className="rounded-full shrink-0 hover:animate-jelly"
            tooltip="Virar"
          >
            <FlipHorizontal className="size-4" />
          </Button>
          <div className="h-5">
            <div className="mx-1.5 h-full w-px bg-[#e5e5e5]"></div>
          </div>
          <Button
            onClick={addText}
            variant="outline"
            size={"icon"}
            className="rounded-full shrink-0 hover:animate-jelly"
            tooltip="Texto"
          >
            <Type className="size-4" />
          </Button>
          <div className="h-5">
            <div className="mx-1.5 h-full w-px bg-[#e5e5e5]"></div>
          </div>
          <Button
            onClick={deleteSelectedObject}
            variant="outline"
            size={"icon"}
            className="rounded-full shrink-0 hover:animate-jelly"
            tooltip="Excluir"
          >
            <Trash2 className="size-4 text-red-600" />
          </Button>
          <div className="h-5">
            <div className="mx-1.5 h-full w-px bg-[#e5e5e5]"></div>
          </div>
          <Button
            onClick={downloadCanvas}
            variant="outline"
            size={"icon"}
            className="rounded-full shrink-0 hover:animate-jelly"
            tooltip="Download"
          >
            <Download className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
