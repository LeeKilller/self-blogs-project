import { FC } from 'react';

import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight';
import { Viewer } from '@bytemd/react';

import { theme } from 'antd';

import { useTheme } from '@/hooks';

import {
    customCodeBlock,
    rawHTML,
    Heading
} from './plugins';
import './styles/github-markdown.css';
import './styles/custom-container.css';
import './styles/code-light.css';
import './styles/code-dark.css';
import './index.less';
// import "katex/dist/katex.min.css";

import { content } from './data';


const plugins = [
    gfm(),
    customCodeBlock(),
    rawHTML(),
    Heading(),
    highlight()
    // Add more plugins here
]


const sanitize = (schema: any) => {
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


const PostView: FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { curTheme } = useTheme();

    return (
        <div
            className={curTheme}
            style={{
                backgroundColor: colorBgContainer,
                padding: 30
            }}
        >
            <Viewer
                value={content}
                plugins={plugins}
                sanitize={sanitize}
            />
        </div>
    )
}

export default PostView;