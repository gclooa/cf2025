// Comic Fiesta 2025 Interactive Booth Map
// File   :  mapview.js "Map viewport controller"
// Author :  looa.dev
// Date   :  December 2025

var container = document.querySelector(".map-container");
var map = document.querySelector(".map");

let isPanning = false;
let startX, startY;
let mapX = 0, mapY = 0;
let velocityX = 0, velocityY = 0;
let lastMouseX = 0, lastMouseY = 0;
let lastTimestamp = 0;
let scale = 1;

const applyTransform = () => {
    map.style.transform = `translate(${mapX}px, ${mapY}px) scale(${scale})`;
};

// Clamp map panning to a maximum of half the viewport size from each edge.
// If map is smaller than viewport, center it.
const clampPosition = () => {
    const cw = container.clientWidth;
    const ch = container.clientHeight;

    const padX = cw / 2; // Half screen width
    const padY = ch / 2; // Half screen height

    const mapW = map.offsetWidth * scale;
    const mapH = map.offsetHeight * scale;

    // Clamp mapX
    let minX = cw - padX - mapW; // Subtract padX as right edge aligns with container.
    let maxX = padX;             // Map left edge may be at most padX from container left edge.
    if (minX > maxX) {           // If map is smaller than the padded area horizontally, center map.
        mapX = (cw - mapW) / 2;
    } 
    else {
        if (mapX < minX) {
            mapX = minX;
            velocityX = 0;
        }
        if (mapX > maxX) {
            mapX = maxX;
            velocityX = 0;
        }
    }
    // Clamp mapY
    let minY = ch - padY - mapH; // Subtract padY as bottom edge aligns with container.
    let maxY = padY;             // Map top edge may be at most padY from container top edge.
    if (minY > maxY) {           // If map is smaller than the padded area vertically, center map.
        mapY = (ch - mapH) / 2;
    } 
    else {
        if (mapY < minY) {
            mapY = minY;
            velocityY = 0;
        }
        if (mapY > maxY) {
            mapY = maxY;
            velocityY = 0;
        }
    }
};

// Smooth panning with inertia
const animate = (timestamp) => {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const dt = (timestamp - lastTimestamp) / 16;
    lastTimestamp = timestamp;

    // Apply inertia only when not panning
    if (!isPanning) {
        mapX += velocityX * dt;
        mapY += velocityY * dt;
        // Apply friction
        velocityX *= 0.92;
        velocityY *= 0.92;
        // Round off minute movements
        if (Math.abs(velocityX) < 0.01) velocityX = 0;
        if (Math.abs(velocityY) < 0.01) velocityY = 0;
    }
    // Ensure we don't slide past allowed bounds
    clampPosition();

    applyTransform();
    requestAnimationFrame(animate);
};
requestAnimationFrame(animate);

// Get mouse hold
container.addEventListener("mousedown", (e) => {
    isPanning = true;
    container.style.cursor = "grabbing";
    startX = e.clientX - mapX;
    startY = e.clientY - mapY;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    velocityX = 0;
    velocityY = 0;
});

// Get mouse movement
window.addEventListener("mousemove", (e) => {
    if (!isPanning) return;

    mapX = e.clientX - startX;
    mapY = e.clientY - startY;

    velocityX = e.clientX - lastMouseX;
    velocityY = e.clientY - lastMouseY;

    lastMouseX = e.clientX;
    lastMouseY = e.clientY;

    // Clamp dragging to keep within padded edges
    clampPosition();
    applyTransform();
});

// Get mouse release
window.addEventListener("mouseup", () => {
    isPanning = false;
    container.style.cursor = "grab";
});

// Get mouse wheel
container.addEventListener("wheel", (e) => {
    e.preventDefault();

    const zoomIntensity = 0.15;
    const oldScale = scale;
    const direction = e.deltaY > 0 ? -1 : 1;
    const newScale = scale + direction * zoomIntensity;

    // Clamp zoom range
    scale = Math.min(Math.max(newScale, 0.3), 4);

    // Get cursor position relative to map
    const rect = container.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left - mapX) / oldScale;
    const offsetY = (e.clientY - rect.top - mapY) / oldScale;

    // Adjust for zoom so that cursor position stays consistent
    mapX = e.clientX - rect.left - offsetX * scale;
    mapY = e.clientY - rect.top - offsetY * scale;

    // Keep the map within allowed padded bounds after zoom
    clampPosition();
    applyTransform();
});

// Re-clamp and render on resize
window.addEventListener('resize', () => {
    clampPosition();
    applyTransform();
});

// Initial clamp to enforce padding on load
clampPosition();
applyTransform();
