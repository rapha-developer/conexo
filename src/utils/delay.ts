
export function delayUtil(delay: number) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay);
    });
}