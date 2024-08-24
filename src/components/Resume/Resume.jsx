import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../../data/resume/moazahmedkassim.pdf";

export default function Resume() {
  return (
    <section className=" my-24 flex items-center justify-center ">
      <div className="w-4/5 flex flex-col items-center justify-center   ">
        <iframe src={pdf} width="70%" height="1000px" />
      </div>
    </section>
  );
}
