import { useState } from 'react';
import { newlineToBr, changeMarbleNum } from '../common/utils.js';
import "./MindContent.scss"

function spanindex(index){
    return Math.floor(index/2)
}

function MindContent (content){
    var data = newlineToBr(content.content)
    
    var pattern = /\(.+?\)/g;
    var findanswer = data.match(pattern)
    if(findanswer === null){
        findanswer = []
    }
    console.log("findanswer : " ,findanswer.length);

    const [boollist, setBoollist] = useState(new Array(spanindex(findanswer.length)))
    
    var onClick = (count)=>{
        console.log("conclick : " , count)
        boollist[count] = !boollist[count] 
        setBoollist([...boollist])
    }

    var answer_count = 0
    var span_count = 0
    var linelist = [];

    var splitline = data.split('<br>')
    console.log("splitline : ",splitline)
    splitline.map((line) =>{
        var spanlist = []
        var templine = line
        var mablelist = changeMarbleNum(line)
        if(mablelist.length === 2){
            spanlist.push(mablelist[0])
            templine = mablelist[1]
        }
        var splitstring = templine.split(/[()]+/)
        console.log("splitstring : ", splitstring)
        if(splitstring.length%2 === 1){
            splitstring.map((split, index)=>{
                if(index%2 === 0){
                    if(split.length !== 0){
                        spanlist.push(<span>{split}</span>)
                        span_count += 1;
                    }
                }else{
                    console.log("split : ", split)
                    console.log("answer_count : ", answer_count)
                    var clickindex = answer_count
                    var spantag = (
                    <span className={'answer'+(boollist[clickindex] ? ' on' : '')} onClick={()=>{onClick(clickindex)}}>
                        <div className={'answer_img'}>{split}</div>
                        {split}
                    </span>
                    )
                    spanlist.push(spantag)
                    console.log("answer_count : ", answer_count)
                    answer_count += 1;
                }
                return true
            })
        }else{
            spanlist.push({data})
            console.log("괄호 갯수가 이상한데...?")
        }
        console.log("spanlist : ",spanlist)
        var linetag = <div className='line'>{spanlist}</div>;
        linelist.push(linetag)
    })

    var returnvalue = <div className={'mindcontent'}>{linelist}</div>
    if(answer_count === 1 && linelist.length === 1 && span_count === 0){
        console.log('linelist : ' ,linelist);
        returnvalue = <div className={'mindcontent'+(boollist[spanindex(0)] ? ' on' : ' off')} onClick={()=>{onClick(0)}}>{linelist}</div>
    }


    return (
        returnvalue
    )    
}

export default MindContent;