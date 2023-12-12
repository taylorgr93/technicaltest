/* eslint-disable */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import UserList from "./screens/UsersScreen/UserList";
import UserEdit from "./screens/UsersScreen/Components/UserEdit";
import NewsList from "./screens/NewsScreen/NewsList";
import SingleNews from "./screens/NewsScreen/Components/SingleNews";
import HomePage from "./screens/HomeScreen/HomePage";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/users/new" element={<NewUser />} /> */}
        <Route path="/news/:id" element={<SingleNews />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/users/:id" element={<UserEdit />} />
        <Route path="/users" element={<UserList />} />
        {/* <Route path="/" element={<Navigate to="/users" />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
