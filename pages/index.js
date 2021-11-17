import styles from "@styles/Home.module.css";
import Dashboard from "components/dashboard/Dashboard";
import EditorDashboard from "components/editorDashboard/editorDashboard";
import Head from "next/head";
import React from "react";

export default function Home() {
  const [showEditor, setShowEditor] = React.useState(false);
  const [fileData, setFileData] = React.useState(null);
  const [audioData, setAudioFileData] = React.useState(null);

  const handleShowEditor = (state) => {
    setShowEditor(state);
  };

  const handleFileDataChange = (file) => {
    setFileData(file);
  };

  const handleAudioDataChange = (file) => {
    setAudioFileData(file);
  };

  return (
    <div
      className={
        showEditor && fileData ? styles.containerEditor : styles.container
      }
    >
      {showEditor && fileData ? (
        <>
          <Head>
            <title>Video Editor - Editor</title>
            <meta name="description" content="Editor Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <EditorDashboard
              handleShowEditor={handleShowEditor}
              handleFileDataChange={handleFileDataChange}
              fileData={fileData}
              handleAudioDataChange={handleAudioDataChange}
              audioData={audioData}
            />
          </main>
        </>
      ) : (
        <>
          <Head>
            <title>Video Editor - Home</title>
            <meta
              name="description"
              content="Homepage for online video editor"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <Dashboard
              handleShowEditor={handleShowEditor}
              handleFileDataChange={handleFileDataChange}
            />
          </main>
        </>
      )}
    </div>
  );
}
