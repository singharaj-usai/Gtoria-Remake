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
    <div>
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
}

export default Buttons;
