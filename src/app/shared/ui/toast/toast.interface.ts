export interface ToastConfig {
    severity: 'success' | 'error' | 'warn' | 'info';
    title: string;
    message: string;
}