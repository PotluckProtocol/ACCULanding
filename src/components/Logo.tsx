import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 700px;
`;

const Accumulator = styled.img`
    width: 100%;
`;

Accumulator.defaultProps = {
    src: '/images/accumulator.png'
}

const Description = styled.p`
    font-style: italic;
    font-size: 2rem;
    color: #561317;
    text-align: center;
`;

function Logo(props: { className?: string }) {
    const classNames = ['px-12', 'md:px-0', props.className].filter(Boolean).join(' ');
    return (
        <Container className={classNames}>
            <Accumulator />
            <Description className='py-8'>
                Automatically reinvests and compounds your yields to maximize your returns.
            </Description>
        </Container>
    )
}

export default Logo;