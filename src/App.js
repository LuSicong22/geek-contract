import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./assets/styles/App.css";
import Question from "./components/Question";
import Layout from "antd/es/layout/layout";
import AppHeader from "./components/Header";
import QuestionList from "./components/QuestionList";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter basename="btfs/QmdXNEB5db5cEmDTaazgX3Zn9r8jyqLnJApRowG2jVv9SS/">
      <Layout>
        <AppHeader />
        <div className="main flex">
          <Routes>
            <Route path="/" element={<QuestionList />} />
            <Route path="/questions/:questionId" element={<Question />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
