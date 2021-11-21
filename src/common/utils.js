export function newlineToBr(content){
    if(content === null){
        return ""
    }
    console.log(content)
    var replaceString = content.replaceAll('\n', '<br>');
    return replaceString
}

export function fillParentheses(content){

    var fillString = content.replace('( )','(        )')
    return fillString
}