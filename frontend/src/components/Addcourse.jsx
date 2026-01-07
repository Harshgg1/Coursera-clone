import { useState } from "react";
import axios from "axios";

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [price, setPrice] = useState("");

  async function addCourse() {
    await axios.post(
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

    alert("Course added");
  }

  return (
    <div>
      <h2>Add Course</h2>

      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      <input
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />

      <input
        placeholder="Image link"
        onChange={(e) => setImageLink(e.target.value)}
      />
      <br />

      <input
        placeholder="Price"
        type="number"
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />

      <button onClick={addCourse}>Add Course</button>
    </div>
  );
}

export default AddCourse;
