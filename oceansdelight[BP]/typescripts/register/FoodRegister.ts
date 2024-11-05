import {ItemStopUseAfterEvent, world}from "@minecraft/server";
import {EventAPI}from "../lib/EventAPI";
export class FoodRegister {@EventAPI.register(world.afterEvents.itemStopUse)
    eat(args: ItemStopUseAfterEvent) {
        const itemStack = args.itemStack;
        const player = args.source
        const useDuration = args.useDuration
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