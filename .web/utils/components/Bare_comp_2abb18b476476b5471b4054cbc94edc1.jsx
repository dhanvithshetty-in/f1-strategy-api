
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Bare_comp_2abb18b476476b5471b4054cbc94edc1 = memo(({children}) => {
    const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.tyre_life_rx_state_ <= 15) ? "PUSH PHASE" : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.tyre_life_rx_state_ <= 40) ? "NOMINAL" : "LATE STINT"))
    )
});
