const context = new AudioContext();
const oscillator = context.createOscillator();

// Define the frequencies to be used for each key.
// reference: https://pages.mtu.edu/~suits/notefreqs.html
const notes = {
  c2: 65.41,
  d2: 73.42,
  e2: 82.41,
  f2: 87.31,
  g2: 98,
  a2: 110,
  b2: 123.47,
  c3: 130.81,
  d3: 146.83,
  e3: 164.81,
  f3: 174.61,
  g3: 196,
  a3: 220,
  b3: 246.94,
  c4: 261.63,
  d4: 293.66,
  e4: 329.63,
  f4: 349.23,
  g4: 392.00,
  a4: 440,
  b4: 493.88,
  c5: 523.25,
  d5: 587.33,
  e5: 659.25,
  f5: 698.46,
  g5: 783.99,
  a5: 880,
  b5: 987.77,
  c6: 1046.50,
}

let freq = 150

oscillator.frequency = freq;

var gain = context.createGain();

oscillator.connect(gain);
gain.connect(context.destination);

var now = context.currentTime;

gain.gain.setValueAtTime(1, now);
gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
oscillator.start(now);
oscillator.stop(now + 0.5);

document.addEventListener("click", function(evnt){
  console.log(evnt.target.id);
});