import Uppy from "@uppy/core";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import GoogleDrive from "@uppy/google-drive";
import { DashboardModal } from "@uppy/react";
import Url from "@uppy/url";
import XHRUpload from "@uppy/xhr-upload";
import React from "react";

const UppyDashboardModal = (props) => {
  const {
    id,
    modalOpen,
    handleClose,
    onFileUploadSuccess,
    endpoint,
    allowedFileTypes,
  } = props;
  const uppy = new Uppy({
    id: id,
    autoProceed: true,
    allowMultipleUploadBatches: false,
    debug: true,
    restrictions: {
      maxFileSize: null,
      minFileSize: null,
      maxTotalFileSize: null,
      maxNumberOfFiles: 1,
      minNumberOfFiles: 1,
      allowedFileTypes: allowedFileTypes,
      requiredMetaFields: [],
    },
    infoTimeout: 5000,
  });

  uppy.use(XHRUpload, {
    method: "post",
    formData: true,
    endpoint: endpoint,
    fieldName: "file",
    bundle: true,
    headers: {
      "Acess-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PATCH, PUT",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Extra-Data",
    },
  });

  uppy.use(Url, {
    companionUrl: "https://companion.uppy.io/",
  });

  uppy.use(GoogleDrive, {
    companionUrl: "https://companion.uppy.io/",
  });

  uppy.on("upload-success", (file, response) => {
    onFileUploadSuccess(file, response);
  });

  React.useEffect(() => () => uppy.close());

  return (
    <DashboardModal
      uppy={uppy}
      closeModalOnClickOutside
      open={modalOpen}
      onRequestClose={handleClose}
      plugins={["Url", "GoogleDrive"]}
      proudlyDisplayPoweredByUppy={false}
      disablePageScrollWhenModalOpen={false}
      theme="light"
      closeAfterFinish={true}
    />
  );
};

export default React.memo(UppyDashboardModal);
