export function newlineToBr(content){
    console.log(content)
    var replaceString = content.replace('/n', '<br>');
    return replaceString
}