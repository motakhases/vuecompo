
const toInt=(...str)=>{
  if(str.length>1){
    const res=[];
    for(let i=0;i<str.length;i++){
      res.push(toInt(str[i])[0])
    }
    return res;
  }
  else{
    str = str[0]
  }
  return [parseInt(str,10)]
}

module.exports.toInt=toInt;
