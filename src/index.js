import arc from "./arc"

const Arcline=arc;
if (typeof window !== 'undefined') {
    if (window.Arcline) {
      console.warn(`There are multiple versions of Arcline.`);
    } else {
      window.Arcline = Arcline;
    }
}