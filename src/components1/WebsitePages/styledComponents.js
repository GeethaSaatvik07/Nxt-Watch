import styled from 'styled-components'

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15%;
  height: 100%;
  min-height: 89vh;
  text-decoration: none;
`

export const PagesList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const PageListItem = styled.li`
  display: flex;
  margin-top: -10px;
  align-items: center;
  list-style-type: none;
  width: 100%;
  font-size: 20px;
  color: #475569;
  background-color: transparent;
`

export const PageListItemName = styled.p`
  font-size: 18px;
  color: #64748b;
  margin-left: 15px;
  text-decoration: none;
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  //   position: fixed;
  //   bottom: 0;
`

export const ContactHeading = styled.h1`
  font-size: 25px;
  color: #00306e;
`

export const ContactWebsitesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  margin-right: auto;
`

export const ContactWebsiteImage = styled.img`
  width: 30px;
  margin-right: 15px;
`

export const ContactPara = styled.p`
  font-size: 15px;
  color: #212121;
  //   width: 15%;
`
