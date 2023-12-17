import { decoder } from "tetris-fumen";
import { fumen2Canvas } from "./fumen2Image.js";
import { findAndReplace } from 'mdast-util-find-and-replace';

// remark to use fumen2Image
function fumen2Image() {
    /**
     * replace fumen to image
     * @param {string} fumenBlock
     * @return {{alt: string, type: string, title: string, url: string}}
     */
    function replace(fumenBlock) {
        // console.log(fumenBlock, typeof fumenBlock)
        const [fumen, ...args] = fumenBlock
            .slice(6, -1)
            .replace(/\n/g, ',')
            .split(',');

        // console.log(fumen, "pls")

        const pages = decoder.decode(fumen);
        const canvas = fumen2Canvas(pages[0], 32, true);
        const img = canvas.toDataURL();
        // console.log(img);
        return {
            type: 'image',
            url: img,
            title: 'fumen',
            alt: 'fumen'
        };
    }
    function transform(markdownAST) {
        // use fumen\(([^{}]+)\) to match fumen
        const fumenRegex = /fumen\(([^()]+)\)/g;
        findAndReplace(markdownAST, [fumenRegex, replace]);
        return markdownAST;
    }
    return transform;
}

export default fumen2Image;

