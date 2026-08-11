import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Deck } from './deck/Deck.tsx'
import { PrintDeck } from './print/PrintDeck.tsx'

const isPrint = new URLSearchParams(window.location.search).get('print') === '1'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isPrint ? <PrintDeck /> : <Deck />}
  </StrictMode>,
)
