export const GetModalroot = (): HTMLElement | null => {
  const modalRoot = document.getElementById("modal-root");
  return modalRoot ? modalRoot : null;
};
