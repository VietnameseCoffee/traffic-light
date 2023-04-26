export interface Style {
  alignItems?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  display?: string;
  flexDirection?: string;
  height?: string;
  margin?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  justifyContent?: string;
  opacity?: string;
  padding?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  width?: string;
}

class BaseElement {
  constructor() {}

  addStyle(el: HTMLElement, styles: Style): HTMLElement {
    const elStyles = el.style;
    let key: keyof Style;
    for (key in styles) {
      elStyles[key] = styles[key];
    }

    return el;
  }
}

export default BaseElement;
