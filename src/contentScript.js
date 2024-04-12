// Content script
import { getStyle } from '../utils/style';

// Add style
const style = getStyle();
if (style) {
  document.head.append(style);
}

// Add script
const script = document.createElement('script');
script.src = chrome.runtime.getURL('dist/contentScript.js');
document.head.append(script);

// Add link
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = chrome.runtime.getURL('dist/contentScript.css');
document.head.append(link);

// Force refresh
window.location.reload();

export default {};
