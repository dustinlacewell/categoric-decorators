"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMemberCategoric = void 0;
var uuid_1 = require("uuid");
var createMemberCategoric = function () {
    var metadataKey = "categorics:".concat((0, uuid_1.v4)());
    var decorator = function (data) {
        return function (target, name) {
            var _a;
            // get metas for category
            var metas = Reflect.getMetadata(metadataKey, Reflect) || new Map();
            // get meta for target
            var meta = metas.get(target) || {};
            if (meta === undefined) {
                meta = {
                    target: target,
                    members: (_a = {},
                        _a[name] = {
                            target: target,
                            name: name,
                            data: data
                        },
                        _a)
                };
            }
            else {
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
                meta.target = target;
            }
            // store meta for target
            metas.set(target, meta);
            // store metas for category
            Reflect.defineMetadata(metadataKey, metas, Reflect);
        };
    };
    var locator = function () {
        return Reflect.getMetadata(metadataKey, Reflect) || {};
    };
    return [decorator, locator, function () { return Array.from(locator().values()); }];
};
exports.createMemberCategoric = createMemberCategoric;
//# sourceMappingURL=createMemberCategoric.js.map