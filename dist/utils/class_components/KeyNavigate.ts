import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { lg, prevUp, lgConf } from '@/utils/helper';
import DbgTool from '../devTools/DbgTool';

@Component({})
export default class KeyNavigate extends Vue {
  kOrder:any = null

  kCurOrd = -1

  kCurIndxComp = -1

  kCurDests:any = null

  kOnMySec = false

  kParComp:any = null

  kCurComp:any = null

  kMainNav:any = null

  kKeydown:Array<string> = []

  kDbg : DbgTool|null = null

  kCurKeyMove = ''

  kCreated() {
    lgConf.priority = 2;
    this.kDbg = new DbgTool();
    const brkPoint1 = () => {
      // eslint-disable-next-line no-debugger
      //   debugger
      // eslint-disable-next-line no-console
      // console.log(1);
    }; const brkPoint2 = () => {
      // eslint-disable-next-line no-debugger
      debugger;
      // eslint-disable-next-line no-console
      // console.log(2);
    };
    this.kDbg.addDbg<KeyNavigate>([
      (dis, resultConds, i, args):any => {
        const rconds = resultConds;
        if (args.key === 'Tab') {
          if (dis.kFindKeyDown('Shift')) {
            rconds[i] = true;
          }
          rconds[i] = false;
        }
      },
      (dis, resultConds, i, args) => {
        const rconds = resultConds;
        if (args.key === 'Enter') {
          rconds[i] = true;
        }
      },
    ], brkPoint1);

    this.kDbg.addDbg<KeyNavigate>([
      (dis, resultConds, i) => {
        const rconds = resultConds;
        if (dis.kFindKeyDown('z')) {
          rconds[i] = true;
        }
      },
    ], brkPoint2);
  }

  kDestroyKeyUp() {
    this.kCurOrd = -1;
    this.kCurIndxComp = -1;
    this.kCurDests = null;
    this.kCurComp = null;
    this.kOnMySec = false;
    if (this.kMainNav) {
      this.kMainNav.kOnMySec = true;
    }
  }

  private kGetKeyDown() {
    let kd;
    if (this.kKeydown.length) {
      kd = this.kKeydown;
    } else if (this.kParComp?.kKeydown.length) {
      kd = this.kParComp.kKeydown;
    } else if (this.kMainNav) {
      kd = this.kMainNav.kKeydown;
    } else {
      // eslint-disable-next-line no-debugger
      debugger;
    }
    return kd;
  }

  kFindKeyDown(str, get = false):boolean|number {
    const kd = this.kGetKeyDown();
    if (get) {
      return kd.indexOf(str);
    }
    return kd.indexOf(str) > -1;
  }

  kAddKeyDown(str):boolean {
    const kd = this.kGetKeyDown();
    return kd.push(str);
  }

  kDelKeyDown(indx):void {
    const kd = this.kGetKeyDown();
    kd.splice(indx, 1);
  }

  private kTrigger(e, key, destComp, justBlur, { onBlur, onFocus, onEnter }:any) {
    const clicking = !key;
    const dComp = destComp;
    if (key === 'Tab' || clicking) {
      if (justBlur) {
        if (onBlur) {
          onBlur(e, this);
        }
      } else if (onFocus) {
        onFocus(e, this);
      }
    }
    if (key === 'Enter') {
      if (onEnter) {
        if (dComp.kOrder && dComp.kOrder.length) {
          dComp.kParComp = this;
          this.kOnMySec = false;
          dComp.kOnMySec = true;
          dComp.kMainNav = this.kMainNav;
          this.kSetCurComp(dComp);
        }
        onEnter(e, this);
      }
    }
  }

  kDoBlurComp(e, simulKey = '') {
    const befNam = this.kOrder?.[this.kCurOrd];
    if (befNam) {
      const befComp = this.$refs[befNam];
      let { key } = e;
      if (simulKey) {
        key = simulKey;
      }
      this.kRunDest(e, key, befComp, true);
    }
  }

  kDoFocusOut() {
    lg('doFocusOut');
    // const actElm = document.activeElement
    // document.querySelectorAll('a')?.[0]?.focus()
    // document.querySelectorAll('button')?.[0]?.focus()
    // document.querySelectorAll('input')?.[0]?.focus()
    // lg(actElm,'actElm')
    // lg(document.activeElement,'document.activeElement')
    // window.focus();
    const inpE = document.createElement('input');
    inpE.style.cssText = 'opacity:0;width:0;height:0;display:hidden;position:absolute;top:0;';
    document.body.appendChild(inpE);
    setTimeout(() => {
      document.body.removeChild(inpE);
    }, 1000);
    inpE.focus();
  }

  kSetCurComp(curComp) {
    if (this.kMainNav) {
      this.kCurComp = curComp;
    } else {
      this.kParComp.kSetCurComp(curComp);
    }
  }

  private kOffMySec() {
    // this.onKeyup(e)
    // return
    this.kOnMySec = false;
    if (this.kParComp) {
      this.kParComp.kOnMySec = true;
      this.kParComp.kSetCurComp(this.kParComp);
    }
  }

  private kIncrDecrIndx(key, chgSelf = true, bef = false) {
    if (this.kFindKeyDown('Shift') && key === 'Tab') {
      if (chgSelf) {
        this.kCurIndxComp -= 1;
        return this.kCurIndxComp;
      }
      return this.kCurIndxComp + (bef ? +1 : -1);
    }

    if (chgSelf) {
      this.kCurIndxComp += 1;
      return this.kCurIndxComp;
    }
    return this.kCurIndxComp + (bef ? -1 : +1);
  }

  private kIncrDecr(key, chgSelf = true) {
    if (this.kFindKeyDown('Shift') && key === 'Tab') {
      if (chgSelf) {
        this.kCurOrd -= 1;
        return this.kCurOrd;
      }
      return this.kCurOrd - 1;
    }

    if (chgSelf) {
      this.kCurOrd += 1;
      return this.kCurOrd;
    }
    return this.kCurOrd + 1;
  }

  kDoKeyDown(e: KeyboardEvent) {
    const { key } = e;
    if (!this.kFindKeyDown(key)) {
      lg(key, 'key');
      this.kAddKeyDown(key);
    }
    prevUp(e);
  }

  private kSwichOutChildComp(e, simulKey) {
    this.kDoBlurComp(e, simulKey);
    this.kCurDests = null;
    this.kCurIndxComp = -1;
  }

  private kRunDest(e, key, destComp, justBlur = false) {
    if (destComp) {
      const focusing = key === 'Tab';
      const clicking = !key;

      if (destComp instanceof Array) {
        this.kCurDests = destComp;

        let befIndx;
        if (justBlur) {
          befIndx = this.kCurIndxComp;
        } else {
          if (focusing) {
            this.kIncrDecrIndx(key);
          }
          befIndx = this.kIncrDecrIndx(key, false, true);
        }

        if ((focusing || clicking) && befIndx > -1 && befIndx < destComp.length) {
          this.kTrigger(e, key, destComp, true, destComp[befIndx]);
        }

        if (!justBlur) {
          this.kTrigger(e, key, destComp, justBlur, destComp[this.kCurIndxComp]);
        }
      } else {
        this.kTrigger(e, key, destComp, justBlur, destComp);
      }
    }
  }

  private kGetCompByOrd($refs, indxOrd) {
    const refName = this.kOrder?.[indxOrd];

    return $refs[refName];
  }

  private kGoingLatestItm(key) {
    if (this.kFindKeyDown('Shift') && key === 'Tab') {
      return this.kCurIndxComp - 1 === 0;
    }

    return this.kCurIndxComp + 1 === this.kCurDests.length - 1;
  }

  private kLatestItm(key) {
    if (this.kFindKeyDown('Shift') && key === 'Tab') {
      return this.kCurIndxComp - 1 === -1;
    }

    return this.kCurIndxComp + 1 === this.kCurDests.length;
  }

  private kGoingLatestComp($ref, key) {
    if (this.kFindKeyDown('Shift') && key === 'Tab') {
      return this.kCurOrd - 1 === 0 && !(this.kGetCompByOrd($ref, 0) instanceof Array);
    }

    return this.kCurOrd + 1 === this.kOrder.length - 1 && !(this.kGetCompByOrd($ref, this.kOrder.length - 1) instanceof Array);
  }

  private kLatestComp(key) {
    if (this.kFindKeyDown('Shift') && key === 'Tab') {
      return this.kCurOrd - 1 === -1;
    }

    return this.kCurOrd + 1 === this.kOrder.length;
  }

  kDoKeyup(e: KeyboardEvent, simulKey = '') {
    let { key } = e;
    if (simulKey) {
      key = simulKey;
    }
    const { $refs } = this; lg($refs, 'kDoKeyup > $refs', 1); lg(this.kKeydown, 'kDoKeyup > kKeydown', 1);

    const findx = this.kFindKeyDown(key, true);
    if (findx > -1) {
      this.kDelKeyDown(findx);
    }

    if (!Object.keys($refs).length) return;

    if (key === 'Tab') {
      this.kCurKeyMove = 'Tab';
    } else if (key === 'Tab' && this.kFindKeyDown('Shift')) {
      this.kCurKeyMove = 'ShiftTab';
    } else if (key !== 'Enter') {
      return;
    }

    prevUp(e);

    this.kDbg?.dbgChk(this, { key });
    this.kDbg?.dbgRun({ key });

    if (key === 'Tab') {
      if (this.kCurDests) {
        lg(this.kCurDests, 'kDoKeyup > kCurDests', 2);
        if (this.kGoingLatestItm(key)) {
          lg(this.kGoingLatestItm(key), '... > kGoingLatestItm', 2);
          if (this.kLatestComp(key)) {
            lg(this.kLatestComp(key), '... > kLatestComp', 2);
            this.kOffMySec();
          }
        } else if (this.kLatestItm(key)) {
          lg(this.kLatestItm(key), '... > kLatestItm', 2);// agar ife balayi succes mishdo be marhaleye badi va in shart nemiresid va in this az doKey up kharej mishe, be ebarate dige hanooz bad az in bache bacheye digei ham vojood dare va ife avali ta enteha succ nashode
          this.kSwichOutChildComp(e, simulKey);
          this.kIncrDecr(key);
        }
      } else {
        if (this.kGoingLatestComp($refs, key)) {
          lg(this.kGoingLatestComp($refs, key), '... > kGoingLatestComp', 2);
          this.kOffMySec();
        }
        this.kDoBlurComp(e, simulKey);
        this.kIncrDecr(key); lg(this.kCurOrd, '... > increment occured > kCurOrd', 2);
      }
    }

    const destComp = this.kGetCompByOrd($refs, this.kCurOrd);

    this.kRunDest(e, key, destComp);
  }

  kOnGlobalKeyup(e: KeyboardEvent) {
    lg(e, '---- onGlobalKeyup');
    // this.kDoBlurComp(e)
    // this.kDestroyKeyUp()
    // eslint-disable-next-line no-console
    // console.log(1);
  }

  kOnGlobalClick(e: Event) {
    lg(e, '---- onGlobalClick');
    this.kCurComp?.kDoBlurComp(e);
    this.kDoBlurComp(e);
    this.kCurComp?.kDestroyKeyUp();
    this.kDestroyKeyUp();
  }
}
