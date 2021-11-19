export function newlineToBr(content){
    console.log(content)
    var replaceString = content.replace('/n', '<br>');
    return replaceString
}

export function fillParentheses(content){

    var fillString = content.replace('( )','(        )')
    return fillString
}