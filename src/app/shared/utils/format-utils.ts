export class FormatUtils {

  static upperCase(text: string): string {
    if(!text || !text.trim()) return "";

    return text.toUpperCase();
  }

  static camelCase(text: string): string {
    if(!text || !text.trim()) return "";
    
    let newString = "";
    const words = text.split(/\s+/);

    for (let i = 0; i < words.length; i++) {
        const value = words[i];
        
        if (i > 0) {
            newString += " ";
        }

        if(!value) continue;

        newString += value[0].toUpperCase();

        if (value.length > 1) {
            newString += value.slice(1);
        }
    }
        
    return newString;
  }

  static textTrim(text: string): string {
    return text.trim();
  }
}