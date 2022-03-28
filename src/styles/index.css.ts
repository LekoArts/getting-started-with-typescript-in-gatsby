import { style, globalStyle } from "@vanilla-extract/css"

globalStyle(`html, body`, {
  height: `100%`,
  fontSize: `18px`,
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
})

export const list = style({
  listStyleType: `square`
})

export const listItem = style({
  fontWeight: 500
})