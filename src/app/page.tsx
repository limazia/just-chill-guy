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
    <main className="w-full min-h-screen h-full py-12 flex flex-col items-center justify-center space-y-8 mx-auto">
      <canvas
        ref={canvasRef}
        className="border rounded-3xl overflow-hidden mx-auto"
      />

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

      <a
        className="text-sm text-muted-foreground"
        href="https://github.com/limazia"
        target="_blank"
      >
        criado por @limazia
      </a>
    </main>
  );
}
