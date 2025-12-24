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
/* BASIC BOOTHS **************************************************** */
/* B booths are arranged linearly, allowing us to generate the booth
 * IDs without preset grid arrays. However, grid generation will be 
 * slightly different. To begin, we define B booth groups by their 
 * length and gap pattern as usual.                                  */
const groupB1 = ['B-M',];
const groupB2 = ['B-L','B-K','B-J','B-H',];
const groupB3 = ['B-G','B-F',];
const groupB4 = ['B-E','B-C','B-B',];
const groupB5 = ['B-D',];
const groupB6 = ['B-A',];
/* Given the larger amount of B booths, we will then define 
 * additional gap information to programmatically assign 
 * gaps instead of hardcoding them in css.                 
 * gap = [ [position, width], [position, width], ... ]   */
const gapB1 = [[34,1],[30,2],[26,1],[22,2],[19,1],[15,1],[10,1],[5,1],];
const gapB2 = [[40,1],[35,1],[30,1],[25,1],[20,1],[15,1],[10,1],[5,1],];
const gapB3 = [[15,1],[10,1],[5,1],];
const gapB4 = [[10,1],[5,1],];
const gapB5 = [[10,2],[5,1],];
const gapB6 = [[10,2],[6,1],];
/* Make a unique function to handle gap assignment. */
function makegap(group, gap) {
    gap[0] = gap[0].toString().padStart(2,'0');
    const button = document.getElementById(`${group}${gap[0]}`);
    button.style.marginRight = `${gap[1] * (60 + 2)}px`;
}
/* Finally, generate B booth grids */
groupB1.forEach(group => {
    const gridB1 = document.getElementById(`${group}-GRID-1`);
    for (let booth = 36; booth > 0; booth--) makegrid(group, booth, gridB1);
    gapB1.forEach(gap => { makegap(group, gap); })
})
groupB2.forEach(group => {
    const gridB2 = document.getElementById(`${group}-GRID-1`);
    for (let booth = 42; booth > 0; booth--) makegrid(group, booth, gridB2);
    gapB2.forEach(gap => { makegap(group, gap); })
})
groupB3.forEach(group => {
    const gridB3 = document.getElementById(`${group}-GRID-1`);
    for (let booth = 19; booth > 0; booth--) makegrid(group, booth, gridB3);
    gapB3.forEach(gap => { makegap(group, gap); })
})
groupB4.forEach(group => {
    const gridB4 = document.getElementById(`${group}-GRID-1`);
    for (let booth = 13; booth > 0; booth--) makegrid(group, booth, gridB4);
    gapB4.forEach(gap => { makegap(group, gap); })
})
groupB5.forEach(group => {
    const gridB5 = document.getElementById(`${group}-GRID-1`);
    for (let booth = 12; booth > 0; booth--) makegrid(group, booth, gridB5);
    gapB5.forEach(gap => { makegap(group, gap); })
})
groupB6.forEach(group => {
    const gridB6 = document.getElementById(`${group}-GRID-1`);
    for (let booth = 12; booth > 0; booth--) makegrid(group, booth, gridB6);
    gapB6.forEach(gap => { makegap(group, gap); })
})
/* ADDITIONAL PREMIUM BOOTHS **************************************************** */
/* There is a small subsection of premium booths located in the basic booth hall. */
// Define additional P booth grid arrays
const arrayP5 = [
    1,2,3,4,5,6,
    12,11,10,9,8,7,
];
// Define additional P booth groups
const groupP3 = ['P-N','P-M','P-L',];
// Generate additional P booth grids
groupP3.forEach(group => {
    const gridP5 = document.getElementById(`${group}-GRID-1`);
    arrayP5.forEach(booth => { makegrid(group, booth, gridP5) });
})