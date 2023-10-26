declare module 'aos' {
    export function init(options?: AosOptions): void;
  
    interface AosOptions {
      // Define the options you want to use
      duration?: number;
      easing?: string;
      offset?: number;
      delay?: number;
      anchorPlacement?: string;
      aosOnce?: string;
      // Add more options as needed
    }
  }
  