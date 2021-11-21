import marble1 from '../images/marblenum/marble_num1.png'

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

export function changeMarbleNum(content){
    var returnvalue = []
    switch(content.charAt(0)){
        case '①':{ 
            var bubble = <div className='marble1'>{' 1 '}</div>
            var rep = content.replace('①','');
            returnvalue.push(bubble)
            returnvalue.push(rep)
            break;}
        case '②':{ 
            var bubble = <div className='marble2'>{' 2 '}</div>
            var rep = content.replace('②','');
            returnvalue.push(bubble)
            returnvalue.push(rep)
            break;}
        case '③':{ 
            var bubble = <div className='marble3'>{' 3 '}</div>
            var rep = content.replace('③','');
            returnvalue.push(bubble)
            returnvalue.push(rep)
            break;}
        case '④':{ 
            var bubble = <div className='marble4'>{' 4 '}</div>
            var rep = content.replace('④','');
            returnvalue.push(bubble)
            returnvalue.push(rep)
            break;}
        case '⑤':{ 
            var bubble = <div className='marble5'>{' 5 '}</div>
            var rep = content.replace('⑤','');
            returnvalue.push(bubble)
            returnvalue.push(rep)
            break;}
        case '⑥':{ 
            var bubble = <div className='marble6'>{' 6 '}</div>
            var rep = content.replace('⑥','');
            returnvalue.push(bubble)
            returnvalue.push(rep)
            break;}
        default : { 
            returnvalue.push(content)
            break;}
    }
    return returnvalue;
}

export function typeFourImage(content){
    if(content === null){
        return ['','','','']
    }
    var filelist = ['','','','']
    var splitlist = content.split('\n');
    splitlist.map((list, index)=>{
        if(list.startsWith('1)')){
            console.log("listtrimreplace : ",list.replace('1)','').trim())
            filelist[0] = list.replace('1)','').trim()
        }else if(list.startsWith('2)')){
            console.log("listtrimreplace : ",list.replace('1)','').trim())
            filelist[1] = list.replace('2)','').trim()
        }else if(list.startsWith('3)')){
            console.log("listtrimreplace : ",list.replace('1)','').trim())
            filelist[2] = list.replace('3)','').trim()
        }else if(list.startsWith('4)')){
            console.log("listtrimreplace : ",list.replace('1)','').trim())
            filelist[3] = list.replace('4)','').trim()
        }
    })
    return filelist
}