from pathlib import Path
import subprocess, concurrent.futures,json
names=[r['name'] for r in json.loads(Path('work/reference-script-urls.json').read_text()) if not (Path('work')/r['name']).exists()]
def fetch(name):
    target=Path('work')/name
    subprocess.run(['curl','-sSL','--fail',f'https://lagoslife.eliysites.com/_next/static/chunks/{name}','-o',str(target)],check=True)
    text=target.read_text()
    terms=[term for term in ['abjAssembly','National Assembly','CITY_MAP','abjMagicCity','CityMap'] if term in text]
    return name,len(text),terms
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
    for result in pool.map(fetch,names): print(result)
