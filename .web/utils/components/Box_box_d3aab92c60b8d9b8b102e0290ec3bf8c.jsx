
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Box as RadixThemesBox} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Box_box_d3aab92c60b8d9b8b102e0290ec3bf8c = memo(({children}) => {
    const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesBox,{css:({ ["width"] : "10px", ["height"] : "10px", ["borderRadius"] : "50%", ["background"] : "#E5E5E5", ["boxShadow"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.compound_rx_state_?.valueOf?.() === "HARD"?.valueOf?.()) ? "0 0 12px 3px #E5E5E5" : "0 0 4px #E5E5E577"), ["transition"] : "all 0.2s ease", ["flexShrink"] : "0" })},)
    )
});
