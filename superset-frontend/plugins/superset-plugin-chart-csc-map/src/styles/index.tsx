import { styled } from '@superset-ui/core';

export const Container = styled.div`
  position: absolute; 
  top:10px;
  z-index: 1;  
  height: 400px;
  width: 100%;
`;

export const SideNavBar = styled.div`
  display: flex;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  border-radius: 2px;
  padding: 2px;
`;

export const WrapNavBar = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  position:relative;
  border-radius: 2px;
  border: 1px solid #bcbcbc;
  padding:2px;
`;

export const SelectView = styled.select`
  justify-content: center;
  align-items: center;
  position:relative;
  border-radius: 2px;
  border: 1px solid #bcbcbc;
  padding: 5px 2px;
  font-size: 10px;
  margin-top: 16px;
`;

export const HeaderNav = styled.div`
  font-size: 10px;
`;

