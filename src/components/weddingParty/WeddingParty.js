//React
import React from 'react';
//Components
import Desktop from './Desktop'
import Mobile from './Mobile'
import withSizes from 'react-sizes'

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 767,
})

const WeddingParty = ({ weddingParty, isMobile }) => {
    return isMobile ? <Mobile weddingParty={weddingParty} /> : <Desktop weddingParty={weddingParty} />
};

export default withSizes(mapSizesToProps)(WeddingParty)