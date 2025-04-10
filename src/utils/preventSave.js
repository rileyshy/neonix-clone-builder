
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

  // Prevent Shift+Ctrl+I, Shift+Command+I (inspect element)
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'i' || e.key === 'I')) {
    e.preventDefault();
    return false;
  }

  // Prevent Shift+Ctrl+C, Shift+Command+C (inspect element / select element)
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'c' || e.key === 'C')) {
    e.preventDefault();
    return false;
  }

  // Prevent Shift+Ctrl+J, Shift+Command+J (open console)
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'j' || e.key === 'J')) {
    e.preventDefault();
    return false;
  }

  // Prevent Alt+Command+I (Safari dev tools)
  if (e.altKey && e.metaKey && (e.key === 'i' || e.key === 'I')) {
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

// Detect DevTools opening
const devToolsDetector = () => {
  const widthThreshold = window.outerWidth - window.innerWidth > 160;
  const heightThreshold = window.outerHeight - window.innerHeight > 160;
  
  if (widthThreshold || heightThreshold) {
    document.body.innerHTML = '<h1>Developer Tools detected. This action is not allowed.</h1>';
  }
};

// Check continuously
setInterval(devToolsDetector, 1000);

// Also detect via console debugging
const consoleDetector = () => {
  const devtools = /./;
  devtools.toString = () => {
    document.body.innerHTML = '<h1>Console activity detected. This action is not allowed.</h1>';
    return '';
  };
  console.log('%c', devtools);
};

// Run console detector
consoleDetector();

console.log('Enhanced anti-save and anti-dev-tools protection enabled');
