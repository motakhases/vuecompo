interface condsResult {
  [index: number]: boolean;
}

type condDbg<T> = (dis:any|T, resultConds:condsResult, i:number, args:{[index: string]: any}) => void|boolean;

type chkerDbg = (args:{[index: string]: any})=> void;

type condFns<T>=condDbg<T>[]

export default class DbgTool {
  dbgHanlder : {
    resultConds:condsResult,
    conds:any,
    chker:chkerDbg,
  }[]

  constructor() {
    this.dbgHanlder = [];
  }

  addDbg<T>(condsFn:condFns<T>, chkerFn:chkerDbg) {
    this.dbgHanlder.push({
      conds: condsFn,
      chker: chkerFn,
      resultConds: {},
    });
  }

  dbgRun(args:{[index: string]: any}) {
    let i;
    this.dbgHanlder.forEach((eDbg) => {
      i = 0;
      while (i < eDbg.conds.length) {
        if (!eDbg.resultConds[i]) {
          return;
        }
        i += 1;
      }
      eDbg.chker(args);
    });
  }

  dbgChk(dis:any, args:{[index: string]: any}) {
    this.dbgHanlder.forEach((eDbg) => {
      for (let i = 0; i < eDbg.conds.length; i += 1) {
        if (typeof eDbg.conds[i](dis, eDbg.resultConds, i, args) === 'boolean') {
          return;
        }
      }
    });
  }
}
