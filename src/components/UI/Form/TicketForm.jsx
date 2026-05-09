import { useState } from "react";
import styles from "./TicketForm.module.css";

export default function RequestForm() {
  const [priority, setPriority] = useState("Standard");

  return (
    <div className={`container ${styles.container}`}>
      <h2 className="fw-bold">Initiate Request</h2>
      <p className="text-muted">
        Log a new technical issue or service request into the ledger.
      </p>

      <div className={`card p-4 shadow-sm border-0 ${styles.card}`}>
        <form>
          <div className="row mb-3">
            {/* Category */}
            <div className="col-md-6">
              <label className="form-label small text-muted">
                ISSUE CATEGORY
              </label>
              <select className={`form-select ${styles.input}`}>
                <option value="">Select appropriate category</option>
                <option value="engineering">Engineering</option>
                <option value="devops">DevOps & Infrastructure</option>
                <option value="security">Security</option>
                <option value="it">IT</option>
                <option value="product">Product</option>
                <option value="management">Management</option>
              </select>
            </div>

            {/* Priority */}
            <div className="col-md-6">
              <label className="form-label small text-muted">
                PRIORITY LEVEL
              </label>

              <div className="btn-group w-100">
                {["Low", "Standard", "Critical"].map((p) => (
                  <button
                    key={p}
                    type="button"
                    className={`btn ${styles.priorityBtn} ${
                      priority === p ? styles.active : ""
                    }`}
                    onClick={() => setPriority(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Subject */}
          <div className="mb-3">
            <label className="form-label small text-muted">SUBJECT</label>
            <input
              type="text"
              className={`form-control ${styles.input}`}
              placeholder="Brief summary of the issue"
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label small text-muted">
              DETAILED DESCRIPTION
            </label>
            <textarea
              className={`form-control ${styles.input}`}
              rows="4"
              placeholder="Describe the steps..."
            ></textarea>
          </div>

          {/* Upload */}
          <div className="mb-3">
            <label className="form-label small text-muted">
              SUPPORTING EVIDENCE (OPTIONAL)
            </label>

            <div className={styles.uploadBox}>
              <p className="mb-1 text-center">Drag and drop files here</p>
              <small className="d-block text-center">or click to browse</small>
            </div>
          </div>

          <button className={`btn w-100 ${styles.submitBtn}`}>Submit</button>
        </form>
      </div>
    </div>
  );
}
