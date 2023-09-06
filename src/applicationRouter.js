import { Routes, Route } from "react-router-dom";
import {  ViewHome } from "./views/home";
import {  ViewCount } from "./views/count";
import {  ViewNotFound } from "./views/NotFound";

export const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={ ViewHome} />
      <Route path="/home" Component={ ViewHome} />
      <Route path="/count" Component={ ViewCount} />
      <Route path="*" Component={ ViewNotFound} />
    </Routes>
  );
};
