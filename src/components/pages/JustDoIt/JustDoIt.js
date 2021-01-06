//@flow
import React from 'react';
import Header from './Header/Header';
import SecondSection from './SecondSection/SecondSection';
import FirstSection from './FirstSection/FirstSection';

export default function JustDoIt() {
    return (
        <div>
            <Header />
            <FirstSection />
            <SecondSection />
        </div>
    );
}
