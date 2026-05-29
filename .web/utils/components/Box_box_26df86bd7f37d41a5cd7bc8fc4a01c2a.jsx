
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Box as RadixThemesBox} from "@radix-ui/themes"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Box_box_26df86bd7f37d41a5cd7bc8fc4a01c2a = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_click_291b7744fb20544f2df1d1d5128b72e4 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.f1_strategy_api___f1_strategy_api____dashboard_state.select_compound", ({ ["comp_name"] : "MEDIUM" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesBox,{css:({ ["paddingInlineStart"] : "18px", ["paddingInlineEnd"] : "18px", ["paddingTop"] : "14px", ["paddingBottom"] : "14px", ["width"] : "100%", ["background"] : "#141414", ["borderRadius"] : "8px", ["cursor"] : "pointer", ["transition"] : "all 0.2s ease-in-out", ["border"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.compound_rx_state_?.valueOf?.() === "MEDIUM"?.valueOf?.()) ? "1px solid #FFCC00" : "1px solid #222222"), ["&:hover"] : ({ ["background"] : "#1a1a1a", ["borderColor"] : "#FFCC00" }) }),onClick:on_click_291b7744fb20544f2df1d1d5128b72e4},children)
    )
});
