import React, { useState } from "react";
import axios from "axios";
import {Course} from "../store/atoms/courseState"


function AddCourse() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageLink, setImageLink] = useState<string>("");
  const [price, setPrice] = useState<number | undefined>(undefined);

  async function addCourse() {
    await axios.post<Course>(
      "http://localhost:3000/admin/courses",
      {
        title,
        description,
        imageLink,
        published: true,
        price
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }
    );

    alert("Course added");setDescription("");
  }

  return (
    <div>
      <h2>Add Course</h2>

      <input
        placeholder="Title"
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
      />
      <br />

      <input
        placeholder="Description"
        value={description}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
      />
      <br />

      <input
        placeholder="Image link"
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setImageLink(e.target.value)}
      />
      <br />

      <input
        placeholder="Price"
        type="number"
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))}
      />
      <br />

      <button onClick={addCourse}>Add Course</button>
    </div>
  );
}

export default AddCourse;
