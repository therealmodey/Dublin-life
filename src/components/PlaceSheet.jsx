'use client';

import {useEffect, useRef, useState} from 'react';
import PortDesk from './PortDesk.jsx';
import SecondHarbourDesk from './SecondHarbourDesk.jsx';

// The public reference opens a destination sheet, and a separate airport desk.
// Only the standalone map's real actions are offered here.
export default function PlaceSheet({place, onClose}) {
  const sheet=useRef(null);
  const [copied,setCopied]=useState(false);
  const airport=place?.kind==='airport'||['airport','abjAirport','dubAirport'].includes(place?.id);
  useEffect(()=>{
    setCopied(false);
    const node=sheet.current;
    if(place && !node.open) node.showModal();
    else if(!place && node.open) node.close();
  },[place?.id]);
  async function sharePlace(){
    const url=new URL(location.href);
    url.searchParams.set('city',place.city);
    url.searchParams.set('place',place.id);
    try {await navigator.clipboard.writeText(url.href);setCopied(true);} catch {setCopied(false);}
  }
  return <dialog ref={sheet} id="detail" className="glass detail place-sheet" hidden={!place}
    aria-label={airport?'Airport desk':'Selected landmark'} aria-labelledby="place-name"
    onCancel={event=>{event.preventDefault();onClose();}}
    onClick={event=>{if(event.target===sheet.current){const rect=sheet.current.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)onClose();}}}>
    <div className="sheet-handle" aria-hidden="true"/>
    <button id="close-detail" className="icon close" aria-label="Close landmark details" onClick={onClose}>×</button>
    <span id="district" className="eyebrow">{place?.district||place?.area||place?.city}</span>
    <h1 id="place-name">{place ? `${place.emoji||'🏠'} ${place.name}` : ''}</h1>
    <p id="place-desc">{place?.description||''}</p>
    <button className="share-place" onClick={sharePlace}>{copied?'✓ Link copied':'🔗 Share a link to this place'}</button>
    {airport && <div className="airport-desk"><strong>Airport desk</strong><p>Explore the terminals, gates and airfield. Tickets and game travel are unavailable in this map explorer.</p></div>}
    {place?.id === 'dubPort' && <PortDesk />}
    {place?.id === 'dubHowthHarbour' && <SecondHarbourDesk />}
    {place?.sourceUrl && <a className="place-source" href={place.sourceUrl} target="_blank" rel="noopener noreferrer">About this place ↗</a>}
    <div className="actions"><button id="focus" className="primary">Look closer</button><button id="walk-here">Walk here</button></div>
  </dialog>;
}
