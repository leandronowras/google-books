import { useState } from 'react'

import { Layout } from './components/Layout'

import GlobalStyles from './styles/GlobalStyles'

import {BookContext} from './contexts/BookContext'

function App() {
  const [value, setValue] = useState([])

  return (
    <>
        <BookContext.Provider value={[value, setValue]}>
          <Layout />
          <GlobalStyles />
        </BookContext.Provider>
    </>
  );
}

export default App;
