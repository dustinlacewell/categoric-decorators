"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClassCategoric = void 0;
var uuid_1 = require("uuid");
var createClassCategoric = function () {
    var metadataKey = "categorics:".concat((0, uuid_1.v4)());
    var decorator = function (data) {
        return function (target) {
            // get metas for category
            var metas = Reflect.getMetadata(metadataKey, Reflect) || {};
            // get meta for target
            var meta = metas[target.name] || {};
            // set metadata
            meta.target = target;
            meta.data = data;
            // store meta for target
            metas[target] = meta;
            // store metas for category
            Reflect.defineMetadata(metadataKey, metas, Reflect);
        };
    };
    var locator = function () {
        return Reflect.getMetadata(metadataKey, Reflect) || {};
    };
    return [decorator, locator, function () { return Object.values(locator()); }];
};
exports.createClassCategoric = createClassCategoric;
//# sourceMappingURL=createClassCategoric.js.map