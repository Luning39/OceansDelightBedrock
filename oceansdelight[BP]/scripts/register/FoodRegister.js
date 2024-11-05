var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
import { ItemStopUseAfterEvent, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
export class FoodRegister {
    eat(args) {
        const itemStack = args.itemStack;
        const player = args.source;
        const useDuration = args.useDuration;
        if (itemStack && useDuration == 0) {
            switch (itemStack.typeId) {
                case "oceansdelight:cabbage_wrapped_elder_guardian":
                    player.addEffect('saturation', 30 * 20, {
                        amplifier: 0
                    });
                    break;
                case "oceansdelight:guardian_soup":
                    player.addEffect('saturation', 180 * 20, {
                        amplifier: 0
                    });
                    break;
                case "oceansdelight:tentacles":
                    player.addEffect('blindness', 30 * 20, {
                        amplifier: 0
                    });
                    break;
                case "oceansdelight:elder_guardian_slice":
                    if (Math.random() < 0.5) {
                        player.addEffect('mining_fatigue', 150 * 20, {
                            amplifier: 0
                        });
                    }
                    break;
            }
        }
    }
}
__decorate([
    EventAPI.register(world.afterEvents.itemStopUse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof ItemStopUseAfterEvent !== "undefined" && ItemStopUseAfterEvent) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], FoodRegister.prototype, "eat", null);
//# sourceMappingURL=FoodRegister.js.map