export class ButtonUtils {
    static isDisabledButton(isDisabled: boolean, clases = "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"){
        return isDisabled ? clases : "";
    }
}