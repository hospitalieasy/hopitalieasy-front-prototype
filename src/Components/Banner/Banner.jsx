import { BannerBase } from "./Banner.style";

const Banner = ({ children }) => {
    return (
        <BannerBase>
            {children}
        </BannerBase>
    );
}

export default Banner;