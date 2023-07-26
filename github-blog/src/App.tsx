import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/defaultTheme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { GlobalStyle } from './themes/styles/global'
import PostPage from './pages/PostPage'
import { GithubBlogContextProvider } from "./contexts/GithubBlogContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GithubBlogContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/post/:id' element={<PostPage />} />
          </Routes>
        </BrowserRouter>
      </GithubBlogContextProvider>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
