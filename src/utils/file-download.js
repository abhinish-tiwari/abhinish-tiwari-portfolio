export const handleDownload = (filePath, fileName) => {
    try {
      const link = document.createElement("a");
      link.href = filePath;
      link.target = "_blank";
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };