import { atom } from "recoil";

const btcModal = atom({
  key: "btcModal",
  default: false,
});

const ethModal = atom({
  key: "ethModal",
  default: false,
});

const bnbModal = atom({
  key: "bnbModal",
  default: false,
});

const dogeModal = atom({
  key: "dogeModal",
  default: false,
});

const usdModal = atom({
  key: "usdModal",
  default: false,
});

export { btcModal, ethModal, bnbModal, dogeModal, usdModal };
