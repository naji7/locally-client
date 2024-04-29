"use client";

import { SnackbarProvider } from "notistack";

export default function NotistackProvider({ children }: any) {
  return (
    <SnackbarProvider
      classes={{
        containerAnchorOriginTopCenter: "z-alert",
      }}
      maxSnack={3}
      preventDuplicate
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      autoHideDuration={3000}
    >
      {children}
    </SnackbarProvider>
  );
}
