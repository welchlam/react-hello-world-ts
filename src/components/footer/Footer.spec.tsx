import * as React from 'react';
import * as enzyme from 'enzyme';
import Footer from "./Footer";

describe('Footer.tsx', () => {
    it('should render footer with content', () => {
        const footer = enzyme.shallow(<Footer />);
        expect(footer.find('div').text()).toEqual('footer');
    });
})