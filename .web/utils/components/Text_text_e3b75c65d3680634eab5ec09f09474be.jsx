
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Text as RadixThemesText} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Text_text_e3b75c65d3680634eab5ec09f09474be = memo(({children}) => {
    const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesText,{as:"p",css:({ ["color"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.compound_rx_state_?.valueOf?.() === "SOFT"?.valueOf?.()) ? "#FF0055" : "#333336"), ["letterSpacing"] : "1px", ["fontFamily"] : "'Courier New', monospace", ["--default-font-family"] : "'Courier New', monospace" }),size:"1"},children)
    )
});
