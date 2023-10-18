import React from "react";
import styled from "styled-components";

const Root = styled.button`
    padding: 15px;
    line-height: normal;
    border-radius: .5rem;
    color: #FFF;
    leading-trim: both;
    text-edge: cap;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.64px;
`;

export type LaunchButtonProps = React.HTMLProps<HTMLButtonElement> & {
    backgroundColor: string;
}

function LaunchButton(props: LaunchButtonProps) {
    const { backgroundColor, ...rest } = props;
    return <Root {...rest as any} style={{ backgroundColor }} />
}

export default LaunchButton;