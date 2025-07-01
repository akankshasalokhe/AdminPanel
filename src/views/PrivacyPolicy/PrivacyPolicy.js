import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";

const PrivacyPolicy = () => {
  const [policy, setPolicy] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/privacyPolicy/getPrivacyPolicy")
      .then((res) => {
        setPolicy(res.data?.content || "");
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading policy:", err);
        setLoading(false);
      });
  }, []);

  const handleSaveOrUpdate = () => {
    setSaving(true);
    axios
      .post("http://localhost:2000/api/privacyPolicy/savePrivacyPolicy", { content: policy })
      .then(() => {
        alert("Privacy Policy saved/updated successfully.");
      })
      .catch((err) => {
        console.error("Error saving/updating policy:", err);
        alert("Failed to save/update policy.");
      })
      .finally(() => setSaving(false));
  };

  return (
    <div style={{
      maxWidth: "100%",
      margin: "40px auto",
      padding: "20px",
      background: "#fff",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ marginBottom: "20px" }}>Privacy Policy Editor</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Editor
            apiKey="haa6xie6rgv94ky9rf43lu1n4zwcv5h0awr0vresbz2u4r8p"
            value={policy}
            onEditorChange={(content) => setPolicy(content)}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste help wordcount"
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | fontsize " +
                "alignleft aligncenter alignright alignjustify | " +
                "bullist numlist outdent indent | removeformat | help"
            }}
          />
          <button
            onClick={handleSaveOrUpdate}
            disabled={saving}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: saving ? "not-allowed" : "pointer"
            }}
          >
            {saving ? "Saving..." : "Save Policy"}
          </button>
        </>
      )}
    </div>
  );
};

export default PrivacyPolicy;
