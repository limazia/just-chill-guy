"use client";

import { useState } from "react";
import { HexColorPicker } from "react-colorful";

import { Input } from "@/components/ui/input";

interface PickerColorProps {
  name: string;
  onChange?: (value: string) => void;
  currentBackgroundColor: string;
}

export function PickerColor({ name, onChange, currentBackgroundColor }: PickerColorProps) {
  const [background, setBackground] = useState(currentBackgroundColor);

  const solids = [
    "#E2E2E2",
    "#ff75c3",
    "#ffa647",
    "#ffe83f",
    "#9fff5b",
    "#70e2ff",
    "#cd93ff",
    "#09203f",
  ];

  const handleColor = (newValue: string) => {
    setBackground(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <>
      <div className="flex items-center flex-wrap gap-1">
        {solids.map((color) => (
          <div
            key={color}
            style={{ background: color }}
            className="rounded-md h-6 w-6 cursor-pointer active:scale-105"
            onClick={() => handleColor(color)}
          />
        ))}
      </div>

      <div className="my-3 w-full">
        <HexColorPicker
          color={background}
          onChange={(color) => handleColor(color)}
        />
      </div>

      <Input
        id="custom"
        className="col-span-2 h-8"
        onChange={(e) => handleColor(e.currentTarget.value)}
        name={name}
        value={background} // Set input value from state
      />
    </>
  );
}
