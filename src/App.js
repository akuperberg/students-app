import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { StudentCreateForm } from "./StudentCreateForm/StudentCreateForm";
import { StudentList } from './StudentList/StudentList';
import { StudentEditForm } from "./StudentEditForm/StudentEditForm";
import { StudentDetail } from './StudentDetail/StudentDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentList />,
  },
  {
    path: "/students/:id",
    element: <StudentDetail />,
  },
  {
    path: "/students/:id/edit",
    element: <StudentEditForm />,
  },
  {
    path: "/students/create",
    element: <StudentCreateForm />,
  },
]);

function App() {
  return  <RouterProvider router={router} />;
}

export default App;
