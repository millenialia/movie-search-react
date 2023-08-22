import styled from "styled-components";


export const List = styled.ul`
list-style: none;
display: flex;
justify-content: center;
flex-wrap: wrap;
column-gap: 5px;
row-gap: 15px;

> li{
  width: 280px;
  display: flex;
  align-items: center;
  gap: 5px;

  >img{
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50px;
}

}

`
export const Profile = styled.div`
>:last-child{
  font-size: 12px;
  color: #808080;
}

`
