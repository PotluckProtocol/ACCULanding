import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 130px;
`;

const Nut = styled.img`
    width: 45px;
    height: 45px;
`;
Nut.defaultProps = {
    src: '/images/nut.png'
}

function Header() {
    return (
        <Container className='flex items-center justify-center md:justify-start px-12'>
            <Nut />
        </Container >
    )
}

export default Header;