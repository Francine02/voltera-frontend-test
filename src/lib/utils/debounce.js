import { goto } from '$app/navigation';

export function debounce(name, timeout) {
    clearTimeout(timeout);

    if (!name.trim()) {
        goto(`/`, { replaceState: true });
        return timeout;
    }

    return setTimeout(() => {
        goto(`/?name=${encodeURIComponent(name)}`, { replaceState: true });
    }, 1000);
}