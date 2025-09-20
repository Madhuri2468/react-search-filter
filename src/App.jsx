import { useState } from "react";

export default function App() {
  const students = [
    { id: 1, name: "Manu" },
    { id: 2, name: "Madhuri" },
    { id: 3, name: "Koti" },
    { id: 4, name: "Giridhar" },
    { id: 5, name: "Hello" }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Filter students based on input
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Search Student List</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "0.5rem", marginBottom: "1rem", width: "200px" }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredStudents.map((student) => (
          <li
            key={student.id}
            style={{
              margin: "0.5rem",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "5px"
            }}
          >
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
