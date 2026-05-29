
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Box as RadixThemesBox} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Box_box_5c837aef2290f250496ded8177f5a784 = memo(({children}) => {
    const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesBox,{css:({ ["width"] : "10px", ["height"] : "10px", ["borderRadius"] : "50%", ["background"] : "#0D9488", ["boxShadow"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.compound_rx_state_?.valueOf?.() === "MEDIUM"?.valueOf?.()) ? "0 0 12px 3px #0D9488" : "0 0 4px #0D948877"), ["transition"] : "all 0.2s ease", ["flexShrink"] : "0" })},)
    )
});
