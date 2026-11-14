"""Builds index.html for the Vegetable Face-off game. Run: python3 build.py"""
import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from build_common import *
here = os.path.dirname(os.path.abspath(__file__))
src = lambda f: read(os.path.join(here, 'src', f))
css = design_system_css() + '\n' + src('game.css')
head = "(function () {\n  var root = document.documentElement;\n  var ICONS = " + icons_json() + ";\n"
js = head + shared('icon-helper.js') + '\n' + shared('vegetable-data.js') + src('game.js')
html = page('Vegetable Face-off', css, src('body.html'), js)
open(os.path.join(here, 'index.html'), 'w').write(html)
print('Built', len(html), 'bytes')
