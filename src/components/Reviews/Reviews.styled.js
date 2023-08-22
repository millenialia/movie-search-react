import styled from "styled-components";


export const List = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
column-gap: 60px;
row-gap: 15px;

> li{
  background-color: rgba(	255, 255, 255, 0.17);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 700px;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 200px;
  overflow-y: scroll;
  color: rgba(255,255,255,0.7);

  >span{
    display: flex;
    align-items: center;
    gap: 30px;


    >img{
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 50px;
    }
  }

  }

`
