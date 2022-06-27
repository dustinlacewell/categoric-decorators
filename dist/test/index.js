"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
var main = function () {
    var enemies = (0, decorators_1.locateEnemies)();
    for (var _i = 0, _a = Object.values(enemies); _i < _a.length; _i++) {
        var _b = _a[_i], target = _b.target, data = _b.data;
        console.log("\n            " + target.name + ": \n            name: " + data.name + "\n            maxHealth: " + data.maxHealth + "\n        ");
    }
};
main();
//# sourceMappingURL=index.js.map