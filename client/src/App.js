import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import TeacherClasses from "./pages/teacher/dashboard/classes";
import TeacherWebsite from "./pages/teacher/dashboard/website";
import TeacherStudents from "./pages/teacher/dashboard/students";
import TeacherTasks from "./pages/teacher/dashboard/tasks";
import TeacherMeetings from "./pages/teacher/dashboard/meetings";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import LogoutPage from "./pages/logout";
import StudentList from "./pages/teacher/classroom/students-list";
import StudentAssignments from "./pages/student/classroom/assignments";
import StudentClasses from "./pages/student/dashboard/classes";
import StudentQuiz from "./pages/student/classroom/quiz";
import Schedule from "./components/schedule";
import Axios from "axios";
import StudentSchedulePage from "./pages/student/classroom/schedule";
import TeacherSchedulePage from "./pages/teacher/classroom/schedule";
import UserWebsite from "./pages/userWebsite";
import Page404 from "./pages/404";
import Courses from "./pages/student/dashboard/courses";
import CourseInfo from "./pages/student/classroom/CourseInfo";
// import MyTeacher from "./pages/student/dashboard/joined";

function App() {
  Axios.defaults.withCredentials = true;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/teacher/classes" element={<TeacherClasses />} />
        <Route path="/teacher/website" element={<TeacherWebsite />} />
        <Route path="/teacher/tasks" element={<TeacherTasks />} />
        <Route path="/teacher/students" element={<TeacherStudents />} />
        <Route path="/teacher/meetings" element={<TeacherMeetings />} />
        <Route path="/teacher/website/:websiteID" element={<UserWebsite />} />
        <Route
          path="/teacher/class/:classID/:className/schedule"
          element={<TeacherSchedulePage />}
        />
        <Route
          path="/teacher/class/:classID/:className/students"
          element={<StudentList />}
        />
        <Route path="/student/classes" element={<StudentClasses />} />
        <Route path="/student/courses" element={<Courses />} />
        <Route path="/student/class/:classID/info" element={<CourseInfo />} />
        <Route
          path="/student/class/:classID/:className/assignments"
          element={<StudentAssignments />}
        />
        <Route path="/student/class/:classID/:className/quiz" element={<StudentQuiz />} />
        <Route
          path="/student/class/:classID/:className/schedule"
          element={<StudentSchedulePage />}
        />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
