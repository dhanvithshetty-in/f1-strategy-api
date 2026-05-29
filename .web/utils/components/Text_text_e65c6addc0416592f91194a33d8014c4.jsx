
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Text as RadixThemesText} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Text_text_e65c6addc0416592f91194a33d8014c4 = memo(({children}) => {
    const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesText,{as:"p",css:({ ["color"] : reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.deg_severity_color_rx_state_, ["letterSpacing"] : "2px", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["fontWeight"] : "700" }),size:"1"},children)
    )
});
