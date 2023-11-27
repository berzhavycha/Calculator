export function getElementsByText(str: string, tag: string): HTMLElement {
  return Array.from(document.getElementsByTagName(tag)).find((el) => {
    if (el && el.textContent) {
      return el.textContent.trim() === str.trim();
    }
    return false;
  }) as HTMLElement;
}
