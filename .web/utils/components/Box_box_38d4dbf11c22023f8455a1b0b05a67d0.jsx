
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Box as RadixThemesBox} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Box_box_38d4dbf11c22023f8455a1b0b05a67d0 = memo(({children}) => {
    const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesBox,{css:({ ["width"] : "10px", ["height"] : "10px", ["borderRadius"] : "50%", ["background"] : "#E5E5E5", ["boxShadow"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.compound_rx_state_?.valueOf?.() === "HARD"?.valueOf?.()) ? "0 0 12px 3px #E5E5E5" : "0 0 4px #E5E5E5"), ["transition"] : "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)", ["flexShrink"] : "0" })},)
    )
});
