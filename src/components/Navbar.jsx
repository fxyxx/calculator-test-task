import { ButtonColor, ButtonSize } from "../enums/enums";
import Button from "./UI/Button";

const Navbar = ({ buttonOnClick, walletAddress }) => {
  return (
    <div className="navbar">
      <Button
        bgColor={ButtonColor.PINK}
        bgSize={ButtonSize.WALLET}
        buttonOnClick={buttonOnClick}
      >
        {walletAddress.length > 0
          ? `Connected: ${walletAddress.substring(
              0,
              8
            )}...${walletAddress.substring(38)}`
          : "Connect wallet"}
      </Button>
    </div>
  );
};

export default Navbar;
