import { FC, useState } from 'react';
import 'bytemd/dist/index.css';
import gfm from '@bytemd/plugin-gfm';
import highlightSsr from '@bytemd/plugin-highlight-ssr';
import { Editor } from '@bytemd/react';
import { cn } from './locales';
import './styles/github-markdown.css';
import './styles/custom-container.css';
import './styles/code-light.css';
import './styles/code-light.css';
import './index.less';
import { 
    customCodeBlock, 
    rawHTML,
    historyIcon,
    Heading
} from './plugins';

const plugins = [
    gfm({ locale: cn }),
    customCodeBlock(),
    rawHTML(),
    historyIcon(),
    Heading(),
    highlightSsr()
    // Add more plugins here
]


const EditorComponent: FC = () => {
    const [value, setValue] = useState<string>('');


    return (
        <>
            <Editor
            value={value}
            plugins={plugins}
            locale={cn}
            onChange={(v) => {
                setValue(v)
            }}
        />
        </>
    )
}


export default EditorComponent;