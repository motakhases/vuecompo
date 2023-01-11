
interface resultConds {
  [index: number]: boolean;
}

type condDbg<T> = (dis:any|T,resultConds:resultConds,i:number,args:{[index: string]: any}) => void|boolean;

type chkerDbg = (args:{[index: string]: any})=> void;

type condFns<T>=condDbg<T>[]

export default class DbgTool{

  dbgHanlder : {
    resultConds:resultConds,
    conds:any,
    chker:chkerDbg,
  }[]

  constructor() {
    this.dbgHanlder = []
  }

  addDbg<T>(condsFn:condFns<T>,chkerFn:chkerDbg){
    this.dbgHanlder.push({
      conds:condsFn,
      chker:chkerFn,
      resultConds:{},
    })
  }

  dbgRun(args:{[index: string]: any}){
    let i;
    this.dbgHanlder.forEach((eDbg)=>{
      i=0
      while (i < eDbg.conds.length){
        if(!eDbg.resultConds[i]){
          return
        }
        i++;
      }
      eDbg.chker(args)
    })
  }

  dbgChk(dis:any,args:{[index: string]: any}){
    this.dbgHanlder.forEach((eDbg)=>{
      for(let i=0;i<eDbg.conds.length;i++){
        if(typeof eDbg.conds[i](dis,eDbg.resultConds,i,args) === 'boolean'){
          return
        }
      }
    })
  }
}
