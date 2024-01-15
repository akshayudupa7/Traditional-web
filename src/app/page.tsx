import React from "react";
import Main from "@/component/Main";
import Header from "@/component/Header";
import Footer from "@/component/Footer"
import { Roboto } from "next/font/google";
import EventList from "@/component/EventList"
const roboto=Roboto({
  weight:'100',
  subsets:['latin'],
  display:"swap"
})
export default function Page() {
  return (
    <>
      <div className={roboto.className}>
        <Main />
        <EventList/>
      </div>
    </>
  );
}
