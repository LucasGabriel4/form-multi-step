import { options } from '../../../mocks/PickAddonsData'
import Pick from '../Pick'


function Checkbox() {

    return (
        <>
            {options.map(({option, access, prices}) => {
             return <Pick key={option} option={option} access={access} prices={prices}/>
            })}
        </>


    )
}

export default Checkbox
