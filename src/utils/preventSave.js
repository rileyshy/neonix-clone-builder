
/**
 * preventSave.js - Script to prevent common webpage saving methods
 * Note: This cannot prevent all forms of saving like screenshots or advanced methods
 */

// Disable right-click context menu
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  return false;
});

// Disable keyboard shortcuts for saving
document.addEventListener('keydown', (e) => {
  // Prevent Ctrl+S, Command+S
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    return false;
  }
  
  // Prevent Ctrl+P, Command+P (print, which can be used to save as PDF)
  if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
    e.preventDefault();
    return false;
  }
  
  // Prevent Ctrl+U, Command+U (view source)
  if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
    e.preventDefault();
    return false;
  }
  
  // Prevent F12 key (developer tools)
  if (e.key === 'F12') {
    e.preventDefault();
    return false;
  }
});

// Disable text selection
document.addEventListener('selectstart', (e) => {
  e.preventDefault();
  return false;
});

// Disable drag and drop
document.addEventListener('dragstart', (e) => {
  e.preventDefault();
  return false;
});

// Add a CSS class to prevent selection
document.body.classList.add('noselect');

// Inject CSS to prevent selection
const style = document.createElement('style');
style.textContent = `
  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
document.head.appendChild(style);

// Disable save image functionality
document.addEventListener('mousedown', (e) => {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
    return false;
  }
});

// Periodically clear clipboard
setInterval(() => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText('');
  }
}, 3000);

// Add warning when trying to leave page
window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  e.returnValue = '';
  return '';
});

console.log('Anti-save protection enabled');
