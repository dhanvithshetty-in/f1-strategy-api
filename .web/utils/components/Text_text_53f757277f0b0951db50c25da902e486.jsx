
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Text as RadixThemesText} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Text_text_53f757277f0b0951db50c25da902e486 = memo(({children}) => {
    const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesText,{as:"p",css:({ ["color"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.compound_rx_state_?.valueOf?.() === "HARD"?.valueOf?.()) ? "#E5E5E5" : "#555558"), ["letterSpacing"] : "1px", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace" }),size:"1"},children)
    )
});
