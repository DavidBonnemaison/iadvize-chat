import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 47%;
  vertical-align: top;
  background-color: white;
  margin: 2%;
  width: 400px;
  height: 800px;

  &:first-child {
    margin-right: 0;
  }
`;

export const Title = styled.div`
  text-align: center;
  background-color: #f1c40f;
  color: white;
  padding: 1em 0;
`;

export const Form = styled.form`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ccc;
`;

export const Input = styled.input`
  margin: 0;
  display: inline-block;
  vertical-align: top;
  width: 80%;
  margin-right: 5%;
  height: 40px;
  padding: 0 1em;
  border: 0;
  &, &:focused: {
    border: 0;
  }
`;

export const Button = styled.button`
  display: inline-block;
  vertical-align: top;
  width: 15%;
  height: 40px;
  border: 0;
  padding: 5px;
`;

export const Send = styled.img`
  max-width: 100%;
  max-height: 100%;
  transition: 200ms all ease-in-out;
  ${p => p.disabled && 'opacity: 0.5'};
`;

export const IsWriting = styled.div`
  position: absolute;
  left: 5px;
  bottom: 20px;
  font-style: italic;
  font-size: 12px;
  transition: 200ms all ease-in-out;
  ${p => p.isWriting && 'bottom: 50px'};
`;
