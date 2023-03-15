export function containsNumber(str: string) {
    return /[0-9]/.test(str);
}
export function containsSpecialChars(str: string) {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str)
}
