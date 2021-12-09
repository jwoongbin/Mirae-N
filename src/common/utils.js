import marble1 from '../images/marblenum/marble_num1.png'

export function newlineToBr(content){
    if(content === null){
        return ""
    }
    console.log(content)
    var replaceString = content.replace(/\n/g, '<br>');
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

// export function circleParser(subs) {
//     var number = subs.split('-');
//     switch(number[1]){
//         case '①':
//             var returnvalue = '1';
//             console.log(returnvalue);
//             return (<div>
//                 {number[0]}-
//                 <span>{returnvalue}</span>
//               </div>)
//             break;
//         case '②':{ 
//             var returnvalue = <span>{' 2 '}</span>
//             break;}
//         case '③':{ 
//             var returnvalue = <span>{' 3 '}</span>
//             break;}
//         case '④':{ 
//             var returnvalue = <span>{' 4 '}</span>
//             break;}
//         case '⑤':{ 
//             var returnvalue = <span>{' 5 '}</span>
//             break;}
//         case '⑥':{ 
//             var returnvalue = <span>{' 6 '}</span>
//             break;}
//         default : {
//             break;}
//     }
//     console.log(returnvalue);
//     return (<div>
//       {number[0]}-{returnvalue}
//       {/* <span>{returnvalue}</span> */}
//     </div>)
//   }

  export function circleParser(subs){
    let newNumber = "";
    console.log(newNumber);
    const number = subs.split('-');
    switch(number[1]){
      case '➊':
        newNumber = <span>{'1'}</span>
        break;
      case '➋':{ 
        newNumber = <span>{'2'}</span>
        break;}
      case '➌':{ 
        newNumber = <span>{'3'}</span>
        break;}
      case '➍':{ 
        newNumber = <span>{'4'}</span>
        break;}
      case '➎':{ 
        newNumber = <span>{'5'}</span>
        break;}
      case '➏':{ 
        newNumber = <span>{'6'}</span>
        break;}
      default : {
        break;}
    }
    return (<div>
      {number[0]}-
      {newNumber}
    </div>)
  }