import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await axios.get(
          "http://localhost:3000/admin/courses",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        );

        setCourses(response.data.courses);
      } catch (e) {
        console.log("Error fetching courses", e);
      }
    }

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Courses</h2>

      {courses.map((course) => (
        <div key={course._id}>
          <p>{course.title}</p>

          <button
            onClick={() => {
              navigate("/course/" + course._id);
            }}
          >
            View / Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default Courses;
