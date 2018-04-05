import Component from '@ember/component';
import {computed, get, set} from "@ember/object";

export default class LdEntryUrirefField extends Component.extend({
  // anything which *must* be merged to prototype here
  actions: {
  },
  lexicalString: computed("value", function(this: LdEntryUrirefField){
    const val = get(this, "value");
    if (!val) {return undefined;}
    return `<${val}>`;
  }),
}) {
  // normal class body definition here
  form: any;
  value?: string;
  placeholder?: string;
  label?: string;
  showSearchBtn: boolean = true;
  changeableKind: boolean = false;

};
