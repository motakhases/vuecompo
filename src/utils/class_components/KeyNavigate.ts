import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { lg,prevUp,lgConf } from '@/utils/helper';
import DbgTool from '../devTools/DbgTool'


@Component({})
export default class KeyNavigate extends Vue{

  f_order:any = null
  f_curOrd = -1
  f_curIndxComp = -1
  f_curDests:any = null
  f_onMySec = false
  f_parComp:any = null
  f_curComp:any = null
  f_mainNav:any = null
  f_keydown:Array<string> = []
  f_dbg : DbgTool
  f_curKeyMove = ''

  f_created(){
    lgConf.priority = 2
    this.f_dbg = new DbgTool()
    let brkPoint1 = ()=>{
      // eslint-disable-next-line no-debugger
      //   debugger
      },brkPoint2=()=>{
      // eslint-disable-next-line no-debugger
        debugger
      };
    this.f_dbg.addDbg<KeyNavigate>([
      (dis,resultConds,i,args)=>{
        if(args.key === 'Tab'){
          if(dis.f_findKeyDown('Shift')){
            resultConds[i] = true
          }
          else{
            resultConds[i] = false
          }
          return false
        }
      },
      (dis,resultConds,i,args)=>{
        if(args.key === 'Enter'){
          resultConds[i] = true
        }
      },
    ],brkPoint1)

    this.f_dbg.addDbg<KeyNavigate>([
      (dis, resultConds, i, args)=>{
        if(dis.f_findKeyDown('z')){
          resultConds[i]=true
        }
      },
    ],brkPoint2)
  }




  f_destroyKeyUp(){
    this.f_curOrd = -1
    this.f_curIndxComp = -1
    this.f_curDests = null
    this.f_curComp = null
    this.f_onMySec = false
    if(this.f_mainNav){
      this.f_mainNav.f_onMySec = true
    }
  }

  private f_getKeyDown(){
    let kd;
    if(this.f_keydown.length){
      kd = this.f_keydown
    }
    else if(this.f_parComp?.f_keydown.length){
      kd = this.f_parComp.f_keydown
    }
    else if(this.f_mainNav){
      kd = this.f_mainNav.f_keydown
    }
    else{
      debugger
    }
    return kd
  }

  f_findKeyDown(str,get=false):boolean|number{
    let kd=this.f_getKeyDown();
    if(get){
      return kd.indexOf(str)
    }
    return kd.indexOf(str)>-1
  }

  f_addKeyDown(str):boolean{
    let kd=this.f_getKeyDown();
    return kd.push(str)
  }

  f_delKeyDown(indx):void{
    let kd=this.f_getKeyDown();
    kd.splice(indx,1)
  }


  private f_trigger(e,key,destComp,justBlur,{onBlur,onFocus,onEnter}:any){
    const clicking = !key
    if(key==='Tab'||clicking){
      if(justBlur){
        if(onBlur) {
          onBlur(e,this)
        }
      }
      else if(onFocus) {
        onFocus(e,this)
      }
    }
    if(key==='Enter'){
      if(onEnter) {
        if(destComp.f_order&&destComp.f_order.length){
          destComp.f_parComp = this
          this.f_onMySec = false
          destComp.f_onMySec = true
          destComp.f_mainNav = this.f_mainNav
          this.f_setCurComp(destComp)
        }
        onEnter(e,this)
      }
    }
  }

  f_doBlurComp(e,simulKey=''){
    const befNam = this.f_order?.[this.f_curOrd]
    if(befNam){
      const befComp = this.$refs[befNam];
      let {key} = e;
      if(simulKey){
        key = simulKey
      }
      this.f_runDest(e,key,befComp,true)
    }
  }

  f_doFocusOut(){
    lg('doFocusOut')
    // const actElm = document.activeElement
    // document.querySelectorAll('a')?.[0]?.focus()
    // document.querySelectorAll('button')?.[0]?.focus()
    // document.querySelectorAll('input')?.[0]?.focus()
    // lg(actElm,'actElm')
    // lg(document.activeElement,'document.activeElement')
    // window.focus();
    const inpE = document.createElement('input')
    inpE.style.cssText = 'opacity:0;width:0;height:0;display:hidden;position:absolute;top:0;'
    document.body.appendChild(inpE)
    setTimeout(()=>{
      document.body.removeChild(inpE)
    },1000)
    inpE.focus()
  }

  f_setCurComp(curComp){
    if(this.f_mainNav){
      this.f_curComp = curComp
    }
    else{
      this.f_parComp.f_setCurComp(curComp)
    }
  }

  private f_offMySec(){
    // this.onKeyup(e)
    // return
    this.f_onMySec = false
    if(this.f_parComp){
      this.f_parComp.f_onMySec = true
      this.f_parComp.f_setCurComp(this.f_parComp)
    }
  }

  private f_incrDecrIndx(key,chgSelf=true,bef=false){
    if(this.f_findKeyDown('Shift') && key === 'Tab'){
      if(chgSelf){
        return --this.f_curIndxComp;
      }
      return this.f_curIndxComp+(bef?+1:-1)
    }
    else{
      if(chgSelf){
        return ++this.f_curIndxComp;
      }
      return this.f_curIndxComp+(bef?-1:+1);
    }
  }

  private f_incrDecr(key,chgSelf=true){
    if(this.f_findKeyDown('Shift') && key === 'Tab'){
      if(chgSelf){
        return --this.f_curOrd;
      }
      return this.f_curOrd-1
    }
    else{
      if(chgSelf){
        return ++this.f_curOrd;
      }
      return this.f_curOrd+1;
    }
  }

  f_doKeyDown(e: KeyboardEvent){
    const {key} = e;
    if(!this.f_findKeyDown(key)){
      lg(key,'key')
      this.f_addKeyDown(key)
    }
    prevUp(e)
  }

  private f_swichOutChildComp(e,simulKey){
    this.f_doBlurComp(e,simulKey)
    this.f_curDests = null
    this.f_curIndxComp = -1
  }

  private f_runDest(e,key,destComp,justBlur=false){
    if(destComp){

      const focusing = key==='Tab'
      const clicking = !key

      if(destComp instanceof Array){

        this.f_curDests = destComp

        let befIndx
        if(justBlur){
          befIndx = this.f_curIndxComp
        }else{
          if(focusing){
            this.f_incrDecrIndx(key)
          }
          befIndx = this.f_incrDecrIndx(key,false,true)
        }

        if((focusing||clicking) && befIndx>-1 && befIndx < destComp.length){
          this.f_trigger(e,key,destComp,true,destComp[befIndx])
        }

        if(!justBlur){
          this.f_trigger(e,key,destComp,justBlur,destComp[this.f_curIndxComp])
        }
      }
      else{
        this.f_trigger(e,key,destComp,justBlur,destComp)
      }
    }
  }

  private f_getCompByOrd($refs,indxOrd){
    const refName = this.f_order?.[indxOrd]

    return $refs[refName];
  }

  private f_goingLatestItm(key){
    if(this.f_findKeyDown('Shift') && key === 'Tab'){
      return this.f_curIndxComp-1 === 0
    }
    else{
      return this.f_curIndxComp+1 === this.f_curDests.length-1
    }
  }

  private f_latestItm(key){
    if(this.f_findKeyDown('Shift') && key === 'Tab'){
      return this.f_curIndxComp-1 === -1
    }
    else{
      return this.f_curIndxComp+1 === this.f_curDests.length
    }
  }

  private f_goingLatestComp($ref,key){
    if(this.f_findKeyDown('Shift') && key === 'Tab'){
      return this.f_curOrd-1 === 0 && !(this.f_getCompByOrd($ref,0) instanceof Array)
    }
    else{
      return this.f_curOrd+1 === this.f_order.length-1 && !(this.f_getCompByOrd($ref,this.f_order.length-1) instanceof Array)
    }
  }

  private f_latestComp(key){
    if(this.f_findKeyDown('Shift') && key === 'Tab'){
      return this.f_curOrd-1 === -1
    }
    else{
      return this.f_curOrd+1 === this.f_order.length
    }
  }

  f_doKeyup(e: KeyboardEvent,simulKey='')
  {
    let {key} = e;
    if(simulKey){
      key = simulKey
    }
    const $refs = this.$refs;lg($refs,'f_doKeyup > $refs',1);lg(this.f_keydown,'f_doKeyup > f_keydown',1);

    let findx;
    if((findx=this.f_findKeyDown(key,true))>-1){
      this.f_delKeyDown(findx)
    }

    if(!Object.keys($refs).length)return

    if(key==='Tab'){
      this.f_curKeyMove = 'Tab'
    }
    else if(key==='Tab'&&this.f_findKeyDown('Shift')){
      this.f_curKeyMove = 'ShiftTab'
    }
    else if(key!=='Enter'){
      return
    }

    prevUp(e)

    this.f_dbg.dbgChk(this,{key})
    this.f_dbg.dbgRun({key})

    if(key==='Tab'){
      if(this.f_curDests){ lg(this.f_curDests,'f_doKeyup > f_curDests',2);
        if(this.f_goingLatestItm(key)){ lg(this.f_goingLatestItm(key),'... > f_goingLatestItm',2);
          if(this.f_latestComp(key)){ lg(this.f_latestComp(key),'... > f_latestComp',2);
            this.f_offMySec()
          }
        }
        else if(this.f_latestItm(key)){ lg(this.f_latestItm(key),'... > f_latestItm',2);// agar ife balayi succes mishdo be marhaleye badi va in shart nemiresid va in this az doKey up kharej mishe, be ebarate dige hanooz bad az in bache bacheye digei ham vojood dare va ife avali ta enteha succ nashode
          this.f_swichOutChildComp(e,simulKey)
          this.f_incrDecr(key)
        }
      }
      else{
        if(this.f_goingLatestComp($refs,key)){ lg(this.f_goingLatestComp($refs,key),'... > f_goingLatestComp',2);
          this.f_offMySec()
        }
        this.f_doBlurComp(e,simulKey)
        this.f_incrDecr(key);lg(this.f_curOrd,'... > increment occured > f_curOrd',2);
      }
    }

    const destComp = this.f_getCompByOrd($refs,this.f_curOrd)

    this.f_runDest(e,key,destComp)
  }

  f_onGlobalKeyup(e: KeyboardEvent){
    lg(e,'---- onGlobalKeyup')
    // this.f_doBlurComp(e)
    // this.f_destroyKeyUp()
  }

  f_onGlobalClick(e: Event){
    lg(e,'---- onGlobalClick')
    this.f_curComp?.f_doBlurComp(e)
    this.f_doBlurComp(e)
    this.f_curComp?.f_destroyKeyUp()
    this.f_destroyKeyUp()
  }

}
