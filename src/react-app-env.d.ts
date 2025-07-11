/// <reference types="react-scripts" />

declare global {
  namespace React {
    function useState<T>(initialState: T): [T, (newState: T) => void];
    function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
    span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
    a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
    button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
    li: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement>;
  }
}
