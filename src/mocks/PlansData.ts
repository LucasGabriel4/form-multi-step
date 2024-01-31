import Arcade from "../assets/images/icon-arcade.svg"
import Advanced from "../assets/images/icon-advanced.svg"
import Pro from "../assets/images/icon-pro.svg"


const plansData = [
    {
        id: 1,
        planIcon: `${Arcade}`,
        typePlan: 'Arcade',
        plan: {
            mouthly: '$9/mo',
            yearly: '$90/yr'
        },
        selected: false

    },

    {
        id: 2,
        planIcon: `${Advanced}` ,
        typePlan: 'Advanced',
        plan: {
            mouthly: '$12/mo',
            yearly: '$120/yr'
        },
        selected: false

    },

    {
        id: 3,
        planIcon: `${Pro}` ,
        typePlan: 'Pro',
        plan: {
            mouthly: '$15/mo',
            yearly: '$150/yr'
        },
        selected: false

    }

  ]


  export default plansData