import { getHighlighter } from 'shiki';
export const shikiPlugin = ({ theme = 'nord', langs, } = {}) => ({
    name: '@vuepress/plugin-shiki',
    extendsMarkdown: async (md) => {
        const highlighter = await getHighlighter({
            theme,
            langs,
        });
        md.options.highlight = (code, lang) => highlighter.codeToHtml(code, {
            lang,
        });
    },
});
