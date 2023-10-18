import React from 'react';
import styled from 'styled-components';
import Inner from './Inner';
import LaunchButton from './LaunchButton';
import useScreenSize, { ScreenSize } from '../hooks/useScreenSize';

const Container = styled.div`
    background-color: #FCBA5B;
    background-image: url('/images/bg.png');
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-color: gray;
`;

const SquirrelHello = styled.img`
    width: 400px;
`;
SquirrelHello.defaultProps = {
    src: '/images/squirrel-hello.svg'
}

const Leaf = styled.img`
    height: 180px;
    mix-blend-mode: multiply;
`;
Leaf.defaultProps = {
    src: '/images/leaf-orange.png'
}

const SquirrelNut = styled.img``;
SquirrelNut.defaultProps = {
    src: '/images/squirrel-nut.svg'
}

const YieldContainer = styled.div`
    border-radius: 16px;
    max-width: 600px;
    background: rgba(0, 0, 0, 0.40);
    backdrop-filter: blur(8px);
    text-align: center;
    color: #fff;

    h2 {
        leading-trim: both;
        text-edge: cap;
        font-size: 80px;
        font-style: italic;
        font-weight: 700;
        font-variant: small-caps;
        letter-spacing: 1.6px;
    }

    p {
        font-size: 24px;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.48px;
    }
`;

const BlueLeaf = styled.img`
    height: 200px;
`;

BlueLeaf.defaultProps = {
    src: '/images/leaf-blue.png'
}

const LEAFS_PER_SCREEN_SIZE: Record<ScreenSize, number> = {
    'xs': 3,
    'sm': 4,
    'md': 6,
    'lg': 7,
    'xl': 9,
    "2xl": 9
}

function YieldSection(props: React.HTMLProps<HTMLDivElement>) {

    const screenSize = useScreenSize();
    const isSmallishScreen = ['xs', 'sm', 'md'].includes(screenSize);

    const renderLeafs = () => {
        const leafCount = LEAFS_PER_SCREEN_SIZE[screenSize];
        return (
            <>
                { /* Dummy render to get these classes included in the bundle for dynamic coll adjusting of leafs */}
                <div className='grid grid-cols-3 grid-cols-4 grid-cols-6 grid-cols-7 grid-cols-9' />
                <div className={`grid grid-cols-${leafCount} py-12 gap-8`}>
                    {Array(leafCount).fill(1).map((_, index) => {
                        return <Leaf key={index} />
                    })}
                </div >
            </>
        )
    }

    return (
        <Container {...props}>
            <Inner className='px-4 sm:px-12 xl:px-0'>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <div />
                    <div />
                    <div className='flex items-center justify-center'>
                        <SquirrelHello style={{ marginTop: isSmallishScreen ? 0 : -150 }} />
                    </div>
                </div>

                {renderLeafs()}

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 py-12'>
                    <div className='flex justify-center'>
                        <SquirrelNut />
                    </div>
                    <YieldContainer className='py-10 px-16 mx-auto lg:mx-0'>
                        <BlueLeaf className='mx-auto' />
                        <h2>YIELD</h2>
                        <p>Save time and money <b>auto-compounding</b> your favorite projects in our vaults.</p>
                        <LaunchButton backgroundColor='#73D2DE' className='mt-12' href='' target='_blank'>
                            Launch the vaults
                        </LaunchButton>
                    </YieldContainer>
                </div>
            </Inner>


        </Container>
    )
}

export default YieldSection;