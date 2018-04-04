import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default class LdEntryStringField extends Component.extend({
  hasLanguage: computed("language", function(this: LdEntryStringField): boolean {
    return (get(this, "language") != undefined);
  }),
  actions: {
    onLangChanged(click) {
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
      let newLang = target.innerText;
      if (newLang.toUpperCase() == "NO") {
        set(this, "language", undefined);
        set(this, "showLangBox", false);
        return false;
      }
      set(this, "language", newLang);
    }
  }

}) {
  // normal class body definition here
  form: any;
  value?: string;
  language?: string;
  placeholder?: string;
  label?: string;
  showLangBox: boolean = undefined;
  changeableKind: boolean = false;

};
