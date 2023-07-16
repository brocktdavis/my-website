import React from 'react';
import './Palette.css'

export default function ColorPalette() {
  return (
    <div>
      {/* Darker palette */}
      <div className="palette-row">
        <div className="palette-box">
          dark-darker
          <div className="dark-darker">&nbsp;</div>
        </div>
        <div className="palette-box">
          accent1-darker
          <div className="accent1-darker">&nbsp;</div>
        </div>
        <div className="palette-box">
          accent2-darker
          <div className="accent2-darker">&nbsp;</div>
        </div>
        <div className="palette-box">
          accent3-darker
          <div className="accent3-darker">&nbsp;</div>
        </div>
      </div>
      {/* Regular palette */}
      <div className="palette-row">
        <div className="palette-box">
          dark
          <div className="dark">&nbsp;</div>
        </div>
        <div className="palette-box">
          accent1
          <div className="accent1">&nbsp;</div>
        </div>
        <div className="palette-box">
          accent2
          <div className="accent2">&nbsp;</div>
        </div>
        <div className="palette-box">
          accent3
          <div className="accent3">&nbsp;</div>
        </div>
      </div>
      {/* Lighter palette */}
      <div className="palette-row">
        <div className="palette-box">
          dark-lighter
          <div className="dark-lighter">&nbsp;</div>
        </div>
        <div className="palette-box">
          accent1-lighter
          <div className="accent1-lighter">&nbsp;</div>
        </div>
        <div className="palette-box">
          accent2-lighter
          <div className="accent2-lighter">&nbsp;</div>
        </div>
        <div className="palette-box">
          accent3-lighter
          <div className="accent3-lighter">&nbsp;</div>
        </div>
      </div>
    </div>
  );
}