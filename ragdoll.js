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
    this.setRagdoll(true);
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
    let prevent = false;

    if (game.isPedInAnyVehicle(this.localPlayer.scriptID, false) && !game.isPedOnAnyBike(this.localPlayer.scriptID)) {
      prevent = true;
    }

    if (prevent === false) {
      game.setPedToRagdoll(this.localPlayer.scriptID, 1000, 1000, 0, false, false, false);
    }
  }
}
