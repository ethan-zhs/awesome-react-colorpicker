const convert = require('color-convert');

const COLOR_REG_EXP = {
    rgb: /rgb[\s|\(]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))\s*\)?/,
    rgba: /rgba[\s|\(]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))\s*\)?/,
    hsl: /hsl[\s|\(]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))\s*\)?/,
    hsla: /hsla[\s|\(]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))\s*\)?/,
    hsv: /hsv[\s|\(]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))\s*\)?/,
    hsva: /hsva[\s|\(]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))\s*\)?/,
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};

function Deal(type, val) {
    const TYPE_LIMIT = {
        h: [0, 360],
        s: [0, 100],
        l: [0, 100],
        v: [0, 100],
        r: [0, 255],
        g: [0, 255],
        b: [0, 255],
        a: [0, 1]
    };
    val = val.toString().includes('%') ?
          val.toString().replace('%', '') / 100 * TYPE_LIMIT[type][1] : val;

    if (val > TYPE_LIMIT[type][1]) {
        val = TYPE_LIMIT[type][1];
    }

    if (val < TYPE_LIMIT[type][0]) {
        val = TYPE_LIMIT[type][0];
    }

    return Number(val);
}

export default function colorConvert(value) {
    const REG = COLOR_REG_EXP;
    let r = 0;
    let g = 0;
    let b = 0;
    let alpha = 1;

    value = value.trim();

    if (REG.hsl.test(value)) {
        // hsl convert to hex
        const c = REG.hsl.exec(value);
        const h = Deal('h', c[1]);
        const s = Deal('s', c[2]);
        const l = Deal('l', c[3]);
        [r, g, b] = convert.hsl.rgb([h, s, l]);

    } else if (REG.hsla.test(value)) {
        // hsla convert to rgba
        const c = REG.hsla.exec(value);
        const h = Deal('h', c[1]);
        const s = Deal('s', c[2]);
        const l = Deal('l', c[3]);
        const a = Deal('a', c[4]);
        [r, g, b, alpha = a] = convert.hsl.rgb([h, s, l]);

    } else if (REG.hsv.test(value)) {
        // hsv convert to hex
        const c = REG.hsv.exec(value);
        const h = Deal('h', c[1]);
        const s = Deal('s', c[2]);
        const v = Deal('v', c[3]);
        [r, g, b] = convert.hsv.rgb([h, s, v]);

    } else if (REG.hsva.test(value)) {
        // hsva convert to rgba
        const c = REG.hsva.exec(value);
        const h = Deal('h', c[1]);
        const s = Deal('s', c[2]);
        const v = Deal('v', c[3]);
        const a = Deal('a', c[4]);
        [r, g, b, alpha = a] = convert.hsv.rgb([h, s, v]);

    } else if (REG.rgb.test(value)) {
        // rgb convert to hex
        const c = REG.rgb.exec(value);
        r = Deal('r', c[1]);
        g = Deal('g', c[2]);
        b = Deal('b', c[3]);

    } else if (REG.rgba.test(value)) {
        // rgba
        const c = REG.rgba.exec(value);
        r = Deal('r', c[1]);
        g = Deal('g', c[2]);
        b = Deal('b', c[3]);
        alpha = Deal('a', c[4]);

    } else if (REG.hex3.test(value) || REG.hex6.test(value) || REG.hex4.test(value) || REG.hex8.test(value)) {
        // hex convert to hex
        [r, g, b] = convert.hex.rgb(value);
    } else {
        try {
            // keywords convert to hex
            [r, g, b] = convert.keyword.rgb(value);
        } catch (err) {
            console.log('convert keyword to hex fail');
        }
    }

    const hsv = convert.rgb.hsv([r, g, b]);
    const hex = convert.rgb.hex([r, g, b]);

    return { r, g, b, a: alpha, h: hsv[0], s: hsv[1], v: hsv[2], hex };
}
