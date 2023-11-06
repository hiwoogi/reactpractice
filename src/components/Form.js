import React from "react";

export default function Form({value, setValue, handleSubmit}) {
  const handleChange = (e) => {
    // this.setState({value: e.target.value})
    setValue(e.target.value);
  };

  
  return (
    <div>
      <form style={{ display: "flex" }} onSubmit={handleSubmit}>
        <input
          type="text"
          name="value"
          style={{ flex: "10", padding: "5px" }}
          value={value}
          onChange={handleChange}
        />

        <input
          type="submit"
          value="입력"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    </div>
  );
}
