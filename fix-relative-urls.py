# To find files
from pathlib import Path

# To manipulate html files
from bs4 import BeautifulSoup

for path in Path('./').rglob('*.html'):
	print(path.absolute())

