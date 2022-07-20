// https://www.omnicalculator.com/physics/compton-wavelength

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const compotonWavelengthRadio = document.getElementById('compotonWavelengthRadio');
const massRadio = document.getElementById('massRadio');

let compotonWavelength;
let mass = v;
const lightSpeed = 299792458;
const h = 6.62607e-34;

// labels of the inpust
const variable = document.getElementById('variable');

compotonWavelengthRadio.addEventListener('click', function() {
  variable.textContent = 'Mass (kg)';
  mass = v;
});

massRadio.addEventListener('click', function() {
  variable.textContent = 'Compton wavelength (m)';
  compotonWavelength = v;
});

btn.addEventListener('click', function() {
  
  if(compotonWavelengthRadio.checked)
  result.textContent = `Compton wavelength = ${computeComptonWavelength()} pm`;

  else if(massRadio.checked)
  result.textContent = `Mass = ${computeMass()} u`;
})

// calculation

function computeComptonWavelength() {
  return (h / (Number(mass.value) * lightSpeed)) * 6.02214076e+38;
}

function computeMass() {
  return (h / (Number(compotonWavelength.value) * lightSpeed)) * 6.02214076e+38;
}
