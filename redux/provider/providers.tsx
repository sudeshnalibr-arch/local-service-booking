"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";

import { SessionProvider } from "next-auth/react";
import { store } from "../store/store";
// import store from "../store/store";

type ProviderProps = {
  children: ReactNode;
};
export default function Providers({ children }: ProviderProps) {
  return (
    <>
      <SessionProvider>
        <Provider store={store}>{children}</Provider>
      </SessionProvider>
    </>
  );
}
