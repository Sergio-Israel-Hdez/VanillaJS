export const OnClick = (template) => {
    const templateStr = template.toString().replace(/"/g,"'");

    return `onclick=" ${templateStr.substring(
        templateStr.indexOf('{')+1,
        templateStr.lastIndexOf('}')
    )}"`;
}