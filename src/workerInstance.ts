// src/workerInstance.ts
export const chatWorker = new Worker(new URL('./worker.ts', import.meta.url), {
    type: 'module',
});
