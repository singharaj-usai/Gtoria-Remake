import React from 'react';

function PrimaryButton() {
    return (
        <button className="btn btn-primary">Primary Button</button>
    );
}

function SecondaryButton() {
    return (
        <button className="btn btn-secondary">Secondary Button</button>
    );
}

function Buttons() {
    return (
        <div className="container">
            <h1>Forum</h1>
            <PrimaryButton />
            <SecondaryButton />
        </div>
    );
}

export default Buttons;
