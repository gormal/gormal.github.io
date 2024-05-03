import type { MarkdownNode } from "@nuxt/content/types";

export function minutesToRead(body: MarkdownNode | null) : string {
    const text = collectText(body);
    const wordCount = countWords(text);
    const timeToRead = Math.ceil(wordCount / 225)

    return `${timeToRead} min`;
  }
  
  
  function collectText(node: MarkdownNode | null): string {
    if (!node) return '';
    
    let text = node.value || '';
  
    if (node.children && node.children.length > 0) {
      for (const child of node.children) {
        text += ' ' + collectText(child);
      }
    }
  
    return text;
  }
  
  function countWords(text: string): number {
    const words = text.trim().match(/\w+/g);
    return words ? words.length : 0;
  }