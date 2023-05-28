import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewBoxForm({ createBox }) {
  const formInitializes = {
    height: "",
    width: "",
    backgroundColor: "",
  };

  const [formData, setFormData] = useState(formInitializes);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const createBoxInformation = (e) => {
    e.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData(formInitializes);
  };

  return (
    <div>
      <form onSubmit={createBoxInformation}>
        <div className="mb-3 row mt-3">
          <label htmlFor="height" className="col-sm-2 col-form-label">
            Height
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              name="height"
              id="height"
              value={formData.height}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="width" className="col-sm-2 col-form-label">
            Width
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              name="width"
              id="width"
              value={formData.width}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="backgroundColor" className="col-sm-2 col-form-label">
            Background Color
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              name="backgroundColor"
              id="backgroundColor"
              value={formData.backgroundColor}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Add a new box!
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewBoxForm;
