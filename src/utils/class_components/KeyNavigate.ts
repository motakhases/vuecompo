import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { prevUp, lgConf } from '@/utils/helper';
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
      // eslint-disable-next-line no-console
      // console.log(1);
    }; const brkPoint2 = () => {
      // eslint-disable-next-line no-console
      // console.log(2);
    };
    this.kDbg.addDbg<KeyNavigate>([
      (dis, resultConds, i, args):any => {
        if (args.key === 'Tab') {
          if (dis.kFindKeyDown('Shift')) {
            resultConds[i] = true;
          }
          resultConds[i] = false;
        }
      },
      (dis, resultConds, i, args) => {
        if (args.key === 'Enter') {
          resultConds[i] = true;
        }
      },
    ], brkPoint1);

    this.kDbg.addDbg<KeyNavigate>([
      (dis, resultConds, i) => {
        if (dis.kFindKeyDown('z')) {
          resultConds[i] = true;
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
      // eslint-disable-next-line no-console
      // console.log(3);
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
        if (destComp.kOrder && destComp.kOrder.length) {
          destComp.kParComp = this;
          this.kOnMySec = false;
          destComp.kOnMySec = true;
          destComp.kMainNav = this.kMainNav;
          this.kSetCurComp(destComp);
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
    const { $refs } = this;

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
        if (this.kGoingLatestItm(key)) {
          if (this.kLatestComp(key)) {
            this.kOffMySec();
          }
        } else if (this.kLatestItm(key)) {
          this.kSwichOutChildComp(e, simulKey);
          this.kIncrDecr(key);
        }
      } else {
        if (this.kGoingLatestComp($refs, key)) {
          this.kOffMySec();
        }
        this.kDoBlurComp(e, simulKey);
        this.kIncrDecr(key);
      }
    }

    const destComp = this.kGetCompByOrd($refs, this.kCurOrd);

    this.kRunDest(e, key, destComp);
  }

  kOnGlobalKeyup() {
    // eslint-disable-next-line no-console
    // console.log(1);
  }

  kOnGlobalClick(e: Event) {
    this.kCurComp?.kDoBlurComp(e);
    this.kDoBlurComp(e);
    this.kCurComp?.kDestroyKeyUp();
    this.kDestroyKeyUp();
  }
}
