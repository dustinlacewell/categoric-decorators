"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMemberCategoric = void 0;
var uuid_1 = require("uuid");
var createMemberCategoric = function () {
    var metadataKey = "categorics:".concat((0, uuid_1.v4)());
    var decorator = function (data) {
        return function (target, name) {
            // get metas for category
            var metas = Reflect.getMetadata(metadataKey, Reflect) || {};
            // get meta for target
            var meta = metas[target.name] || {};
            // get members for target
            var members = meta.members || {};
            // create member metadata
            var member = members[name] || {};
            member.target = target;
            member.name = name;
            member.data = data;
            // store member metadata
            members[name] = member;
            // store members for target
            meta.members = members;
            // store meta for target
            metas[target.name] = meta;
            // store metas for category
            Reflect.defineMetadata(metadataKey, metas, Reflect);
        };
    };
    var locator = function () {
        return Reflect.getMetadata(metadataKey, Reflect) || {};
    };
    return [decorator, locator, function () { return Object.values(locator()); }];
};
exports.createMemberCategoric = createMemberCategoric;
//# sourceMappingURL=createMemberCategoric.js.map