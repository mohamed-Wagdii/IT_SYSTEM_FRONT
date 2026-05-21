import { useState } from "react";
import styles from "./TicketForm.module.css";

export default function RequestForm({ onTicketCreated }) {
  const [priority, setPriority] = useState("medium");

  const [formData, setFormData] = useState({
    subject: "",
    category: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:3000/api/tickets",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            subject: formData.subject,
            category: formData.category,
            description: formData.description,
            priority: priority,
          }),
        }
      );

      const data = await response.json();

      // console.log(data);

      if (response.ok) {
        alert("Ticket created successfully ✅");

        // Reset Form
        setFormData({
          subject: "",
          category: "",
          description: "",
        });

        onTicketCreated?.();

  
        setPriority("medium");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`container ${styles.container}`}>
      <h2 className="fw-bold">Initiate Request</h2>

      <p className="text-muted">
        Log a new technical issue or service request into the ledger.
      </p>

      <div className={`card p-4 shadow-sm border-0 ${styles.card}`}>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">

            {/* Category */}
            <div className="col-md-6">
              <label className="form-label small text-muted">
                ISSUE CATEGORY
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`form-select ${styles.input}`}
                required
              >
                <option value="">
                  Select appropriate category
                </option>

                <option value="engineering">
                  Engineering
                </option>

                <option value="devops">
                  DevOps & Infrastructure
                </option>

                <option value="security">
                  Security
                </option>

                <option value="it">
                  IT
                </option>

                <option value="product">
                  Product
                </option>

                <option value="management">
                  Management
                </option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label small text-muted">
                PRIORITY LEVEL
              </label>

              <div className="btn-group w-100">
                {["low", "medium", "high"].map((p) => (
                  <button
                    key={p}
                    type="button"
                    className={`btn ${styles.priorityBtn} ${
                      priority === p ? styles.active : ""
                    }`}
                    onClick={() => setPriority(p)}
                  >
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label small text-muted">
              SUBJECT
            </label>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`form-control ${styles.input}`}
              placeholder="Brief summary of the issue"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label small text-muted">
              DETAILED DESCRIPTION
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`form-control ${styles.input}`}
              rows="4"
              placeholder="Describe the issue..."
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label small text-muted">
              SUPPORTING EVIDENCE (OPTIONAL)
            </label>

            <div className={styles.uploadBox}>
              <p className="mb-1 text-center">
                Drag and drop files here
              </p>

              <small className="d-block text-center">
                or click to browse
              </small>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`btn w-100 ${styles.submitBtn}`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}