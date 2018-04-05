import Route from '@ember/routing/route';

export default class Index extends Route.extend({
  // anything which *must* be merged to prototype here
  model() {
    return [
      {label: "name", kind: "string", placeholder: "your name", value: undefined},
      {label: "age", kind: "number", placeholder: "your age", value: undefined},
      {label: "colour", kind: "uriref", placeholder: "your favourite colour", value: undefined},
      {label: "are you over 18?", kind: "boolean", value: false}
      ];
  }
}) {
  // normal class body definition here

}
