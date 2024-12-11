import { FC, useState } from 'react';
import 'bytemd/dist/index.css';
import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight';
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
    highlight()
    // Add more plugins here
]

const sanitize = (schema:any) => {
    schema.protocols.src.push('data');
    schema.tagNames.push('center');
    schema.tagNames.push('iframe');
    schema.tagNames.push('script');
    schema.attributes['*'].push('style');
    schema.attributes['*'].push('src');
    schema.attributes['*'].push('scrolling');
    schema.attributes['*'].push('border');
    schema.attributes['*'].push('frameborder');
    schema.attributes['*'].push('framespacing');
    schema.attributes['*'].push('allowfullscreen');
    schema.strip = [];
    return schema;
};


const EditorComponent: FC = () => {
    const [value, setValue] = useState<string>('');


    return (
        <>
            <Editor
                value={value}
                plugins={plugins}
                locale={cn}
                sanitize={sanitize}
                onChange={(v) => {
                    setValue(v)
                }}
            />
        </>
    )
}


export default EditorComponent;