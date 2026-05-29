
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Box as RadixThemesBox} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Box_box_3ccfc72148729c191b3a7530063b0d43 = memo(({children}) => {
    const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesBox,{css:({ ["width"] : "6px", ["height"] : "6px", ["borderRadius"] : "50%", ["background"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.compound_rx_state_?.valueOf?.() === "MEDIUM"?.valueOf?.()) ? "#FFCC00" : "#26262a"), ["transition"] : "all 0.2s ease" })},)
    )
});
