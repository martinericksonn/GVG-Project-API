"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
const system_message_model_1 = require("../model/system_message.model");
const account_model_1 = require("../model/account.model");
class Helper {
    static validAccountBody(body) {
        var systemMessage = new system_message_model_1.SystemMessage();
        var keys = Helper.describeClassUser();
        var types = new Map();
        types.set('name', typeof '');
        types.set('id', typeof 0);
        types.set('department', typeof '');
        types.set('collegeName', typeof '');
        types.set('onLeave', typeof true);
        types.set('resigned', typeof true);
        for (const key of Object.keys(body)) {
            if (!keys.includes(`${key}`) && typeof body[key] != types.get(key)) {
                throw systemMessage.error(502);
            }
            if (typeof body[key] != types.get(key)) {
                console.log(body[key]);
                console.log(types.get(key));
                throw this.systemMessage.custom({
                    success: false,
                    data: `${key} is not a valid attribute`,
                });
            }
        }
    }
    static describeClassUser() {
        let a = new account_model_1.Account('', 123, '', '', false, false);
        let array = Object.getOwnPropertyNames(a);
        return array;
    }
}
exports.Helper = Helper;
Helper.systemMessage = new system_message_model_1.SystemMessage();
//# sourceMappingURL=helper.js.map