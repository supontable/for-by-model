import React from 'react'
import Form from './components/Form'
import './App.css'
import {FormProvider} from "./FormContext"

function App() {
  return (
      <FormProvider>
          <div className="App">
              <header className="App-header">
                  <Form />
              </header>
          </div>
      </FormProvider>
  )
}

export default App
