
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Box as RadixThemesBox} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Box_box_57d9800fd3c16c9807356ebd6103f241 = memo(({children}) => {
    const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesBox,{css:({ ["width"] : "10px", ["height"] : "10px", ["borderRadius"] : "50%", ["background"] : "#FFCC00", ["boxShadow"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.compound_rx_state_?.valueOf?.() === "MEDIUM"?.valueOf?.()) ? "0 0 12px 3px #FFCC00" : "0 0 4px #FFCC0077"), ["transition"] : "all 0.2s ease", ["flexShrink"] : "0" })},)
    )
});
