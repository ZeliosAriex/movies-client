import '@emotion/react'

// Type the theme object for autocompletion inside styled components
declare module '@emotion/react' {
  export interface Theme {
    responsive: {
      mobileContentWidth: string
      tabletContentWidth: string
      desktopContentWidth: string
      lgDesktopContentWidth: string
    }
  }
}
