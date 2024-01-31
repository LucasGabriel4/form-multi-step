import './App.css'
import BgSidebar from './components/BgSidebar'
import FormContainer from './components/FormContainer'
import Step from './components/Step'
import { useStorage}  from './Hooks/useContext'
import { steps } from './mocks/stepsData'





function App() {
  const {changeStep} = useStorage()

  return (
    <main className='flex justify-center py-[0] md:p-[20px]'>
        <FormContainer>
          <BgSidebar>
            {steps.map(({ step, stepOption }) => {
              return <Step key={step} step={step} stepOption={stepOption} />
            })}
          </BgSidebar>

          {changeStep()}
        </FormContainer>
    </main>

  )
}

export default App
