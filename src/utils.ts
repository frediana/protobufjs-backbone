/// <reference path="../node_modules/@types/backbone/index.d.ts" />

namespace PBB.utils {

  interface IStore {
    get(key: string): any;
    push(key: string, obj: any): void;
    has(key: string): boolean;
  }

  export function isEnum(protoObj: any): boolean {
    return (typeof protoObj.values !== "undefined")
    && (typeof protoObj.valuesById !== "undefined");
  }

  export function isScalarType(protoObj: any): boolean {
    return protobuf.types.basic.hasOwnProperty(protoObj.type);
  }

  export class MemoryStore implements IStore {
    private store: any;

    constructor() {
      this.store = {};
    }

    get(key: string): any {
      if (this.has(key)) {
        return this.store[key];
      }
    }

    has(key: string): boolean {
      return this.store.hasOwnProperty(key);
    }

    push(key: string, obj: any, force: boolean = false) {
      if (!this.has(key)) {
        this.store[key] = obj;
      } else if (force) {
        this.store[key] = obj;
      }
    }
  }

}
