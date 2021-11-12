import { marked } from 'marked';

const renderer = new marked.Renderer();

renderer.link = (href, title, text) => {
  return `<a href="${href}" target="_blank" rel="noopener">${text}</a>`
}

export default function render(string) {
  return marked.parse(string, { renderer });
}