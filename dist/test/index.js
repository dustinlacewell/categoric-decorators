"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./enemies");
var decorators_1 = require("./decorators");
var main = function () {
    console.log("Locating enemies...");
    var enemies = (0, decorators_1.locateEnemies)();
    console.log(enemies);
    for (var _i = 0, _a = Object.values(enemies); _i < _a.length; _i++) {
        var _b = _a[_i], target = _b.target, data = _b.data;
        console.log("\n            ".concat(target.name, ": \n            name: ").concat(data.name, "\n            maxHealth: ").concat(data.maxHealth, "\n        "));
    }
};
main();
//# sourceMappingURL=index.js.map