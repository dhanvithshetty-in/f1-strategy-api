
import {Fragment,memo,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Flex as RadixThemesFlex} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Vstack_flex_6107fe7a9fc0f30785779e75f1be1268 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);

                useEffect(() => {
                    ((...args) => (addEvents([(ReflexEvent("reflex___state____state.f1_strategy_api___f1_strategy_api____dashboard_state.calculate_prediction", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);



    return(
        jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "900px", ["padding"] : "40px", ["background"] : "#090909", ["borderRadius"] : "16px", ["border"] : "1px solid #1a1a1a", ["boxShadow"] : "0px 20px 50px rgba(0, 0, 0, 0.9)" }),direction:"column",gap:"4"},children)
    )
});
