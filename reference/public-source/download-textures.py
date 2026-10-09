import json,subprocess
from pathlib import Path
root=Path('/Users/therealmodey/Documents/Codex/2026-10-08/https-lagoslife-eliysites-com-https-lagoslife')
for folder,uris in json.loads((root/'work/textures.json').read_text()).items():
    if folder == '.': continue
    for uri in uris:
        p=root/'outputs/lagos-map/dist/assets'/folder/uri;p.parent.mkdir(parents=True,exist_ok=True)
        subprocess.run(['curl','-sSL','--fail',f'https://lagoslife.eliysites.com/models/world/{folder}/{uri}','-o',str(p)],check=True)
        print(folder,uri,p.stat().st_size)
