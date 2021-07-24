import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `
${reset}
    :root {
        --white: #fff;
        --background-gray: #FAFBFD;
        --dark-blue: #090F31;
        --orange: #F0402C;
        --primary: #2962FF;
        --secondary: #455A64;
        --danger: #D32F2F;
        --default: #E0E0E0;
        --default-state: #AEAEAE;
        --text-default: #3F3F3F;
        --variant: #3D5AFE;
        --variant-state: #EAEFFF;
        --disable-shadow: #3D5AFE;
        --disable: #E0E0E0;
        --disable-text: #9E9E9E;
        --title: #4F4F4F;
        --text: #9E9E9E;
        --color-text: #333333;
        --color-text-states: #828282;
        --font-primary: 'Noto Sans JP', sans-serif;
        --font-code: 'Ubuntu Mono', monospace;
    }
    * {
        padding: 0;
        box-sizig: border-box;
        margin: 0;
    }
    body::-webkit-scrollbar {
        width: 5px;
    }
  
    body::-webkit-scrollbar-thumb {
        background-color: var(--orange);
    }
    body {
        color: var(--text);
        height: 100vh;
        overflow-x: hidden;
        text-rendering: optimizeLegibility;
    }
    #root {
        height: 100%;
        
        @media(min-width: 900px) {
            display: grid;
            grid-template-columns: 20% 1fr;
            grid-template-rows: 100% auto;
            grid-column-gap: 24px;
        }
    }
`

export default GlobalStyle