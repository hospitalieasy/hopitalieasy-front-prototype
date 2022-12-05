import { DefaultLayoutBase, PatternLayout } from "./DefaultLayout.style";

const DefaultLayout = ({ children }) => {
    return (
        <DefaultLayoutBase>
            <PatternLayout>
                {children}
            </PatternLayout>
        </DefaultLayoutBase>
    );
}

export default DefaultLayout;