"use client";

import React, { ReactNode, useEffect } from "react";
import { Box, Modal } from "@mui/material";
import { useModalContext } from "@/ContextApi/modal";
import { ContentBox } from "./style";

export type ModalProps = {
  open: boolean;
  handleClose: () => void;
  modalTitle: string;
  modalDescription: string;
  children: ReactNode;
};

export const ModalComponent = ({
  open,
  handleClose,
  children,
  modalDescription,
  modalTitle,
}: ModalProps) => {
  const { isOpen, closeModal } = useModalContext();

  useEffect(() => {
    const appBody = document.getElementById("app-body");
    if (appBody) {
      appBody.style.overflow = isOpen ? "hidden" : "auto";
    }
  }, [isOpen]);

  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      aria-labelledby={`${modalTitle}-modal`}
      aria-describedby={`${modalDescription}-modal`}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ContentBox
        sx={{
          boxShadow: 24,
          bgcolor: "background.paper",
          overflowY: "overflow",
        }}
      >
        {children}
      </ContentBox>
    </Modal>
  );
};
