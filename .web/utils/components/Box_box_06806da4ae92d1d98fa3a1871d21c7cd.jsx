
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Box as RadixThemesBox} from "@radix-ui/themes"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Box_box_06806da4ae92d1d98fa3a1871d21c7cd = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_click_48450913906f0f54d147e08ed6bea106 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.f1_strategy_api___f1_strategy_api____dashboard_state.select_compound", ({ ["comp_name"] : "SOFT" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesBox,{css:({ ["paddingInlineStart"] : "18px", ["paddingInlineEnd"] : "18px", ["paddingTop"] : "14px", ["paddingBottom"] : "14px", ["width"] : "100%", ["background"] : "#141414", ["borderRadius"] : "8px", ["cursor"] : "pointer", ["transition"] : "all 0.2s ease-in-out", ["border"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.compound_rx_state_?.valueOf?.() === "SOFT"?.valueOf?.()) ? "1px solid #FF0055" : "1px solid #222222"), ["&:hover"] : ({ ["background"] : "#1a1a1a", ["borderColor"] : "#FF0055" }) }),onClick:on_click_48450913906f0f54d147e08ed6bea106},children)
    )
});
