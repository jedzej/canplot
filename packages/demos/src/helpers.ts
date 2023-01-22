export const animationLoop = (foo: () => void) => {
  const drawLoop = () =>
    requestAnimationFrame(() => {
      foo();
      drawLoop();
    });

  drawLoop();
};
