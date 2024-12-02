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
  } = useFabric();

  return (
    <>
      <div className="px-2 space-y-10 min-h-screen items-center h-full flex-col flex justify-between">
        <div></div>
        <canvas
          ref={canvasRef}
          className="border rounded-3xl overflow-hidden "
        />
        <div className="pt-10 pb-8 space-y-5 flex items-center flex-col">
          <Toolbar
            setBackgroundImage={setBackgroundImage}
            addText={addText}
            addChillGuy={addChillGuy}
            flipImage={flipImage}
            deleteSelectedObject={deleteSelectedObject}
            downloadCanvas={downloadCanvas}
            changeBackgroundColor={changeBackgroundColor}
            currentBackgroundColor={currentBackgroundColor}
          />
        </div>
      </div>
    </>
  );
}
