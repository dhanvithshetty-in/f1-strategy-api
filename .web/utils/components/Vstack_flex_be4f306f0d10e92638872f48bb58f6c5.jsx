
import {Fragment,memo,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Flex as RadixThemesFlex} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Vstack_flex_be4f306f0d10e92638872f48bb58f6c5 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);

                useEffect(() => {
                    ((...args) => (addEvents([(ReflexEvent("reflex___state____state.f1_strategy_api___f1_strategy_api____dashboard_state.calculate_prediction", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);



    return(
        jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "980px", ["padding"] : "36px", ["background"] : "rgba(6, 6, 8, 0.95)", ["borderRadius"] : "20px", ["border"] : "1px solid #141418", ["boxShadow"] : "0px 32px 80px rgba(0, 0, 0, 0.95), 0px 0px 0px 1px rgba(255,255,255,0.02), inset 0 1px 0 rgba(255,255,255,0.03)", ["position"] : "relative", ["zIndex"] : "1" }),direction:"column",gap:"4"},children)
    )
});
