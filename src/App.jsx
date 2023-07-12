import Calculator from "./components/Calculator";
import Navbar from "./components/Navbar";
import useWallet from "./hooks/useWallet";

function App() {
  const { walletAddress, connectWallet } = useWallet();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-800 via-black to-black">
      <Navbar
        walletAddress={walletAddress}
        buttonOnClick={connectWallet}
      ></Navbar>
      <Calculator walletAddress={walletAddress}></Calculator>
    </div>
  );
}

export default App;
