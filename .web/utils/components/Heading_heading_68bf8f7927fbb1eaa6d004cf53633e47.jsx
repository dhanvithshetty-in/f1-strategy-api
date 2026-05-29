
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Heading as RadixThemesHeading} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Heading_heading_68bf8f7927fbb1eaa6d004cf53633e47 = memo(({children}) => {
    const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesHeading,{css:({ ["color"] : reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.deg_severity_color_rx_state_, ["letterSpacing"] : "-1px" }),size:"9",weight:"bold"},children)
    )
});
