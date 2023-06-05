import styled from '@emotion/styled';

export const Button = styled.button`

width: 100px;
height: 40px;

border: none;
border-radius: 4px;
cursor: pointer;
font-size: 16px;
text-transform: capitalize;

background-color: CornflowerBlue;
margin-right: 30px;

&:hover,
&focus{
    transform: scale(0.8);
}

 `;
