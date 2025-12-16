// Comic Fiesta 2025 Interactive Booth Map
// File   :  main.js "Main layout controller"
// Author :  looa.dev
// Date   :  December 2025

// Define booth grid arrays
const arrayC1 = [
    18,1,
    17,2,
    16,3,
    15,4,
    14,5,
]
const arrayC2 = [
    13,6,
    12,7,
    11,8,
    10,9,
]
const arrayC3 = [
    10,9,8,7,6,
    1,2,3,4,5,
]
// Define booth groups
const groupC1 = ['C-F','C-E','C-D','C-C','C-B'];
// Define booth grid function
function makegrid(group, booth, subgrid) {
    const btn = document.createElement('button');
    booth = booth.toString().padStart(2,'0');
    btn.id = group + booth;
    btn.textContent = booth;
    btn.addEventListener('click', () => alert(`Clicked booth ${booth}`));
    subgrid.appendChild(btn);
}
// Generate booth grids
groupC1.forEach(group => {
    // Populate upper half of groups C-B to C-F
    const gridC1 = document.getElementById(`${group}-GRID-1`);
    arrayC1.forEach(booth => { makegrid(group, booth, gridC1) });

    // Populate lower half of groups C-B to C-F
    const gridC2 = document.getElementById(`${group}-GRID-2`);
    arrayC2.forEach(booth => { makegrid(group, booth, gridC2) });
});
    // Populate group C-A
    const gridC3 = document.getElementById(`C-A-GRID-1`);
    arrayC3.forEach(booth => { makegrid("C-A", booth, gridC3) });