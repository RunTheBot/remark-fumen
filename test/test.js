import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import plugin from '../src/index.js'

const processor = remark()
    .use(plugin)
    .use(remarkRehype)
    .use(rehypeStringify)

let input = "fumen{v115@bhYpKeAgH}"

const { contents } = await processor.process(input);

console.log(contents)