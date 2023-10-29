import React, { useState } from "react";
import { Modal, Box, Backdrop } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./Modal.css"

export function ReviewModal({ open, close, review }) {
  const { id, author, content, title } = review;

  return (
    <>
      {open && (
        <Backdrop
          open={true}
          onClick={close}
          sx={{ display: "flex", zIndex: "1" }}
        />
      )}

      <Modal
        open={open}
        onClose={close}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "block",
            width: "50%",
            backgroundRepeat: "no-repeat",
            bgcolor: "#96b8fa",
            backgroundPosition: "center",
            backgroundSize: "cover",
            boxShadow: 24,
            p: 4,
            outline: "none",
            borderRadius: "1rem",
          }}
        >
          
          <header className="modal-header">
            <div className="category-heading">
              Topic: {title}
              <CloseIcon
                onClick={close}
                sx={{
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="name-div"> - {author.name}</div>
          </header>
          <div className="description">
            <div className="review">{content}</div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

