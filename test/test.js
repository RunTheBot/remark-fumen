import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import plugin from '../dist/index.js'

const processor = remark()
    .use(plugin)
    .use(remarkRehype)
    .use(rehypeStringify)

let input = "fumen(v115@0gAtHeBtGewhAtywCehlwhRpwwR4i0glwhRpR4Ceg0?glwhJeAgH)"

const test = await processor.process(input);

console.log(test)
