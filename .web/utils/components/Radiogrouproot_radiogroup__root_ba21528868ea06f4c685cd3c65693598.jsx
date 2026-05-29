
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {RadioGroup as RadixThemesRadioGroup} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Radiogrouproot_radiogroup__root_ba21528868ea06f4c685cd3c65693598 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_change_0b6b6592f2e8bf49d7fe08d99e732a95 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.f1_strategy_api___f1_strategy_api____dashboard_state.set_compound", ({ ["val"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx(RadixThemesRadioGroup.Root,{color:"crimson",defaultValue:"SOFT",onValueChange:on_change_0b6b6592f2e8bf49d7fe08d99e732a95,size:"2",variant:"classic"},children)
    )
});
