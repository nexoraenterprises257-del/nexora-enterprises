export const DURATION = 0.6;
export const EASE = [0.16, 1, 0.3, 1] as const;

export function transition(delay = 0, duration = DURATION) {
  return { duration, delay, ease: EASE };
}

export const LONG_SPIN_DURATION = 20; // seconds for background orbital motion
