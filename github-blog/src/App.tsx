import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/defaultTheme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { GlobalStyle } from './themes/styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
