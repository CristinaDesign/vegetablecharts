"""Builds index.html for the Vegetable Explorer. Run: python3 build.py"""
import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from build_common import *
here = os.path.dirname(os.path.abspath(__file__))
src = lambda f: read(os.path.join(here, 'src', f))
css = design_system_css() + '\n' + src('page.css')
js = src('app.js').replace('__ICONS__', icons_json()).replace('/*__DATA__*/', shared('vegetable-data.js'))
html = page('Vegetable Explorer', css, src('body.html'), js)
open(os.path.join(here, 'index.html'), 'w').write(html)
print('Built', len(html), 'bytes')
