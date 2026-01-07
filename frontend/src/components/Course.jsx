import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config";
import { courseState } from "../store/atoms/course";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  courseTitle,
  coursePrice,
  isCourseLoading,
  courseImage
} from "../store/selectors/course";
import Loading from "./Loading";

function Course() {
  const { courseId } = useParams();
  const setCourse = useSetRecoilState(courseState);
  const courseLoading = useRecoilValue(isCourseLoading);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/admin/course/${courseId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then(res => {
        setCourse({ isLoading: false, course: res.data.course });
      })
      .catch(() => {
        setCourse({ isLoading: false, course: null });
      });
  }, [courseId, setCourse]);

  if (courseLoading) {
    return <Loading />;
  }

  return (
    <div>
      <GrayTopper />
      <UpdateCard />
      <CourseCard />
    </div>
  );
}

function GrayTopper() {
  const title = useRecoilValue(courseTitle);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

function UpdateCard() {
  const [courseDetails, setCourse] = useRecoilState(courseState);

  const [title, setTitle] = useState(courseDetails.course.title);
  const [description, setDescription] = useState(courseDetails.course.description);
  const [image, setImage] = useState(courseDetails.course.imageLink);
  const [price, setPrice] = useState(courseDetails.course.price);

  return (
    <div>
      <h3>Update course</h3>

      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />

      <br />

      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
      />

      <br />

      <input
        value={image}
        onChange={e => setImage(e.target.value)}
        placeholder="Image link"
      />

      <br />

      <input
        value={price}
        onChange={e => setPrice(e.target.value)}
        placeholder="Price"
      />

      <br />

      <button
        onClick={async () => {
          await axios.put(
            `${BASE_URL}/admin/courses/${courseDetails.course._id}`,
            {
              title,
              description,
              imageLink: image,
              published: true,
              price
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token")
              }
            }
          );

          const updatedCourse = {
            ...courseDetails.course,
            title,
            description,
            imageLink: image,
            price
          };

          setCourse({ isLoading: false, course: updatedCourse });
        }}
      >
        Update course
      </button>
    </div>
  );
}

function CourseCard() {
  const title = useRecoilValue(courseTitle);
  const imageLink = useRecoilValue(courseImage);
  const price = useRecoilValue(coursePrice);

  return (
    <div>
      <h3>{title}</h3>
      <img src={imageLink} alt="course" width="300" />
      <p>Price: Rs {price}</p>
    </div>
  );
}

export default Course;
