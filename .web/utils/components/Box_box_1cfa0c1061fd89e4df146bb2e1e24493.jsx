
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Box as RadixThemesBox} from "@radix-ui/themes"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Box_box_1cfa0c1061fd89e4df146bb2e1e24493 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_click_21dff758af1d6aef99e9228ded9d4bc6 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.f1_strategy_api___f1_strategy_api____dashboard_state.select_compound", ({ ["comp_name"] : "HARD" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesBox,{css:({ ["paddingInlineStart"] : "18px", ["paddingInlineEnd"] : "18px", ["paddingTop"] : "14px", ["paddingBottom"] : "14px", ["width"] : "100%", ["background"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.compound_rx_state_?.valueOf?.() === "HARD"?.valueOf?.()) ? "rgba(20,20,24,0.9)" : "rgba(14,14,16,0.7)"), ["borderRadius"] : "10px", ["cursor"] : "pointer", ["position"] : "relative", ["border"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.compound_rx_state_?.valueOf?.() === "HARD"?.valueOf?.()) ? "1px solid #E5E5E5" : "1px solid #1f1f23"), ["transform"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.compound_rx_state_?.valueOf?.() === "HARD"?.valueOf?.()) ? "scale(1.02)" : "scale(1)"), ["transition"] : "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)", ["&:hover"] : ({ ["borderColor"] : "#E5E5E5", ["background"] : "rgba(20,20,24,0.95)", ["transform"] : "scale(1.01)" }) }),onClick:on_click_21dff758af1d6aef99e9228ded9d4bc6},children)
    )
});
