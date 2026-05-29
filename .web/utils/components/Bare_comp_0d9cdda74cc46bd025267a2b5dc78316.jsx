
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Bare_comp_0d9cdda74cc46bd025267a2b5dc78316 = memo(({children}) => {
    const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.fuel_load_rx_state_ >= 80) ? "HEAVY" : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.fuel_load_rx_state_ >= 40) ? "MID" : "LIGHT"))
    )
});
