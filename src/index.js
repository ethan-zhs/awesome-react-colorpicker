import * as React from 'react';
import convert from 'color-convert';
import classNames from 'classnames';

import colorFormat from './colorFormat';

import './index.less';

class ColorPicker extends React.Component {
    static colorFormat = colorFormat;
    constructor(props) {
        super(props);

        this.state = {
            colorType: 'rgb',
            hex: '000000',
            h: 180,
            s: 0,
            v: 0,
            r: 0,
            g: 0,
            b: 0,
            a: 100
        };
    }

    componentDidMount() {
        const { r, g, b, a, h, s, v, hex } = colorFormat(this.props.color || '#000000');
        this.setState({ r, g, b, a: a * 100, h, s, v, hex });
    }

    componentWillUnmount() {
        const { r, g, b, a } = this.state;
        const rgba = `rgba(${r}, ${g}, ${b}, ${(a > 100 ? 100 : a) / 100})`;

        const recentColorStr = localStorage.getItem('recentColor') || '[]';
        const recentColorList = JSON.parse(recentColorStr);

        // 最多放18个最近使用颜色
        recentColorList.length >= 18 && recentColorList.pop();
        recentColorList.unshift(rgba);

        localStorage.setItem('recentColor', JSON.stringify(recentColorList));
    }

    componentDidUpdate(prevProps) {
        if (this.props.color !== prevProps.color) {
            const { r, g, b, a, h, s, v, hex } = colorFormat(this.props.color || '#000000');
            this.setState({ r, g, b, a: a * 100, h, s, v, hex });
        }
    }

    render() {
        const { globalColor } = this.props;

        return (
            <div className="color-picker-panel">
                <div className="color-picker-panel-inner">
                    {this.renderBoard()}
                    {this.renderColorPickWrap()}
                    {this.renderParams()}
                    {globalColor && this.renderGlobalColor()}
                    {this.renderRecentColor()}
                </div>
            </div>
        );
    }

    renderBoard = () => {
        const { h, s, v } = this.state;
        const [r, g, b] = convert.hsv.rgb([h, 100, 100]);

        return (
            <div
                className="color-picker-panel-board"
                style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
                onClick={this.changeColorOnBoard}
            >
                <div className="color-picker-panel-board-hsv">
                    <div className="color-picker-panel-board-value" />
                    <div className="color-picker-panel-board-saturation" />
                </div>
                <span style={{ left: `${s}%`, top: `${100 - v}%` }} />
                <div className="color-picker-panel-board-handler" />
            </div>
        );
    }

    renderColorPickWrap = () => {
        const { h, s, v, a } = this.state;

        const pos = Math.round(h / 360 * 100);
        const [r, g, b] = convert.hsv.rgb([h, s, v]);

        return (
            <div className="color-picker-panel-wrap">
                <div className="color-picker-panel-wrap-ribbon">
                    <div className="color-picker-panel-ribbon">
                        <span style={{left: `${pos}%`}} onMouseDown={this.changeRibbonStart} />
                        <div
                            className="color-picker-panel-ribbon-handler"
                            onClick={(e) => this.changeRibbon(e.clientX)}
                        />
                    </div>
                </div>
                <div className="color-picker-panel-wrap-alpha">
                    <div className="color-picker-panel-alpha">
                        <div
                            className="color-picker-panel-alpha-bg"
                            style={{ background: `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0),
                                rgb(${r}, ${g}, ${b}))`
                            }}
                        />
                        <span style={{ left: `${a}%` }} onMouseDown={this.changeAlphaStart} />
                        <div
                            className="color-picker-panel-alpha-handler"
                            onClick={(e) => this.changeAlpha(e.clientX)}
                        />
                    </div>
                </div>
                <div className="color-picker-panel-wrap-swatch">
                    <span className="color-picker-panel-swatch" draggable={false}>
                        <span style={{ background: `rgb(${r}, ${g}, ${b})` }} />
                    </span>
                    <span className="color-picker-panel-swatch" draggable={false}>
                        <span />
                    </span>
                </div>
            </div>
        );
    }

    renderParams = () => {
        const { hex, h, s, v, r, g, b, a, colorType } = this.state;
        const hsb = [
            { type: 'h', value: h, label: 'H', max: 360 },
            { type: 's', value: s, label: 'S', max: 100 },
            { type: 'v', value: v, label: 'B', max: 100 }
        ];
        const rgb = [
            { type: 'r', value: r, label: 'R', max: 255 },
            { type: 'g', value: g, label: 'G', max: 255 },
            { type: 'b', value: b, label: 'B', max: 255 }
        ];

        const color = { hsb, rgb };

        return (
            <div
                className="color-picker-panel-wrap"
                style={{ height: '45px', marginTop: '6px' }}
            >
                <div
                    className={classNames({
                        ["color-picker-panel-params"]: true,
                        ["color-picker-panel-params-has-alpha"]: true
                    })}
                >
                    <div className="color-picker-panel-params-input">
                        <input
                            type='text'
                            className="color-picker-panel-params-hex"
                            maxLength={6}
                            value={hex}
                            onChange={this.changeHexOnInput}
                            onBlur={this.hexInputBlur}
                        />
                        {color[colorType].map((item, index) => (
                            <input
                                key={index}
                                type='number'
                                value={item.value}
                                onChange={(e) => this.changeColorOnInput(e, item.type, item.max)}
                            />
                        ))}
                        <input
                            type='number'
                            value={a}
                            onChange={(e) => this.changeColorOnInput(e, 'a', 100)}
                        />
                    </div>
                    <div className="color-picker-panel-params-label">
                        <label className="color-picker-panel-params-label-hex">Hex</label>
                        {color[colorType].map((item, index) => (
                            <label
                                key={index}
                                className="color-picker-panel-params-label-number"
                                onClick={this.changeColorType}
                            >
                                {item.label}
                            </label>
                        ))}
                        <label className="color-picker-panel-params-lable-alpha">A</label>
                    </div>
                </div>
            </div>
        );
    }

    renderGlobalColor = () => {
        const { globalColor = [] } = this.props;

        return (
            <div
                className={classNames({
                    ["collapse-panel"]: true,
                    ["color-picker-panel-palette"]: true
                })}
            >
                <div className="collapse-panel-header" onClick={this.toggleGlobalColor}>
                    <span>全局色彩</span>
                </div>

                <div className="collapse-panel-content-wp">
                    <div className="collapse-panel-content">
                        {globalColor.map((item, index) => (
                            <span
                                key={index}
                                className="color-picker-panel-swatch"
                                onClick={() => this.clickColorChange(item)}
                            >
                                <span style={{ background: item }}/>
                            </span>
                        ))}

                        <span
                            className="color-picker-panel-palette-add"
                            onClick={this.addGlobalColor}
                        >
                            <span>+</span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    renderRecentColor = () => {
        const recentColorStr = localStorage.getItem('recentColor') || '[]';
        const recentColorList = JSON.parse(recentColorStr);

        return (
            <div
                className={classNames({
                    ["collapse-panel"]: true,
                    ["color-picker-panel-palette"]: true
                })}
            >
                <div className="collapse-panel-header" onClick={this.toggleRecentColor}>
                    <span>最近使用</span>
                </div>

                <div className="collapse-panel-content-wp">
                    <div className="collapse-panel-content">
                        {recentColorList.map((item, index) => (
                            <span
                                key={index}
                                className="color-picker-panel-swatch"
                                onClick={() => this.clickColorChange(item)}
                            >
                                <span style={{ background: item }}/>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    changeRibbon = (clientX) => {
        const sliderElem = document.querySelector('.color-picker-panel-ribbon');
        const { x, width } = sliderElem.getBoundingClientRect();
        const pos = clientX - x;
        const h = Math.round((pos > width ? width : pos < 0 ? 0 : pos) / width * 360);
        const s = this.state.s;
        const v = this.state.v;
        const [r, g, b] = convert.hsv.rgb([h, s, v]);
        const hex = convert.hsv.hex([h, s, v]);

        this.setState({ hex, h, r, g, b }, () => {
            this.changeColor();
        });
    }

    changeAlpha = (clientX) => {
        const sliderElem = document.querySelector('.color-picker-panel-alpha');
        const { x, width } = sliderElem.getBoundingClientRect();
        const pos = clientX - x;
        const a = Math.round((pos > width ? width : pos < 0 ? 0 : pos) / width * 100);

        this.setState({ a }, () => {
            this.changeColor();
        });
    }

    changeRibbonStart = (e) => {
        document.addEventListener('mousemove', this.changeRibbonMove);
        document.addEventListener('mouseup', this.changeRibbonEnd);
    }

    changeRibbonMove = (e) => {
        this.changeRibbon(e.clientX);
    }

    changeRibbonEnd = (e) => {
        document.removeEventListener('mousemove', this.changeRibbonMove);
        document.removeEventListener('mouseup', this.changeRibbonEnd);
    }

    changeAlphaStart = (e) => {
        document.addEventListener('mousemove', this.changeAlphaMove);
        document.addEventListener('mouseup', this.changeAlphaEnd);
    }

    changeAlphaMove = (e) => {
        this.changeAlpha(e.clientX);
    }

    changeAlphaEnd = (e) => {
        document.removeEventListener('mousemove', this.changeAlphaMove);
        document.removeEventListener('mouseup', this.changeAlphaEnd);
    }

    changeColorOnBoard = (e) => {
        const { x, y, width, height } = e.target.getBoundingClientRect();
        const posX = (e.clientX - x) / width;
        const posY = (e.clientY - y) / height;

        const h = this.state.h;
        const s = Math.round((posX > 1 ? 1 : posX < 0 ? 0 : posX) * 100);
        const v = 100 - Math.round((posY > 1 ? 1 : posY < 0 ? 0 : posY) * 100);

        const [r, g, b] = convert.hsv.rgb([h, s, v]);
        const hex = convert.hsv.hex([h, s, v]);

        this.setState({ hex, s, v, r, g, b }, () => {
            this.changeColor();
        });
    }

    changeHexOnInput = (e) => {
        this.setState({ hex: e.target.value });
    }

    hexInputBlur = () => {
        const { hex } = this.state;

        const hexStr = convert.rgb.hex(convert.hex.rgb(hex));
        const [h, s, v] = convert.hex.hsv(hex);
        const [r, g, b] = convert.hex.rgb(hex);

        this.setState({ hex: hexStr, h, s, v, r, g, b }, () => {
            this.changeColor();
        });
    }

    changeColorOnInput = (e , type, max) => {
        const colorData = {};
        let value = e.target.value;
        value = /[0-9]+/.test(value) ? value : 0;
        value = value > max ? max : value < 0 ? 0 : value;

        colorData[type] = parseInt(value, 10);

        this.setState(colorData, () => {
            const { colorType, h, s, v, r, g, b } = this.state;
            if (colorType === 'rgb') {
                const [H, S, V] = convert.hsv.rgb([r, g, b]);
                this.setState({ h: H, s: S, v: V }, () => {
                    this.changeColor();
                });
            } else {
                const [R, G, B] = convert.hsv.rgb([h, s, v]);
                this.setState({ r: R, g: G, b: B }, () => {
                    this.changeColor();
                });
            }
        });
    }

    clickColorChange = (color) => {
        const { r, g, b, a, h, s, v, hex } = colorFormat(color);
        this.setState({ r, g, b, a: a * 100, h, s, v, hex }, this.changeColor);
    }

    changeColor = () => {
        const { r, g, b, a } = this.state;
        const { onChange } = this.props;
        const colorStr = a === 100 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${a / 100})`;
        onChange && onChange(colorStr);
    }

    changeColorType = () => {
        this.setState({ colorType: this.state.colorType === 'rgb' ? 'hsb' : 'rgb' });
    }

    addGlobalColor = () => {
        const { r, g, b, a } = this.state;
        const { addGlobalColor } = this.props;
        addGlobalColor && addGlobalColor(`rgba(${r}, ${g}, ${b}, ${a / 100})`);
    }

    toggleGlobalColor = () => {
        const visible = localStorage.getItem('globalColorVisible') || '0';
        localStorage.setItem('globalColorVisible', visible === '0' ? '1' : '0');
    }

    toggleRecentColor = () => {
        const visible = localStorage.getItem('recentColorVisible') || '0';
        localStorage.setItem('recentColorVisible', visible === '0' ? '1' : '0');
    }
}

export default ColorPicker;
