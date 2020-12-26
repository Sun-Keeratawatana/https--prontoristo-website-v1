import styled from "styled-components";
import { StyleSheet } from 'react-native'

export const GuestInfoContainer = styled.div`
  float:left;
  border: 2px solid black;
  border-radius: 3px;
  width:40vw;
  height: 300vh;
  max-height: 500px;
  margin: 0 8rem;
  margin-bottom:0.5rem;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  text-align: center;

  h1 {
    margin-top: 1rem;
    margin: 1rem;
    alignItems:'center';
    font-size: clamp(1.5rem, 2vw, 1rem);
    color: #000000;
  }
  p {
    margin-bottom: 1rem;
    margin: 0 4rem;
    alignItems:'center';
    font-size: clamp(0.5rem, 1.5vw, 1rem);
    color: #000000;
  }
`

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 7,
    margin:7,
    width:300,
  }
});