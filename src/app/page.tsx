"use client";

import { useFabric } from "@/hooks/use-fabric";

import { Toolbar } from "@/components/toolbar";

export default function HomePage() {
  const {
    canvasRef,
    setBackgroundImage,
    addText,
    addChillGuy,
    flipImage,
    deleteSelectedObject,
    downloadCanvas,
    changeBackgroundColor,
    currentBackgroundColor,
    canFlipDelete,
  } = useFabric();

  return (
    <div className="py-12 space-y-5 min-h-screen items-center h-full flex-col flex justify-between">
      <canvas ref={canvasRef} className="border rounded-3xl overflow-hidden" />

      <div className="flex items-center flex-col">
        <Toolbar
          setBackgroundImage={setBackgroundImage}
          addText={addText}
          addChillGuy={addChillGuy}
          flipImage={flipImage}
          deleteSelectedObject={deleteSelectedObject}
          downloadCanvas={downloadCanvas}
          changeBackgroundColor={changeBackgroundColor}
          currentBackgroundColor={currentBackgroundColor}
          canFlipDelete={canFlipDelete}
        />
      </div>
    </div>
  );
}
