
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Slider as RadixThemesSlider} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Slider_slider_bcea7f241812539fc8b899cd42c3cb3f = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_value_commit_15599ad81040e412b2f594ffceae2674 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.f1_strategy_api___f1_strategy_api____dashboard_state.set_tyre_life", ({ ["val"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx(RadixThemesSlider,{color:"green",css:({ ["width"] : "100%" }),defaultValue:[1],max:100,min:1,onValueCommit:on_value_commit_15599ad81040e412b2f594ffceae2674,size:"1",width:"100%"},)
    )
});
