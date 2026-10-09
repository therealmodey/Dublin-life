'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import PlaceSheet from '../src/components/PlaceSheet.jsx';
import { useMapStore } from '../src/map-store.js';

const MapCanvas = dynamic(() => import('../src/components/MapCanvas.jsx'), { ssr: false });

const cityNames = { lagos: '🇳🇬 Lagos', abuja: '🇳🇬 Abuja', dublin: '🇮🇪 Dublin' };
const cityTabs = { lagos: '🌊 Lagos', abuja: '🏛️ Abuja', dublin: '🇮🇪 Dublin' };
const districts = {
  lagos: [['all', '🗺️', 'All Lagos'], ['mainland', '🏘️', 'Mainland'], ['island', '🏙️', 'Island'], ['lekki', '🌴', 'Lekki']],
  abuja: [['all', '🗺️', 'All Abuja'], ['central', '🏛️', 'Central'], ['maitama', '🌳', 'Maitama'], ['jabi', '🌊', 'Jabi']],
  dublin: [['all', '🗺️', 'All Dublin'], ['centre', '🏛️', 'City centre'], ['northside', '🏘️', 'Northside'], ['docklands', '⚓', 'Docklands']],
};

export default function HomePage() {
  const city = useMapStore((state) => state.city);
  const names = useMapStore((state) => state.names);
  const homes = useMapStore((state) => state.homes);
  const boards = useMapStore((state) => state.boards);
  const walking = useMapStore((state) => state.walking);
  const selectedPlace = useMapStore((state) => state.selectedPlace);
  const ready = useMapStore((state) => state.ready);
  const progress = useMapStore((state) => state.progress);
  const loadPercent = useMapStore((state) => state.loadPercent);
  const district = useMapStore((state) => state.district);
  const setCity = useMapStore((state) => state.setCity);
  const setOption = useMapStore((state) => state.setOption);
  const setDistrict = useMapStore((state) => state.setDistrict);
  const setSelection = useMapStore((state) => state.select);

  useEffect(() => {
    const requestedCity = new URLSearchParams(window.location.search).get('city');
    if (requestedCity === 'abuja' || requestedCity === 'dublin') setCity(requestedCity);
  }, [setCity]);

  return (
    <>
      <main id="map" aria-label={`Interactive 3D ${city} city map`}>
        <MapCanvas />
        <div id="labels" aria-label="Map places" />
      </main>
      <header className="glass header">
        <div className="brand"><span className="brand-icon">♛</span><div><strong>Lagos Life</strong><span>Map explorer</span></div></div>
        <div className="divider" />
        <span className="city" id="city-name">{cityNames[city]}</span>
        <button id="help" className="icon" aria-label="Map controls and credits">?</button>
      </header>
      <div className="glass toolbar" aria-label="Map display options">
        <button id="names" aria-pressed={names} onClick={() => setOption('names', !names)}>🏷️ Names</button>
        <button id="homes" aria-pressed={homes} onClick={() => setOption('homes', !homes)}>🏘️ Neighbours</button>
        <button id="boards" aria-pressed={boards} onClick={() => setOption('boards', !boards)}>📢 Billboards</button>
        <button id="walk" aria-pressed={walking} onClick={() => setOption('walking', !walking)}>🚶🏾 Walk</button>
      </div>
      <nav className="glass city-nav" aria-label="Choose a city">
        {Object.entries(cityNames).map(([key, name]) => (
          <button key={key} data-city={key} aria-pressed={city === key} onClick={() => setCity(key)}>{cityTabs[key]}</button>
        ))}
      </nav>
      <div id="loader" className="glass loading" role="status" hidden={ready}><strong>Loading the cities…</strong><span id="progress">{progress}</span><div><i id="loadbar" style={{ width: `${loadPercent}%` }} /></div></div>
      <div className="glass zoom"><button id="plus" aria-label="Zoom in">+</button><button id="minus" aria-label="Zoom out">−</button><span /><button id="reset" aria-label="Reset map view">⌖</button></div>
      <PlaceSheet place={selectedPlace} onClose={() => setSelection(null)} />
      <nav className="glass district-nav" aria-label="Go to a district">
        {districts[city].map(([key, icon, label]) => <button key={key} data-district={key} className={district === key ? 'active' : ''} onClick={() => setDistrict(key)}>{icon}<span>{label}</span></button>)}
      </nav>
      <div id="hint" className="glass hint" hidden={walking}>Drag to explore <span>·</span> Scroll to zoom</div>
      <div id="walk-controls" hidden={!walking}><div className="glass walk-hint">Use WASD or arrow keys <button id="leave-walk" onClick={() => setOption('walking', false)}>Exit walk</button></div><div className="dpad"><button data-move="up" aria-label="Walk forward">↑</button><button data-move="left" aria-label="Walk left">←</button><button data-move="down" aria-label="Walk backward">↓</button><button data-move="right" aria-label="Walk right">→</button></div></div>
      <dialog id="help-dialog" className="glass"><button id="close-help" className="icon close" aria-label="Close help">×</button><h2>Explore Lagos, Abuja &amp; Dublin</h2><p>Switch cities with the Lagos, Abuja and Dublin tabs. Drag to pan. Scroll or pinch to zoom. Right-drag to rotate the city.</p><p>Select a place to look closer, or enter walking mode and move with WASD, arrow keys, or the on-screen controls.</p><p className="credit">A standalone map recreation based on <a href="https://lagoslife.eliysites.com/" target="_blank" rel="noopener">Lagos Life</a>. The Nigerian maps follow the reference. Dublin is an authored, compressed map with researched landmarks and infrastructure. Low-poly building assets by Kenney, as used in the original. This explorer has no connection to game accounts or progress.</p></dialog>
    </>
  );
}
