'use client';

import {useEffect, useState} from 'react';

export default function PortDesk() {
  const [operations, setOperations] = useState(null);
  const [message, setMessage] = useState('');
  useEffect(() => {
    const refresh = () => setOperations(window.__mapExplorer?.getSnapshot?.().port || null);
    refresh();
    const timer = setInterval(refresh, 500);
    return () => clearInterval(timer);
  }, []);
  function command(action) {
    const result = window.__mapExplorer?.dispatchPort?.(action);
    if (result) {
      setOperations(window.__mapExplorer.getSnapshot().port);
      setMessage(result.message || 'Port operation updated');
    }
  }
  return <section className="port-desk" aria-label="Port operations">
    <strong>Harbour operations</strong>
    <p>Run the miniature cargo and ferry terminal. Watch vessels berth, unload and leave the harbour.</p>
    <div className="port-summary">
      <span>{operations?.paused ? '⏸ Harbour paused' : '⚓ Harbour running'}</span>
      <span>{operations?.completedCargo ?? 0} cargo calls completed</span>
      <span>{operations?.completedFerries ?? 0} ferry calls completed</span>
      <span>{operations?.containersMoved ?? 0} containers unloaded</span>
    </div>
    <ul className="port-vessels">{operations?.vessels?.map(vessel => <li key={vessel.id || vessel.name}>
      <strong>{vessel.name || vessel.id}</strong><span>{(vessel.phase || vessel.status || '').replaceAll('-', ' ')}</span>
    </li>)}</ul>
    <div className="port-actions">
      <button id="port-pause" onClick={() => command(operations?.paused ? 'resume' : 'pause')}>{operations?.paused ? 'Resume harbour' : 'Pause harbour'}</button>
      <button id="port-cargo" onClick={() => command('dispatch-cargo')}>Dispatch cargo ship</button>
      <button id="port-ferry" onClick={() => command('dispatch-ferry')}>Dispatch ferry</button>
      <button id="port-reset" onClick={() => command('reset')}>Reset harbour</button>
    </div>
    <span className="port-message" role="status">{message}</span>
  </section>;
}
