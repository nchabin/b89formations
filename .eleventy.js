// npm install js-yaml --save-dev
const yaml = require('js-yaml');
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
    const md = new markdownIt();
    eleventyConfig.addPassthroughCopy({
        'src/images':"images",
        'src/css':"css",
        'src/js':"js",

    });
    eleventyConfig.addWatchTarget('src/{css,js}');

    eleventyConfig.addGlobalData("site", {
        baseURL: "https://github.com/nchabin/b89formations"
    });
    // Ajoute le filtre markdown
    eleventyConfig.addFilter("markdown", (content) => {
        if (!content) return "";
        return md.render(content);
    });

    // Add YAML support
    eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));

    return {
        dir: {
            input: 'src',
            output: '_site',
        },
    };
};