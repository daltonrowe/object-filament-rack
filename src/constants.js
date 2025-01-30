const jiggle = 0; // between 0 and 1

// random move around variables to ensure
// measurements don't accidentally fit
function constant(value) {
  if (!jiggle) return value;

  const rand = value * jiggle;
  const dir = Math.random() > 0.5 ? 1 : -1;

  return value + rand * dir;
}

export const nothing = 0.03;
export const tolerance = 0.18;

export const postRadius = constant(2.5) - tolerance;
export const postHeight = constant(10);
export const postSpacing = constant(63.5);

export const bodyDepth = constant(3);
export const bodyHeight = constant(150);
export const bodyWidth = constant(20);

export const postToWall = constant(37);

export const rodHeight = constant(50);
export const rodRadius = constant(13);
export const rodOffsetX = constant(50);
export const rodOffsetY = constant(60);

export const holderHeight = constant(10);
export const holderWidth = constant(13);
export const holderRadius = constant(rodRadius + holderWidth);

export const holderLocatorRadius = constant(2);
export const holderLocatorHeight = bodyDepth + nothing;
export const holderLocatorDepth = constant(20);
