
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Text as RadixThemesText} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Text_text_df37c2a595fcdc807d4608c2f0ae3139 = memo(({children}) => {
    const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "52px", ["lineHeight"] : "1", ["color"] : reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.deg_severity_color_rx_state_, ["fontWeight"] : "700", ["fontFamily"] : "'Courier New', monospace", ["--default-font-family"] : "'Courier New', monospace", ["letterSpacing"] : "-2px" })},children)
    )
});
