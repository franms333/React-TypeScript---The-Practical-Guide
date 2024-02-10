import { ReactNode } from "react";

type HintBoxProps = {
    mode: 'hint',
    children: ReactNode
}

type WarningBoxProps = {
    // Este es un union type, solo se permite que el atributo "mode" sea string y que su valor sea o 'hint' o 'warning'
    mode: 'warning';
    severity?: 'low' | 'medium' | 'high'; 
    children: ReactNode;
}

type InfoBoxProps = HintBoxProps | WarningBoxProps

const InfoBox = (props: InfoBoxProps) => {
    const {mode, children} = props;
    if(mode === 'hint'){
        return ( 
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
        );
    }

    const {severity} = props;

    return ( 
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    );
}
 
export default InfoBox;