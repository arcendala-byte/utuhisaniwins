/** Critically damped springs — Apple-style UI motion (no overshoot by default). */
export const springSnappy = {
  type: "spring" as const,
  bounce: 0,
  duration: 0.45,
};

export const springUI = {
  type: "spring" as const,
  bounce: 0,
  duration: 0.55,
};

export const easeOut = [0.22, 1, 0.36, 1] as const;
