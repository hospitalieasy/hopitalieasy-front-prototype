import { DefaultLayoutBase, PatternLayout } from "./DefaultLayout.style";

const DefaultLayout = ({ children }) => {
    return (
        <DefaultLayoutBase>
            <>
                {children}
            </>
        </DefaultLayoutBase>
    );
}

export default DefaultLayout;