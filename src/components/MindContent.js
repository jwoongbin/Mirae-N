import { useEffect, useState } from 'react';
import { newlineToBr } from '../common/utils.js';
import "./MindContent.scss"
import postfront from '../images/postit/postfront.png'
import postback from '../images/postit/postback.png'


function spanindex(index){
    return Math.floor(index/2)
}

function MindContent (content){
    var data = newlineToBr(content.content)
    
    var splitstring = data.split(/[()]+/)
    console.log(splitstring.length);
    const [boollist, setBoollist] = useState(new Array(splitstring.length))

    console.log(boollist);

    var temp = [];

    var onClick = (index)=>{
        console.log(index)
        boollist[index] = !boollist[index] 
        setBoollist([...boollist])
    }

    if(splitstring.length%2 === 1){
        splitstring.map((split, index)=>{
            if(index%2 === 0){
                temp.push(<span>{split}</span>)
            }else{
                temp.push(<span className={'answer'+(boollist[spanindex(index)] ? ' on' : '')} onClick={()=>{onClick(spanindex(index))}}>{split}</span>)
                // temp.push(<span className={'answer'+(boollist[spanindex(index)] ? ' on' : '')} onClick={()=>{onClick(spanindex(index))}}><span className={"answer_front"}>{"1"}</span><span className={'answer_body'} >{split}</span><span className={"answer_back"}>{"1"}</span></span>)  
                // temp.push(<span className={'answer'+(boollist[spanindex(index)] ? ' on' : '')} onClick={()=>{onClick(spanindex(index))}}><img className={"answer_img"} src ={postfront} alt=''/><span className={'answer_body'} >{split}</span><img className={"answer_img"} src ={postback} alt=''/></span>)    
            }
        })
    }else{
        temp.push({data})
        console.log("괄호 갯수가 이상한데...?")
    }
    console.log(temp);
    return (
        <div className={'mindcontent'}>{temp}</div>
    )    
    // var boola = false
    // var a = () =>{
    //     boola = !boola
    // }
    // if(splitstring.length === 3){
    //     console.log("스플릿 됨 : " , splitstring)
    //     return (
    //         <div className="contenttext">
    //             {splitstring[0]}<span className={'answer'+(boola ? ' on' : '')} onClick={a}>{splitstring[1]}</span>{splitstring[2]}
    //         </div>
    //     )
    // }else{
    //     console.log("스플릿 안됨 : " , splitstring)
    //     return (
    //         <div className="contenttext">
    //             {content}
    //         </div>
    //     )
    // }

}

export default MindContent;