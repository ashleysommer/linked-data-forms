import Component from '@ember/component';
import { computed, get, set, observer } from '@ember/object';

export default class LdEntryNumberField extends Component.extend({
  hasNumType: computed("numType", function(this: LdEntryNumberField): boolean {
    return (get(this, "numType") != undefined);
  }),
  lexicalString: computed("numType", "value", function(this: LdEntryNumberField){
    const val = get(this, "value");
    if (!val) {return undefined;}
    const hasNumType = get(this, "hasNumType");
    if (hasNumType) {
      const ty = get(this, "numType");
      if (ty) {
        return `\"${val}\"^^${ty}`;
      }
    }
    return `\"${val}\"`;
  }),
  actions: {
    onNumTypeChanged(click) {
      if (!click) {
        return false;
      }
      const target = click.target;
      if (!target) {
        return false;
      }
      if (!(target.tagName.toUpperCase() == "A")) {
        return false;
      }
      let newNumType = target.innerText;
      if (newNumType.toUpperCase() == "NO") {
        set(this, "numType", undefined);
        set(this, "showNumTypeBox", false);
        return false;
      }
      set(this, "numType", newNumType);
    }
  }

}) {
  // normal class body definition here
  form: any;
  value?: string;
  numType?: string;
  placeholder?: string;
  label?: string;
  showNumTypeBox: boolean = undefined;
  changeableKind: boolean = false;

};
