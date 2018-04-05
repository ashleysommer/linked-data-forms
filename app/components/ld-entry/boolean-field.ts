import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default class LdEntryBooleanField extends Component.extend({
  lexicalString: computed("value", function(this: LdEntryBooleanField){
    const val = get(this, "value");
    const valstr = val?"true":"false";
    return valstr; //note, this _doesnt_ have quotes around it.
  }),
  actions: {

  }

}) {
  // normal class body definition here
  form: any;
  value?: boolean = false;
  numType?: string;
  placeholder?: string;
  label?: string;
  showNumTypeBox: boolean = undefined;
  changeableKind: boolean = false;
};
