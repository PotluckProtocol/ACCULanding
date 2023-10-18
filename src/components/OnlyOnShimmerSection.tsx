import React from 'react';
import styled from 'styled-components';
import LaunchButton from './LaunchButton';

const Container = styled.div`
    background-color: #73D2DE;
    background-image: url('/images/dots-yellow.png');
    background-repeat-y: no-repeat;
    background-position-y: bottom;
    min-height: 500px;
    position: relative;
    text-align: center;
`;

const OnlyOn = styled.p`
    color: #FFF;
    leading-trim: both;
    text-edge: cap;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-variant: small-caps;
    letter-spacing: 0.64px;
`;

const ShimmerLogo = styled.img`
    width: 90%;
    max-width: 430px;
`;
ShimmerLogo.defaultProps = {
    src: '/images/shimmer-logo.png'
}


function OnlyOnShimmerSection(props: React.HTMLProps<HTMLDivElement>) {
    const { className, ...rest } = props
    const classNames = ['flex', 'justify-center', 'items-center', props.className].filter(Boolean).join(' ');
    return (
        <Container {...rest} className={classNames}>
            <div>
                <OnlyOn>ONLY ON</OnlyOn>
                <ShimmerLogo className='mx-auto pt-8 pb-12' />
                <LaunchButton backgroundColor='#4DACB8'>Go to Accumulator</LaunchButton>
            </div>
        </Container >
    )
}

export default OnlyOnShimmerSection;