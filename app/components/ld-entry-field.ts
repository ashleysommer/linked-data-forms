import Component from '@ember/component';
import {computed, get, set} from '@ember/object';
import LdEntryStringField from "linked-data-forms/components/ld-entry/string-field";
import LdEntryUrirefField from "linked-data-forms/components/ld-entry/uriref-field";
import {bind} from "@ember/runloop";
import partials = Handlebars.partials;
import apply = Reflect.apply;

export default class LdEntryField extends Component.extend({
  kind: null,
  // anything which *must* be merged to prototype here
  isString: computed("kind", function(this: LdEntryField): boolean {
    return (get(this, "kind") == "string");
  }),
  isUriRef: computed("kind", function(this: LdEntryField): boolean {
    return (get(this, "kind") == "uriref");
  }),
  isNumber: computed("kind", function(this: LdEntryField): boolean {
    return (get(this, "kind") == "number");
  }),
  entryFieldComponent: computed("kind", "isString", "isUriRef", "isNumber", function(this: LdEntryField): any {
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
  //kind: string; //required
  value?: any;
  changeableKind: boolean = false;

  kindChanged = computed("undefined", function() {
    const self = this;
    return function(args) {
      self.send("kindChanged", args);
    }
  });

};
