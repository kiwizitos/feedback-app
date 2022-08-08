import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIcon from './components/AboutIcon'

import { FeedbackProvider } from './context/FeedbackContext'

import About from './pages/About'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text='Feedback UI' />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              exact
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIcon />
                </>
              }></Route>

            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
