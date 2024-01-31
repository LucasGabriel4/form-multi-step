import React, { useContext, useRef, useState } from 'react'
import PersonalInfo from '../components/Personal_Info'
import SelectYourPlan from '../components/Select_your_plan'
import plansData from '../mocks/PlansData'
import { Plans } from '../types/Plans'
import PickAddons from '../components/PickAddons'
import FinishingUp from '../components/finishing_up'



type ComplementSelected = {
    complement: string,
    price: string
}

type IGlobalContext = {
  changeStep: () => JSX.Element,
  setCurrentStep:  React.Dispatch<React.SetStateAction<number>>,
  currentStep: number
  plans: Plans[],
  setPlans: React.Dispatch<React.SetStateAction<Plans[]>>,
  changeOptionPlan: boolean,
  setOptionChangePlan:  React.Dispatch<React.SetStateAction<boolean>>,
  activePlan: React.MutableRefObject<string | null>,
  activePlanPrice: React.MutableRefObject<string | null>
  complementsSelected: ComplementSelected[],
  setComplementsSelected: React.Dispatch<React.SetStateAction<ComplementSelected[]>>,
}


const GlobalContext = React.createContext<IGlobalContext | null>(null)


export const useStorage = () => {
    const context = useContext(GlobalContext)
    if(!context) throw new Error('useContext deve estar dentro do provider')
    return context
}

export const GlobalStorage = ({children}:React.PropsWithChildren) => {
    const [currentStep, setCurrentStep] = useState(1)
    const [plans, setPlans] = useState(plansData)
    const [changeOptionPlan, setOptionChangePlan] = useState(false)
    const activePlan = useRef<string | null>(null)
    const activePlanPrice = useRef<string | null>(null)
    const [complementsSelected, setComplementsSelected] = useState<ComplementSelected[] | []>([])
    
    const changeStep = () => {
      const contentSteps = {
         1: <PersonalInfo/>,
         2: <SelectYourPlan/>,
         3: <PickAddons/>,
         4: <FinishingUp/>,
      }


       return contentSteps[currentStep as keyof typeof contentSteps] ?? 'contentstep is not found'
    }

   
    const Storage = {
        changeStep,
        setCurrentStep, 
        currentStep,
        plans,
        setPlans,
        changeOptionPlan,
        setOptionChangePlan,
        activePlan,
        activePlanPrice,
        complementsSelected,
        setComplementsSelected,
    }
   
    return (  
        <GlobalContext.Provider value={Storage}>
            {children}
        </GlobalContext.Provider>
    )
}