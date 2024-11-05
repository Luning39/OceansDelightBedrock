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
import { EntityEquippableComponent, EntityHurtAfterEvent, EquipmentSlot, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { RandomAPI } from "../lib/RandomAPI";
import { ItemAPI } from "../lib/ItemAPI";
export class LootingRegister {
    looting(args) {
        const entity = args.damageSource.damagingEntity;
        const hurtEntity = args.hurtEntity;
        if (!entity || !hurtEntity)
            return;
        const equipment = entity.getComponent(EntityEquippableComponent.componentId);
        const mainHand = equipment?.getEquipmentSlot(EquipmentSlot.Mainhand);
        if (!mainHand?.hasTag('farmersdelight:is_knife'))
            return;
        const health = hurtEntity.getComponent('minecraft:health');
        if (!health?.currentValue && hurtEntity.typeId === 'minecraft:guardian') {
            try {
                ItemAPI.spawn(hurtEntity, 'oceansdelight:guardian', RandomAPI.RandomInt(2));
            }
            catch (error) {
            }
        }
        if (!health?.currentValue && hurtEntity.typeId === 'minecraft:squid') {
            try {
                ItemAPI.spawn(hurtEntity, 'oceansdelight:tentacles', RandomAPI.RandomInt(3));
            }
            catch (error) {
            }
        }
        if (!health?.currentValue && hurtEntity.typeId === 'minecraft:elder_guardian') {
            try {
                ItemAPI.spawn(hurtEntity, 'oceansdelight:elder_guardian_slab', RandomAPI.RandomInt(2));
            }
            catch (error) {
            }
        }
    }
}
__decorate([
    EventAPI.register(world.afterEvents.entityHurt),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof EntityHurtAfterEvent !== "undefined" && EntityHurtAfterEvent) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], LootingRegister.prototype, "looting", null);
//# sourceMappingURL=LootingRegister.js.map