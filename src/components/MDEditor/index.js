/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// react-quill components
import ReactQuill from "react-quill";

// react-quill styles
import "react-quill/dist/quill.snow.css";

// Custom styles for the MDEditor
import MDEditorRoot from "components/MDEditor/MDEditorRoot";

// Material Dashboard 2 PRO React context
import { useMaterialUIController } from "context";

function MDEditor(props) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <MDEditorRoot ownerState={{ darkMode }}>
      <ReactQuill theme="snow" {...props} />
    </MDEditorRoot>
  );
}

export default MDEditor;
