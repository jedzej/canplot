export const animationLoop = (foo: () => void) => {
  let continueLoop = true;
  let request: number | null = null;

  const drawLoop = () => {
    if (!continueLoop) {
      return;
    }
    request = requestAnimationFrame(() => {
      foo();
      drawLoop();
    });
  };

  drawLoop();
  return () => {
    if (request !== null) {
      cancelAnimationFrame(request);
    }
    continueLoop = false;
  };
};
