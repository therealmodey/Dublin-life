import json, subprocess, concurrent.futures
from pathlib import Path
root = Path('/Users/therealmodey/Documents/Codex/2026-10-08/https-lagoslife-eliysites-com-https-lagoslife')
paths = json.loads((root/'work/model-paths.json').read_text())
def fetch(path):
    target = root/'outputs/lagos-map/dist/assets'/f'{path}.glb'
    target.parent.mkdir(parents=True, exist_ok=True)
    try:
        subprocess.run(['curl','-sSL','--fail',f'https://lagoslife.eliysites.com/models/world/{path}.glb','-o',str(target)],check=True,capture_output=True)
        return path, target.stat().st_size
    except Exception as e:
        return path, str(e)
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
    for result in pool.map(fetch, paths): print(result)
