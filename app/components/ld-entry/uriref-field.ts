import Component from '@ember/component';
import {computed, get, set} from "@ember/object";
import LdEntryStringField from "linked-data-forms/components/ld-entry/string-field";

export default class LdEntryUrirefField extends Component.extend({
  // anything which *must* be merged to prototype here
  actions: {
  }
}) {
  // normal class body definition here
  form: any;
  value?: string;
  placeholder?: string;
  label?: string;
  showSearchBtn: boolean = true;
  changeableKind: boolean = false;

};
