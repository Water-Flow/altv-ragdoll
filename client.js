import * as alt from 'alt';
import Ragdoll from 'ragdoll';

const ragdoll = new Ragdoll();
const ragdollKey = 'R';
const shiftKey = 16;

alt.on('keydown', (key) => {
  if (alt.gameControlsEnabled()) {
    if (key === shiftKey) {
      ragdoll.setShift(true);
    }
    if (key === ragdollKey.charCodeAt(0)) {
      ragdoll.start();
    }
  }
});

alt.on('keyup', (key) => {
  if (alt.gameControlsEnabled()) {
    if (key === shiftKey) {
      ragdoll.setShift(false);
    }
    if (key === ragdollKey.charCodeAt(0)) {
      ragdoll.stop();
    }
  }
});