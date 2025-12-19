// Comic Fiesta 2025 Interactive Booth Map
// File   :  main.js "Main layout controller"
// Author :  looa.dev
// Date   :  December 2025

// Define booth grid function
function makegrid(group, booth, subgrid) {
    const btn = document.createElement('button');
    booth = booth.toString().padStart(2,'0');
    btn.id = group + booth;
    btn.textContent = booth;
    btn.addEventListener('click', () => alert(`Clicked booth ${btn.id}`));
    subgrid.appendChild(btn);
}
/* COSPLAY BOOTHS ***************************************************** */
// Define C booth grid arrays
const arrayC1 = [
    18,1,
    17,2,
    16,3,
    15,4,
    14,5,
];
const arrayC2 = [
    13,6,
    12,7,
    11,8,
    10,9,
];
const arrayC3 = [
    10,9,8,7,6,
    1,2,3,4,5,
];
// Define C booth groups
const groupC1 = ['C-F','C-E','C-D','C-C','C-B'];
// Generate C booth grids
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

/* PREMIUM BOOTHS ******************************************** */
// Define P booth grid arrays
const arrayP1 = [
    20,1,
    19,2,
    18,3,
    17,4,
    16,5,
];
const arrayP2 = [
    15,6,
    14,7,
    13,8,
    12,9,
    11,10,
];
const arrayP3 = [
    18,1,
    17,2,
    16,3,
    15,4,
];
const arrayP4 = [
    14,5,
    13,6,
    12,7,
    11,8,
    10,9,
];
// Define P booth groups
const groupP1 = ['P-K','P-H','P-G','P-F','P-E','P-D','P-C','P-A'];
const groupP2 = ['P-J','P-B'];
// Generate P booth grids
groupP1.forEach(group => {
    // Populate upper half of groups P-A to P-K
    const gridP1 = document.getElementById(`${group}-GRID-1`);
    arrayP1.forEach(booth => { makegrid(group, booth, gridP1) });

    // Populate lower half of groups P-A to P-K
    const gridP2 = document.getElementById(`${group}-GRID-2`);
    arrayP2.forEach(booth => { makegrid(group, booth, gridP2) });
});
groupP2.forEach(group => {
    // Populate upper half of groups P-B and P-J
    const gridP3 = document.getElementById(`${group}-GRID-1`);
    arrayP3.forEach(booth => { makegrid(group, booth, gridP3) });

    // Populate lower half of groups P-B&J (I'm hungry.)
    const gridP4 = document.getElementById(`${group}-GRID-2`);
    arrayP4.forEach(booth => { makegrid(group, booth, gridP4) });
});
/* BASIC BOOTHS ********************************************** */
/* B booths are arranged linearly, allowing us to 
 * generate the booth IDs without preset grid arrays.
 * However, grid generation will be slightly different. */
// Define B booth groups
const groupB1 = ['B-M',];
const groupB2 = ['B-L','B-K','B-J','B-H',];
const groupB3 = ['B-G','B-F',];
const groupB4 = ['B-E','B-C','B-B',];
const groupB5 = ['B-D','B-A',];
// Generate B booth grids
groupB1.forEach(group => {
    const gridB1 = document.getElementById(`${group}-GRID-1`)
    
})