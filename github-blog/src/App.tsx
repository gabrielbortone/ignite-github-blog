import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/defaultTheme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { GlobalStyle } from './themes/styles/global'
import PostPage from './pages/PostPage'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/:id' element={<PostPage />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
