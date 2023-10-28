import React, { useState } from "react";
import { Modal, Box, Backdrop } from "@mui/material";

import styled from "styled-components";
// import EventImg from "../EventsPage/EventImg.png";

import CloseIcon from "@mui/icons-material/Close";

export function ReviewModal(
  { open, close, menuItem }
  ) {
    const { id, Category, Msg, Name } = menuItem;


  return (
    <>
      {open && (
        <Backdrop
          open={true}
          onClick={close}
          sx={{ display: "flex", zIndex: "10" }}
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
            bgcolor: "background.paper",
            backgroundPosition: "center",
            backgroundSize: "cover",
            boxShadow: 24,
            p: 4,
            outline: "none",
            borderRadius:"1rem"
          }}
        >
          <Header>
            <Heading>
              {Name}
              <CloseIcon
                onClick={close}
                sx={{
                  position: "relative",
                  left: "12px",
                  bottom: "12px",
                  cursor: "pointer",
                }}
              />
            </Heading>
            <DateDiv>
              {Category}
            </DateDiv>
          </Header>
          <Description>
            {/* <ImageDiv src={EventImg}></ImageDiv> */}
            <TextDiv>{Msg}</TextDiv>
          </Description>
        </Box>
      </Modal>
    </>
  );
}

const Header = styled.div`
  color: #703364;
  border-bottom: 1px solid #703364;
`;
const Heading = styled.div`
  display: flex;
  color: #703364;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 760px) {
    font-size: 1.6rem;
  }
`;

const DateDiv = styled.div`
  margin-bottom: 1rem;
  color: #7b7b7b;
`;

const Description = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 2rem 2rem;
  @media (max-width: 760px) {
    padding: 3rem 1rem;
  }
`;
const ImageDiv = styled.img`
  width: 30%;
  margin: 0 2rem 0 0;
  @media (max-width: 760px) {
    width: 40%;
  }
`;

const TextDiv = styled.div`
  font-size: 1.2rem;
  display: flex;
  color: #8e8e8e;
`;
