
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Box as RadixThemesBox} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Box_box_d6c358b6c91df048f71a37d6847ad924 = memo(({children}) => {
    const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesBox,{css:({ ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["paddingTop"] : "3px", ["paddingBottom"] : "3px", ["border"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.predicted_delta_rx_state_ < 1.8) ? "1px solid rgba(0,255,178,0.2)" : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.predicted_delta_rx_state_ < 2.5) ? "1px solid rgba(255,184,0,0.2)" : "1px solid rgba(255,0,85,0.2)")), ["borderRadius"] : "4px", ["background"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.predicted_delta_rx_state_ < 1.8) ? "rgba(0,255,178,0.03)" : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.predicted_delta_rx_state_ < 2.5) ? "rgba(255,184,0,0.03)" : "rgba(255,0,85,0.03)")) })},children)
    )
});
