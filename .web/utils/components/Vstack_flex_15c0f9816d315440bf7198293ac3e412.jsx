
import {Fragment,memo,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Flex as RadixThemesFlex} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Vstack_flex_15c0f9816d315440bf7198293ac3e412 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);

                useEffect(() => {
                    ((...args) => (addEvents([(ReflexEvent("reflex___state____state.f1_strategy_api___f1_strategy_api____dashboard_state.calculate_prediction", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);



    return(
        jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "1040px", ["padding"] : "40px", ["background"] : "rgba(5, 6, 8, 0.96)", ["borderRadius"] : "24px", ["border"] : "1px solid rgba(255,255,255,0.015)", ["boxShadow"] : "0px 40px 100px rgba(0, 0, 0, 0.95)", ["position"] : "relative", ["zIndex"] : "1" }),direction:"column",gap:"4"},children)
    )
});
