import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 152px;
    background-color: #FFBC42;
`;

const Discord = styled.img`
    width: 32px;
    height: 32px;
`;
Discord.defaultProps = {
    src: '/images/discord.svg',
    alt: 'Discord'
}

const Gitbook = styled.img`
    width: 32px;
    height: 32px;
`;
Gitbook.defaultProps = {
    src: '/images/gitbook.svg',
    alt: 'Gitbook'
}

const X = styled.img`
    width: 32px;
    height: 32px;
`;
X.defaultProps = {
    src: '/images/x.svg',
    alt: 'X'
}

const Explorer = styled.img`
    width: 32px;
    height: 32px;
`;
Explorer.defaultProps = {
    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACdQTFRFAAAA////////////////////////////////////////////////rj1KOQAAAA10Uk5TAGYpcar/xjkcVY7jPYpXQ7MAAAC2SURBVHicjZA9CsMwDIUFCWTpkp4kR+gQ6ND5Geo9kDFDt+yBHsClOUBuUMj1akeyZW/RYt5n/T0RnY72Wsiqh7ln+o0QVsFwAHRRL6zxzBPWDRhFN4Dx2bOJCTX/NanCAdxJgeVOcQqwh920KXALz5bGCpiBEtQZGEsgxQpkDwUL+1RQwXBiMsNNB7XvJi7c0z1+vm6QdfjPrv5GqYWTC0ZvwSfyBKLPAb4K6PVA31Eel5ZOxx/8xjvuRxFKMAAAAABJRU5ErkJggg==',
    alt: 'Explorer'
}



function Footer() {
    return (
        <Container className='flex justify-center items-center'>
            <div className='grid grid-cols-4 gap-16'>
                <div>
                    <a href='https://discord.gg/gW8QNy2c8v' target='_blank'>
                        <Discord />
                    </a>
                </div>
                <div>
                    <a href='https://twitter.com/ACCU_DeFi' target='_blank'>
                        <X />
                    </a>
                </div>
                <div>
                    <a href='https://accumulator.gitbook.io/accumulator/' target='_blank'>
                        <Gitbook />
                    </a>
                </div>
                <div>
                    <a href='https://explorer.evm.shimmer.network/' target='_blank'>
                        <Explorer />
                    </a>
                </div>
            </div>
        </Container>
    )
}

export default Footer;