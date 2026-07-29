import { format } from 'date-fns';

export function formatBytes(bytes, decimals = 0) {
    if (!+bytes) return '';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export function formatDate(timestamp) {
    if (!timestamp) return '';
    return format(new Date(timestamp), 'dd-MM-yyyy HH:mm');
}
