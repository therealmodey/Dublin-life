'use client';

import {useEffect, useState} from 'react';

export default function SecondHarbourDesk() {
  const [state,setState]=useState(null);
  useEffect(()=>{
    const refresh=()=>setState(window.__mapExplorer?.getSnapshot?.().secondHarbour||null);
    refresh();
    const timer=setInterval(refresh,400);
    return()=>clearInterval(timer);
  },[]);
  return <section className="port-desk second-harbour-desk" aria-label="Howth harbour boat status">
    <strong>Howth harbour</strong>
    <p>Fishing boats, marina craft and passenger launches in Howth Harbour.</p>
    <div className="port-summary">
      <span>{state?.status||'Harbour loading'}</span>
      <span>{state?.arrivals??0} arrivals</span>
      <span>{state?.departures??0} departures</span>
    </div>
    <ul className="port-vessels">{state?.boats?.map(boat=><li key={boat.id}>
      <strong>{boat.name||boat.id}</strong><span>{(boat.phase||'').replaceAll('-',' ')}</span>
    </li>)}</ul>
  </section>;
}
