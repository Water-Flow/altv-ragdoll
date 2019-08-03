import * as alt from 'alt';
import * as game from 'natives';

export default class Ragdoll {
  constructor() {
    this.shift = false;
    this.ragdoll = false;
    this.localPlayer = alt.Player.local;

    alt.on('update', () => {
      if (this.shift && this.ragdoll) {
        this.doRagdoll();
      }
    });
  }

  start() {
    this.doRagdoll();
  }

  stop() {
    this.setRagdoll(false);
    this.setShift(false);
  }

  setShift(value) {
    this.shift = value;
  }

  setRagdoll(value) {
    this.ragdoll = value;
  }

  doRagdoll() {
    // prevent if player is in any vehicle
    if (game.isPedInAnyVehicle(this.localPlayer.scriptID, false)) {

      // but not on bikes
      if (!game.isPedOnAnyBike(this.localPlayer.scriptID)) {
        return;
      }

    } else {

      const currentWeapon = game.getSelectedPedWeapon(this.localPlayer.scriptID);

      // prevent if player is holding weapon and isn't jumping or climbing
      if (game.getWeaponClipSize(currentWeapon) > 0 && !game.isPedJumping(this.localPlayer.scriptID) && !game.isPlayerClimbing(this.localPlayer.scriptID)) {
        return;
      }

    }

    game.setPedToRagdoll(this.localPlayer.scriptID, 1000, 1000, 0, false, false, false);
  }
}
