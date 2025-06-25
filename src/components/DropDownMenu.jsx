import styled from "styled-components";

let StyledDropDown = styled.ul`
    position: absolute;
    height: 150px;
    max-height: 400px;
    width: 100%;
    background-color: aliceblue;
    overflow-y: scroll;
    top: 100%;    
    z-index: 1;
    border-radius: 5px;
`;
let StyledDropDownLi = styled.li`
    font-size: 20px;
    margin: 8px 15px;
`;

export default function DropDownMenu({tips, getWeather}) {
    return(
        <>
            <StyledDropDown>
                    {(tips.length>0 ? tips :  ['По вашему запросу ничего не найдено']).map(([key, value])=>{
                        return(
                            <StyledDropDownLi onClick={()=>getWeather(key)} key={key}>
                                {value}
                            </StyledDropDownLi>
                        )
                    })}
            </StyledDropDown>
        </>
    );
};