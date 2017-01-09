/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="../node_modules/protobufjs/index.d.ts" />

namespace PBB.builder {

  type ScalarType = String | Boolean | Number;

  function buildScalarDefault(field: any): ScalarType |  undefined {
    return protobuf.types.defaults[field.type];
  }

  function buildDefault(field: any): any {
    if (PBB.utils.isScalarType(field)) {
      return buildScalarDefault(field);
    } else {
      return field.id;
    }
  }

  export function defaults(message: any): any {
    let defaults = {};

    Object.keys(message.fields).forEach((fieldName) => {
      const field = message.fields[fieldName];

      defaults[field.name] = buildDefault(field);
    });

    return defaults;
  }

}
