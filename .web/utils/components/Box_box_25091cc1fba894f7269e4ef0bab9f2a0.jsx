
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Box as RadixThemesBox} from "@radix-ui/themes"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Box_box_25091cc1fba894f7269e4ef0bab9f2a0 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_click_21dff758af1d6aef99e9228ded9d4bc6 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.f1_strategy_api___f1_strategy_api____dashboard_state.select_compound", ({ ["comp_name"] : "HARD" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesBox,{css:({ ["paddingInlineStart"] : "18px", ["paddingInlineEnd"] : "18px", ["paddingTop"] : "14px", ["paddingBottom"] : "14px", ["width"] : "100%", ["background"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.compound_rx_state_?.valueOf?.() === "HARD"?.valueOf?.()) ? "rgba(22,22,26,0.4)" : "rgba(12,12,14,0.2)"), ["borderRadius"] : "10px", ["cursor"] : "pointer", ["position"] : "relative", ["border"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.compound_rx_state_?.valueOf?.() === "HARD"?.valueOf?.()) ? "1px solid #7DD3FC" : "1px solid rgba(255,255,255,0.03)"), ["transform"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.compound_rx_state_?.valueOf?.() === "HARD"?.valueOf?.()) ? "scale(1.02)" : "scale(1)"), ["transition"] : "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)", ["&:hover"] : ({ ["borderColor"] : "#7DD3FC", ["background"] : "rgba(22,22,26,0.6)", ["transform"] : "scale(1.01)" }) }),onClick:on_click_21dff758af1d6aef99e9228ded9d4bc6},children)
    )
});
