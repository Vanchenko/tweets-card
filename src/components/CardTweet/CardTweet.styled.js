import styled from "@emotion/styled";

export const WrapperCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(115deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    padding-top: 28px;
    padding-bottom: 36px;
   // padding-left: 36px;
   // padding-right: 36px;
    border-radius: 20px;
    box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
`;
export const LogoImage = styled.img`
    position: absolute;
    left: 20px;
    top: 20px;
    z-index: 100;
`;
export const BackCardImage = styled.img`
    width: 308px;
    margin-right: auto;
    margin-left: auto;
`;
export const AvatarImage = styled.img`
    width: 58px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: -64px;
    border-radius: 50%;
    z-index: 1000;
`;
export const EllipseImage = styled.img`
    width: 80px;
    height: 80px;
    background: linear-gradient(115deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
    background-repeat: no-repeat;
    background-size: 60px 60px;
    background-position: top 0px left 10px;
    border-radius: 50%;
    margin-right: auto;
    margin-left: auto;
    z-index: 100;
`;
export const RectImage = styled.img`
  //  width: 80px;
  // position: absolute;
    margin-top: -47px;
    padding-bottom: 47px;
    margin-right: auto;
    margin-left: auto;
`;
export const WrapperText = styled.div`
    display: flex;
   flex-direction: column;
   justify-content: center;
   // align-item: center;
  // align-content: center;
`;
export const Text = styled.p`
    display: flex;
    color: white;
    margin-top: 0;
    margin-bottom: 10px;
    margin-right: auto;
    margin-left: auto;
`;

export const Button = styled.button`
  width: 196px;
  margin-top: 26px;
  margin-right: auto;
  margin-left: auto;
  padding: 14px 28px;
  border-radius: 10.311px;
  background: ${({ isFollow }) => (isFollow ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  border: transparent;
`;