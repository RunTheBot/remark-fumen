import { fumen2Canvas } from "./fumen2Image.js";
import findAndReplace from 'mdast-util-find-and-replace';

// remark to use fumen2Image
function fumen2Image() {
    function replace(fumenBlock) {
        const fumen = fumenBlock.match[1];
        const canvas = fumen2Canvas(fumen);
        const img = canvas.toDataURL();
        return {
            type: 'image',
            url: img,
            title: 'fumen',
            alt: 'fumen'
        };
    }
    function transform(markdownAST) {
        // use fumen{[^{}]+} to match fumen
        const fumenRegex = /fumen{([^{}]+)}/g;
        findAndReplace(markdownAST, fumenRegex, replace);
    }
    return transform;
}

export default fumen2Image;

