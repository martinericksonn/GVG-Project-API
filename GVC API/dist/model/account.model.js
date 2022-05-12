"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
require("firebase/auth");
require("firebase/firestore");
class Account {
    constructor(name, id, department, collegeName, onLeave, resigned) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.collegeName = collegeName;
        this.onLeave = onLeave;
        this.resigned = resigned;
    }
    log() {
        console.log(`${this.name} ${this.id} ${this.department} ${this.collegeName} ${this.onLeave} ${this.resigned}`);
    }
    toJson() {
        return {
            name: this.name,
            id: this.id,
            department: this.department,
            collegeName: this.collegeName,
            onLeave: this.onLeave,
            resigned: this.resigned,
        };
    }
}
exports.Account = Account;
//# sourceMappingURL=account.model.js.map