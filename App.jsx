import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { About } from "./Routes/About";
import { ReportFailed } from "./Routes/ReportFailed";
import { ReportSuccess } from "./Routes/ReportSuccess";
import { Send } from "./Routes/Send";
import { EditPage } from "./Routes/EditPage";
import { Composer } from "./Routes/Composer";
import { Login } from "./Routes/Login";

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      sessionStorage.getItem("loged_in") === null &&
      window.location.pathname !== "/"
    ) {
      navigate("/");
    }
  }, [window]);

  return (
    <Routes>
      <Route path="/about/:title" element={<About />} />
      <Route path="/reportsuccess" element={<ReportSuccess />} />
      <Route path="/reportfailed" element={<ReportFailed />} />
      <Route path="/send" element={<Send />} />
      <Route path="/editpage/:title" element={<EditPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/composer" element={<Composer />} />
    </Routes>
  );
}

function Home() {
  return (
    <>
      <Login></Login>
    </>
  );
}
