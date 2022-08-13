export type InputBase64Return = {
  file: FileList[0];
  fileBase64: string;
  fileString: string;
  type: string;
};

const base64Prefix = "data:image/png;base64,";

export const removeBase64 = (file: string) => file.replace(base64Prefix, "");
export const addBase64 = (file: string) => base64Prefix + file;

export const readBase64 = async (
  file: FileList[0]
): Promise<InputBase64Return | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        resolve({
          file: file,
          fileBase64: reader.result as string,
          fileString: removeBase64(reader.result as string),
          type: file.type,
        });
      } else {
        reject(null);
      }
    };
  });
};

export const getFileInfo = (
  files: FileList | null
): Promise<InputBase64Return | null> => {
  return new Promise((resolve, reject) => {
    const file = files ? files[0] : null;
    if (file) {
      readBase64(file)
        .then(resolve)
        .catch(() => reject(null));
      return;
    }
    reject(null);
  });
};
