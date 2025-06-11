// src/types/global.d.ts

import { SplitText } from 'gsap/all'; // Import SplitText directly

interface Window {
  splitTextInstances?: SplitText[]; // Use the imported type
}