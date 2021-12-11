import { useRecoilState } from "recoil";
import {
  bnbModal,
  btcModal,
  ethModal,
  dogeModal,
  usdModal,
} from "../atoms/atoms";
import toast, { Toaster } from "react-hot-toast";

function Modal({ title, address, imageUrl }) {
  const [btcModalOpen, setBtcModalOpen] = useRecoilState(btcModal);
  const [ethModalOpen, setEthModalOpen] = useRecoilState(ethModal);
  const [bnbModalOpen, setBnbModalOpen] = useRecoilState(bnbModal);
  const [dogeModalOpen, setDogeModalOpen] = useRecoilState(dogeModal);
  const [usdModalOpen, setUsdModalOpen] = useRecoilState(usdModal);

  const closeModal = () => {
    setBtcModalOpen(false);
    setEthModalOpen(false);
    setBnbModalOpen(false);
    setDogeModalOpen(false);
    setUsdModalOpen(false);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(address);

    toast.success("Copied the address to clipboard!");
  };

  return (
    <center
      id="default-modal"
      aria-hidden="true"
      className="overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center mt-10"
    >
      <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
        <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
          <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
              {title}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="default-modal"
              onClick={closeModal}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="p-6 space-y-6 flex justify-center items-center">
            <img src={imageUrl} alt="qrcode" className="h-[300px] w-[300px]" />
          </div>

          <div className="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b justify-between">
            <p className="text-black">{address}</p>

            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="default-modal"
              onClick={copyAddress}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Toaster />
    </center>
  );
}

export default Modal;
