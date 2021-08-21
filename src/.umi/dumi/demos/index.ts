// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/animation-draggable.jsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/utils/dataUtil.js?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/assets/index.less?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/animation.jsx?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/animation.less?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/basic-controlled.jsx?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/basic.jsx?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/basic.less?dumi-raw-code';
import rawCode9 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/big-data.jsx?dumi-raw-code';
import rawCode10 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/big-data-generator.js?dumi-raw-code';
import rawCode11 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/contextmenu.jsx?dumi-raw-code';
import rawCode12 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/contextmenu.less?dumi-raw-code';
import rawCode13 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/custom-switch-icon.jsx?dumi-raw-code';
import rawCode14 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/draggable-allow-drop.jsx?dumi-raw-code';
import rawCode15 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/draggable.less?dumi-raw-code';
import rawCode16 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/draggable.jsx?dumi-raw-code';
import rawCode17 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/dropdown.jsx?dumi-raw-code';
import rawCode18 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/dropdown.less?dumi-raw-code';
import rawCode19 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/dynamic.jsx?dumi-raw-code';
import rawCode20 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/funtionTitle.jsx?dumi-raw-code';
import rawCode21 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/longData.json?dumi-raw-code';
import rawCode22 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/icon.jsx?dumi-raw-code';
import rawCode23 from '!!dumi-raw-code-loader!/Users/wangliujinfu/toyshome/tree/docs/examples/icon.less?dumi-raw-code';

export default {
  'docs-animation-draggable': {
    component: require('/Users/wangliujinfu/toyshome/tree/docs/examples/animation-draggable.jsx')
      .default,
    previewerProps: {
      sources: {
        _: { jsx: rawCode1 },
        'utils/dataUtil.js': { import: './utils/dataUtil', content: rawCode2 },
        'assets/index.less': { import: '../../assets/index.less', content: rawCode3 },
      },
      dependencies: {
        react: { version: '*' },
        'rc-tree': { version: '4.1.5' },
        'react-dom': { version: '*' },
      },
      identifier: 'docs-animation-draggable',
    },
  },
  'docs-animation': {
    component: require('/Users/wangliujinfu/toyshome/tree/docs/examples/animation.jsx').default,
    previewerProps: {
      sources: {
        _: { jsx: rawCode4 },
        'assets/index.less': { import: '../../assets/index.less', content: rawCode3 },
        'animation.less': { import: './animation.less', content: rawCode5 },
      },
      dependencies: {
        react: { version: '*' },
        'rc-tree': { version: '4.1.5' },
        'react-dom': { version: '*' },
      },
      identifier: 'docs-animation',
    },
  },
  'docs-basic-controlled': {
    component: require('/Users/wangliujinfu/toyshome/tree/docs/examples/basic-controlled.jsx')
      .default,
    previewerProps: {
      sources: {
        _: { jsx: rawCode6 },
        'assets/index.less': { import: '../../assets/index.less', content: rawCode3 },
        'utils/dataUtil.js': { import: './utils/dataUtil', content: rawCode2 },
      },
      dependencies: {
        react: { version: '*' },
        'rc-dialog': { version: '8.6.0' },
        'rc-tree': { version: '4.1.5' },
        'react-dom': { version: '*' },
      },
      identifier: 'docs-basic-controlled',
    },
  },
  'docs-basic': {
    component: require('/Users/wangliujinfu/toyshome/tree/docs/examples/basic.jsx').default,
    previewerProps: {
      sources: {
        _: { jsx: rawCode7 },
        'assets/index.less': { import: '../../assets/index.less', content: rawCode3 },
        'basic.less': { import: './basic.less', content: rawCode8 },
      },
      dependencies: {
        react: { version: '*' },
        'rc-tree': { version: '4.1.5' },
        'react-dom': { version: '*' },
      },
      identifier: 'docs-basic',
    },
  },
  'docs-big-data': {
    component: require('/Users/wangliujinfu/toyshome/tree/docs/examples/big-data.jsx').default,
    previewerProps: {
      sources: {
        _: { jsx: rawCode9 },
        'big-data-generator.js': { import: './big-data-generator', content: rawCode10 },
        'utils/dataUtil.js': { import: './utils/dataUtil', content: rawCode2 },
        'assets/index.less': { import: '../../assets/index.less', content: rawCode3 },
      },
      dependencies: {
        react: { version: '16.14.0' },
        'rc-tree': { version: '4.1.5' },
        'react-dom': { version: '*' },
      },
      identifier: 'docs-big-data',
    },
  },
  'docs-contextmenu': {
    component: require('/Users/wangliujinfu/toyshome/tree/docs/examples/contextmenu.jsx').default,
    previewerProps: {
      sources: {
        _: { jsx: rawCode11 },
        'contextmenu.less': { import: './contextmenu.less', content: rawCode12 },
        'assets/index.less': { import: '../../assets/index.less', content: rawCode3 },
      },
      dependencies: {
        react: { version: '*' },
        'react-dom': { version: '*' },
        'rc-tooltip': { version: '4.2.3' },
        'rc-tree': { version: '4.1.5' },
      },
      identifier: 'docs-contextmenu',
    },
  },
  'docs-custom-switch-icon': {
    component: require('/Users/wangliujinfu/toyshome/tree/docs/examples/custom-switch-icon.jsx')
      .default,
    previewerProps: {
      sources: {
        _: { jsx: rawCode13 },
        'assets/index.less': { import: '../../assets/index.less', content: rawCode3 },
      },
      dependencies: {
        react: { version: '*' },
        'rc-tree': { version: '4.1.5' },
        'react-dom': { version: '*' },
      },
      identifier: 'docs-custom-switch-icon',
    },
  },
  'docs-draggable-allow-drop': {
    component: require('/Users/wangliujinfu/toyshome/tree/docs/examples/draggable-allow-drop.jsx')
      .default,
    previewerProps: {
      sources: {
        _: { jsx: rawCode14 },
        'utils/dataUtil.js': { import: './utils/dataUtil', content: rawCode2 },
        'draggable.less': { import: './draggable.less', content: rawCode15 },
        'assets/index.less': { import: '../../assets/index.less', content: rawCode3 },
      },
      dependencies: {
        react: { version: '*' },
        'rc-tree': { version: '4.1.5' },
        'react-dom': { version: '*' },
      },
      identifier: 'docs-draggable-allow-drop',
    },
  },
  'docs-draggable': {
    component: require('/Users/wangliujinfu/toyshome/tree/docs/examples/draggable.jsx').default,
    previewerProps: {
      sources: {
        _: { jsx: rawCode16 },
        'utils/dataUtil.js': { import: './utils/dataUtil', content: rawCode2 },
        'draggable.less': { import: './draggable.less', content: rawCode15 },
        'assets/index.less': { import: '../../assets/index.less', content: rawCode3 },
      },
      dependencies: {
        react: { version: '*' },
        'rc-tree': { version: '4.1.5' },
        'react-dom': { version: '*' },
      },
      identifier: 'docs-draggable',
    },
  },
  'docs-dropdown': {
    component: require('/Users/wangliujinfu/toyshome/tree/docs/examples/dropdown.jsx').default,
    previewerProps: {
      sources: {
        _: { jsx: rawCode17 },
        'utils/dataUtil.js': { import: './utils/dataUtil', content: rawCode2 },
        'dropdown.less': { import: './dropdown.less', content: rawCode18 },
        'assets/index.less': { import: '../../assets/index.less', content: rawCode3 },
      },
      dependencies: {
        react: { version: '*' },
        'rc-trigger': { version: '5.2.10' },
        'rc-tree': { version: '4.1.5' },
        'react-dom': { version: '*' },
      },
      identifier: 'docs-dropdown',
    },
  },
  'docs-dynamic': {
    component: require('/Users/wangliujinfu/toyshome/tree/docs/examples/dynamic.jsx').default,
    previewerProps: {
      sources: {
        _: { jsx: rawCode19 },
        'assets/index.less': { import: '../../assets/index.less', content: rawCode3 },
      },
      dependencies: {
        react: { version: '*' },
        'rc-tree': { version: '4.1.5' },
        'react-dom': { version: '*' },
      },
      identifier: 'docs-dynamic',
    },
  },
  'docs-funtiontitle': {
    component: require('/Users/wangliujinfu/toyshome/tree/docs/examples/funtionTitle.jsx').default,
    previewerProps: {
      sources: {
        _: { jsx: rawCode20 },
        'assets/index.less': { import: '../../assets/index.less', content: rawCode3 },
        'animation.less': { import: './animation.less', content: rawCode5 },
        'longData.json': { import: './longData.json', content: rawCode21 },
      },
      dependencies: {
        react: { version: '*' },
        'rc-tree': { version: '4.1.5' },
        'react-dom': { version: '*' },
      },
      identifier: 'docs-funtiontitle',
    },
  },
  'docs-icon': {
    component: require('/Users/wangliujinfu/toyshome/tree/docs/examples/icon.jsx').default,
    previewerProps: {
      sources: {
        _: { jsx: rawCode22 },
        'assets/index.less': { import: '../../assets/index.less', content: rawCode3 },
        'icon.less': { import: './icon.less', content: rawCode23 },
      },
      dependencies: {
        react: { version: '*' },
        classnames: { version: '2.3.1' },
        'rc-tree': { version: '4.1.5' },
        'react-dom': { version: '*' },
      },
      identifier: 'docs-icon',
    },
  },
};
