
import {Fragment,memo,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Flex as RadixThemesFlex} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Vstack_flex_0796b1d647d14a1fd104709eaeb8bdd2 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);

                useEffect(() => {
                    ((...args) => (addEvents([(ReflexEvent("reflex___state____state.f1_strategy_api___f1_strategy_api____dashboard_state.calculate_prediction", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);



    return(
        jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "920px", ["padding"] : "36px", ["background"] : "#060606", ["borderRadius"] : "16px", ["border"] : "1px solid #141414", ["boxShadow"] : "0px 24px 60px rgba(0, 0, 0, 0.9)" }),direction:"column",gap:"4"},children)
    )
});
