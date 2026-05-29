
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Box as RadixThemesBox} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Box_box_80d399fc4dd99a56f64a54b321a2c84c = memo(({children}) => {
    const reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state = useContext(StateContexts.reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state)



    return(
        jsx(RadixThemesBox,{css:({ ["position"] : "absolute", ["top"] : "0", ["left"] : "0", ["right"] : "0", ["bottom"] : "0", ["borderRadius"] : "10px", ["background"] : ((reflex___state____state__f1_strategy_api___f1_strategy_api____dashboard_state.compound_rx_state_?.valueOf?.() === "MEDIUM"?.valueOf?.()) ? "rgba(255,204,0,0.04)" : "transparent"), ["transition"] : "all 0.3s ease", ["pointerEvents"] : "none" })},)
    )
});
