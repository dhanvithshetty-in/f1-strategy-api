
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Slider as RadixThemesSlider} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Slider_slider_3f6331f10dbed1144dd4eb934695954c = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_value_commit_eeedccd452482aaf6012ef054f0d3515 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.f1_strategy_api___f1_strategy_api____dashboard_state.set_fuel_load", ({ ["val"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx(RadixThemesSlider,{color:"green",css:({ ["width"] : "100%" }),defaultValue:[100],max:110,min:5,onValueCommit:on_value_commit_eeedccd452482aaf6012ef054f0d3515,size:"1",width:"100%"},)
    )
});
