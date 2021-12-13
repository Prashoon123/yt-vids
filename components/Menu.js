import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { UserRemoveIcon, LogoutIcon } from "@heroicons/react/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import { deleteUser, signOut } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

export default function MenuComponent() {
  const [user, loading, error] = useAuthState(auth);

  const deleteAccount = () => {
    deleteUser(auth?.currentUser)
      .then(() => {
        deleteDoc(doc(db, "users", user?.uid));
      })
      .catch((err) => {
        return toast.error("Recent login is needed to delete the account!");
      });

    toast.success("Deleted account successfully!");
  };

  return (
    <Menu as="div" className="relative inline-block text-left navbar-button">
      <Menu.Button className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 rounded-full p-1 pr-2 text-white">
        <img
          className="rounded-full h-10 w-10 object-contain"
          src={user?.photoURL}
          alt="user-avatar"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-64 mt-2 origin-top-right bg-black divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item onClick={() => signOut(auth)}>
              {({ active }) => (
                <button className="text-white group flex rounded-md items-center w-full px-2 py-2 text-sm">
                  <LogoutIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                  Logout
                </button>
              )}
            </Menu.Item>

            <Menu.Item onClick={deleteAccount}>
              {({ active }) => (
                <button className="text-white group flex rounded-md items-center w-full px-2 py-2 text-sm">
                  <UserRemoveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                  Delete Account
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>

      <Toaster />
    </Menu>
  );
}
