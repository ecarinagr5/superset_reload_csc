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
  padding: 2px;
  color: #fff;
  font-size: 11px;
  font-weight: bold;
`;

export const WrapNavBar = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  position:relative;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #bcbcbc;
  box-shadow: 0 0 2px #000;
  padding:1px 3px;
`;

export const SelectView = styled.select`
  justify-content: center;
  align-items: center;
  position:relative;
  border-radius: 4px;
  border: 1px solid #bcbcbc;
  box-shadow: 0 0 2px #000;
  padding:1px 3px;
`;

export const HeaderNav = styled.div`
  position:absolute;
  z-index: 3;
  top: -12px;
  right: 10%;
  Font-size: 10px;
`;

export const LinksNavBar = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  position:relative;
  width: 15%;
  border-radius: 4px;
  border: 1px solid #bcbcbc;
  box-shadow: 0 0 2px #000;
  padding:1px 3px;
  background: #a13a73;
  font-size: 11px;
  font-weight: bold;
  color: #fff;
`;