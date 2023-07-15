export const convertImageToFormData = (image: any) => {
  if (!image) return null;

  return {
    uri: image.uri,
    type: image.mimeType,
    name: image.name,
  };
};
