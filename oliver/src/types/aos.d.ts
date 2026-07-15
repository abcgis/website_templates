// Minimal type declaration for the `aos` package (it ships no bundled types).
declare module "aos" {
  export interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    disable?: boolean | string | (() => boolean);
    startEvent?: string;
    initClassName?: string;
    animatedClassName?: string;
    useClassNames?: boolean;
    disableMutationObserver?: boolean;
    debounceDelay?: number;
    throttleDelay?: number;
    [key: string]: unknown;
  }

  export function init(options?: AosOptions): void;
  export function refresh(options?: AosOptions): void;
  export function refreshHard(options?: AosOptions): void;

  const AOS: {
    init: typeof init;
    refresh: typeof refresh;
    refreshHard: typeof refreshHard;
  };
  export default AOS;
}
