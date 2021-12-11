import { useState } from "react";
import { useRecoilState } from "recoil";
import Header from "../components/Header";
import Modal from "../components/Modal";
import {
  bnbModal,
  btcModal,
  ethModal,
  dogeModal,
  usdModal,
} from "../atoms/atoms";

function Donate() {
  const [btcModalOpen, setBtcModalOpen] = useRecoilState(btcModal);
  const [ethModalOpen, setEthModalOpen] = useRecoilState(ethModal);
  const [bnbModalOpen, setBnbModalOpen] = useRecoilState(bnbModal);
  const [dogeModalOpen, setDogeModalOpen] = useRecoilState(dogeModal);
  const [usdModalOpen, setUsdModalOpen] = useRecoilState(usdModal);

  return (
    <div>
      <Header />

      {btcModalOpen && (
        <Modal
          title="₿ Donate BTC"
          address="37YA7g7urwjgyw5LsuRb61W4hhtN2QSdJR"
          imageUrl="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=37YA7g7urwjgyw5LsuRb61W4hhtN2QSdJR&choe=UTF-8"
        />
      )}

      {ethModalOpen && (
        <Modal
          title="Ξ Donate ETH"
          address="0xFAd9146cBb2E4F1E22436e4d1d2A2Af6BeDEBF5e"
          imageUrl="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=0xFAd9146cBb2E4F1E22436e4d1d2A2Af6BeDEBF5e&choe=UTF-8"
        />
      )}

      {bnbModalOpen && (
        <Modal
          title="🔸 Donate BNB"
          address="bnb1wzcesxwt3388p5fgkpc263dpxnchkce387detg"
          imageUrl="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=bnb1wzcesxwt3388p5fgkpc263dpxnchkce387detg&choe=UTF-8"
        />
      )}

      {dogeModalOpen && (
        <Modal
          title="🐕 Donate DOGE"
          address="DKVDbWwLp2bz2C7EwZjyh8XhYLxPy5gpEK"
          imageUrl="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=DKVDbWwLp2bz2C7EwZjyh8XhYLxPy5gpEK&choe=UTF-8"
        />
      )}

      {usdModalOpen && (
        <Modal
          title="💲 Donate USD via PayPal"
          address="shilpa.speakenglish@gmail.com"
          imageUrl="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=shilpa.speakenglish@gmail.com&choe=UTF-8"
        />
      )}

      <div className="flex flex-col justify-center items-center h-96 mt-10">
        <button
          className="bg-[#F7931A] p-4 rounded-full text-black"
          onClick={() => setBtcModalOpen(true)}
        >
          ₿ Donate BTC
        </button>

        <button
          className="bg-[#313131] p-4 rounded-full text-white mt-4"
          onClick={() => setEthModalOpen(true)}
        >
          Ξ Donate ETH
        </button>

        <button
          className="bg-[#F3BA2C] p-4 rounded-full text-black mt-4"
          onClick={() => setBnbModalOpen(true)}
        >
          🔸 Donate BNB
        </button>

        <button
          className="bg-[#BB9F33] p-4 rounded-full text-black mt-4"
          onClick={() => setDogeModalOpen(true)}
        >
          🐕 Donate DOGE
        </button>

        <button
          className="bg-[#16C60C] p-4 rounded-full text-black mt-4"
          onClick={() => setUsdModalOpen(true)}
        >
          💲 Donate USD via PayPal
        </button>
      </div>
    </div>
  );
}

export default Donate;
