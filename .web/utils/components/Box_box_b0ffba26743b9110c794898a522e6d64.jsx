
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Box as RadixThemesBox} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Box_box_b0ffba26743b9110c794898a522e6d64 = memo(({children}) => {
    const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesBox,{css:({ ["position"] : "absolute", ["top"] : "0", ["left"] : "0", ["right"] : "0", ["bottom"] : "0", ["borderRadius"] : "10px", ["background"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.compound_rx_state_?.valueOf?.() === "HARD"?.valueOf?.()) ? "rgba(125,211,252,0.06)" : "transparent"), ["transition"] : "all 0.3s ease", ["pointerEvents"] : "none" })},)
    )
});
