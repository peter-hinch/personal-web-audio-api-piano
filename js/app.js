const context = new AudioContext();
const oscillator = context.createOscillator();

// Define the frequencies to be used for each key.
// reference: https://pages.mtu.edu/~suits/notefreqs.html
const notes = {
  c2: 65.41,
  cs2: 69.3,
  d2: 73.42,
  ds2: 77.78,
  e2: 82.41,
  f2: 87.31,
  fs2: 92.5,
  g2: 98,
  gs2: 103.83,
  a2: 110,
  as2: 116.54,
  b2: 123.47,
  c3: 130.81,
  cs3: 138.59,
  d3: 146.83,
  ds3: 155.56,
  e3: 164.81,
  f3: 174.61,
  fs3: 185,
  g3: 196,
  gs3: 207.65,
  a3: 220,
  as3: 233.08,
  b3: 246.94,
  c4: 261.63,
  cs4: 277.18,
  d4: 293.66,
  ds4: 311.13,
  e4: 329.63,
  f4: 349.23,
  fs4: 369.99,
  g4: 392.00,
  gs4: 415.30,
  a4: 440,
  as4: 466.16,
  b4: 493.88,
  c5: 523.25,
  cs5: 554.37,
  d5: 587.33,
  ds5: 622.25,
  e5: 659.25,
  f5: 698.46,
  fs5: 739.99,
  g5: 783.99,
  gs5: 830.61,
  a5: 880,
  as5: 932.33,
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