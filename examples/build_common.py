"""Shared build helpers for the example pages.
Each example is made of a few small source files. build.py joins them with the design system
(the tokens and components in ../src) into ONE self-contained index.html that you can open in a browser."""
import os
HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, '..', 'src')
read = lambda p: open(p, encoding='utf-8').read()

COMPONENTS = ['Switch', 'SegmentedControl', 'Button', 'Select', 'SelectableCard', 'Disclosure', 'Table',
              'LegendMarker', 'ScoreBar', 'Icon', 'Banner', 'Chip']

def design_system_css():
    """Tokens (three colour layers + type, space, shape) and every component's CSS, read straight from ../src."""
    t = read(os.path.join(SRC, 'tokens', 'tokens.css'))  # tokens.css also holds the non-colour tokens
    base = t[t.index(':root {\n'):]
    colour = ''.join(read(os.path.join(SRC, 'tokens', f)) + '\n' for f in ('primitives.css', 'semantic.css', 'component.css'))
    comps = ''.join(read(os.path.join(SRC, 'components', c, c + '.css')) for c in COMPONENTS)
    return colour + base + '\n' + comps + '\n' + read(os.path.join(HERE, 'shared', 'page-extras.css'))

def icons_json():
    return read(os.path.join(HERE, 'shared', 'icons.json'))

def shared(name):
    return read(os.path.join(HERE, 'shared', name))

def js_esc(t):
    return ''.join(c if ord(c) < 128 else '\\u%04x' % ord(c) for c in t)

def html_esc(t):
    return ''.join(c if ord(c) < 128 else '&#%d;' % ord(c) for c in t)

def page(title, css, body, js, icon_base=None):
    icon_base = icon_base or os.environ.get('ICON_BASE', '../shared/icons/')
    js = js.replace("'icons/' +", "'" + icon_base + "' +").replace('src="icons/', 'src="' + icon_base)
    css = ''.join(c if ord(c) < 128 else '-' for c in css)  # only comments carry non-ASCII
    return f'''<title>{title}</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&family=Alegreya+Sans:wght@400;500;700&display=swap">
<style>
{css}
</style>
{html_esc(body)}
<script>
{js_esc(js)}
</script>
'''
