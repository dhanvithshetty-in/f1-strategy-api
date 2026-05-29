
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Text as RadixThemesText} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Text_text_42643cf0c428722709404e1893d83821 = memo(({children}) => {
    const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "56px", ["lineHeight"] : "0.9", ["color"] : reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.deg_severity_color_rx_state_, ["fontWeight"] : "700", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["letterSpacing"] : "-1px" })},children)
    )
});
