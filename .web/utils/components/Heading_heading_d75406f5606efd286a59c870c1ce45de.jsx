
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Heading as RadixThemesHeading} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Heading_heading_d75406f5606efd286a59c870c1ce45de = memo(({children}) => {
    const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesHeading,{css:({ ["color"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.predicted_delta_rx_state_ < 2.3) ? "#00ffcc" : "#ff3366"), ["marginTop"] : "10px", ["marginBottom"] : "10px" }),size:"9"},children)
    )
});
