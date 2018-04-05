import Component from '@ember/component';
import {computed, get, observer, set} from '@ember/object';

export default class LdEntryField extends Component.extend({
  // anything which *must* be merged to prototype here
  isString: computed("kind", function(this: LdEntryField): boolean {
    const kind = get(this, "kind");
    return (kind == "string" || kind == "free text");
  }),
  isUriRef: computed("kind", function(this: LdEntryField): boolean {
    return (get(this, "kind") == "uriref");
  }),
  isNumber: computed("kind", function(this: LdEntryField): boolean {
    return (get(this, "kind") == "number");
  }),
  isBoolean: computed("kind", function(this: LdEntryField): boolean {
    return (get(this, "kind") == "boolean");
  }),
  entryFieldComponent: computed("kind", "isString", "isUriRef", "isNumber", "isBoolean", function(this: LdEntryField): any {
    const kind = get(this, "kind");
    if (get(this, "isString")) {
      //return LdEntryStringField;
      return "ld-entry/string-field";
    }
    if (get(this, "isUriRef")) {
      //return LdEntryUrirefField;
      return "ld-entry/uriref-field";
    }
    if (get(this, "isNumber")) {
      //return LdEntryNumberField;
      return "ld-entry/number-field";
    }
    if (get(this, "isBoolean")) {
      //return LdEntryBooleanField;
      return "ld-entry/boolean-field";
    }
  }),
  kindObv: observer("kind", function(this: LdEntryField, ev){
    const kind = get(this, "kind");
    console.debug(this);
  }),
  actions: {
    kindChanged(click) {
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
      let newKind = target.innerText.toLowerCase();
      set(this, "kind", newKind);
    }
  },
}) {
  // normal class body definition here
  kind: string; //required
  value?: any;
  changeableKind: boolean = false;

  kindChanged = computed("undefined", function() {
    const self = this;
    return function(args) {
      self.send("kindChanged", args);
    }
  });

};
