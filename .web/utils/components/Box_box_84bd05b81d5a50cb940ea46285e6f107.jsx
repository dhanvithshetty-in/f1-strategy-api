
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Box as RadixThemesBox} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Box_box_84bd05b81d5a50cb940ea46285e6f107 = memo(({children}) => {
    const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesBox,{css:({ ["position"] : "absolute", ["top"] : "0", ["left"] : "0", ["right"] : "0", ["bottom"] : "0", ["borderRadius"] : "10px", ["background"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.compound_rx_state_?.valueOf?.() === "SOFT"?.valueOf?.()) ? "rgba(0,240,255,0.08)" : "transparent"), ["transition"] : "all 0.3s ease", ["pointerEvents"] : "none" })},)
    )
});
