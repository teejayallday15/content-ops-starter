import '../css/main.css';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
useEffect(() => {
const script = document.createElement('script');
script.src = 'https://app.stammer.ai/static/chatbot/js/chatbubble.js';
script.setAttribute('data-id', 'eeea7869-fbe3-45d0-a45f-cdbd4ae292d1');
script.setAttribute('data-domain', 'https://app.stammer.ai');
script.setAttribute('data-position', 'right');
document.body.appendChild(script);
}, []);

return <Component {...pageProps} />;
}
