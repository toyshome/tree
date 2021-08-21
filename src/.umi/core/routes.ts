// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/wangliujinfu/toyshome/tree/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
    {
      path: '/~demos/:uuid',
      layout: false,
      wrappers: [
        require('/Users/wangliujinfu/toyshome/tree/node_modules/@umijs/preset-dumi/lib/theme/layout')
          .default,
      ],
      component: (props) => {
        const {
          default: getDemoRenderArgs,
        } = require('/Users/wangliujinfu/toyshome/tree/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        const renderArgs = getDemoRenderArgs(props, demos);

        // for listen prefers-color-schema media change in demo single route
        usePrefersColor();

        switch (renderArgs.length) {
          case 1:
            // render demo directly
            return renderArgs[0];

          case 2:
            // render demo with previewer
            return React.createElement(Previewer, renderArgs[0], renderArgs[1]);

          default:
            return `Demo ${props.match.params.uuid} not found :(`;
        }
      },
    },
    {
      path: '/_demos/:uuid',
      redirect: '/~demos/:uuid',
    },
    {
      __dumiRoot: true,
      layout: false,
      path: '/',
      wrappers: [
        require('/Users/wangliujinfu/toyshome/tree/node_modules/@umijs/preset-dumi/lib/theme/layout')
          .default,
        require('/Users/wangliujinfu/toyshome/tree/node_modules/dumi-theme-default/es/layout.js')
          .default,
      ],
      routes: [
        {
          path: '/changelog',
          component: require('/Users/wangliujinfu/toyshome/tree/docs/changelog.md').default,
          exact: true,
          meta: {
            filePath: 'docs/changelog.md',
            updatedTime: 1612249025000,
            slugs: [
              {
                depth: 1,
                value: 'Changelog',
                heading: 'changelog',
              },
              {
                depth: 2,
                value: '3.2.0 2020-05-08',
                heading: '320-2020-05-08',
              },
              {
                depth: 2,
                value: '2.1.0 / 2019-04-28',
                heading: '210--2019-04-28',
              },
              {
                depth: 2,
                value: '2.0.0 / 2019-04-26',
                heading: '200--2019-04-26',
              },
              {
                depth: 2,
                value: '1.11.5 / 2018-04-19',
                heading: '1115--2018-04-19',
              },
              {
                depth: 2,
                value: '1.10.0 / 2018-04-17',
                heading: '1100--2018-04-17',
              },
              {
                depth: 2,
                value: '1.9.0 / 2018-04-09',
                heading: '190--2018-04-09',
              },
              {
                depth: 2,
                value: '1.8.0 / 2018-03-29',
                heading: '180--2018-03-29',
              },
              {
                depth: 2,
                value: '1.4.0 / 2016-10-24',
                heading: '140--2016-10-24',
              },
              {
                depth: 2,
                value: '1.3.0 / 2016-04-15',
                heading: '130--2016-04-15',
              },
              {
                depth: 2,
                value: '1.2.1 / 2016-04-08',
                heading: '121--2016-04-08',
              },
              {
                depth: 2,
                value: '1.2.0 / 2016-04-06',
                heading: '120--2016-04-06',
              },
              {
                depth: 2,
                value: '1.1.0 / 2016-01-25',
                heading: '110--2016-01-25',
              },
              {
                depth: 2,
                value: '1.0.x / 2016-01-15',
                heading: '10x--2016-01-15',
              },
              {
                depth: 2,
                value: '0.26.x / 2016-01-13',
                heading: '026x--2016-01-13',
              },
              {
                depth: 2,
                value: '0.23.x / 2015-12-31',
                heading: '023x--2015-12-31',
              },
              {
                depth: 2,
                value: '0.22.x / 2015-12-30',
                heading: '022x--2015-12-30',
              },
              {
                depth: 2,
                value: '0.21.x / 2015-12-25',
                heading: '021x--2015-12-25',
              },
              {
                depth: 2,
                value: '0.20.0 / 2015-12-01',
                heading: '0200--2015-12-01',
              },
              {
                depth: 2,
                value: '0.18.0 / 2015-10-23',
                heading: '0180--2015-10-23',
              },
              {
                depth: 2,
                value: '0.17.0 / 2015-10-14',
                heading: '0170--2015-10-14',
              },
              {
                depth: 2,
                value: '0.9.5 / 2015-05-26',
                heading: '095--2015-05-26',
              },
            ],
            title: 'Changelog',
          },
          title: 'Changelog',
        },
        {
          path: '/',
          component: require('/Users/wangliujinfu/toyshome/tree/docs/index.md').default,
          exact: true,
          meta: {
            filePath: 'docs/index.md',
            updatedTime: 1612249025000,
            title: 'rc-tree',
            slugs: [
              {
                depth: 1,
                value: 'rc-tree',
                heading: 'rc-tree',
              },
              {
                depth: 2,
                value: 'Screenshots',
                heading: 'screenshots',
              },
              {
                depth: 2,
                value: 'Feature',
                heading: 'feature',
              },
              {
                depth: 2,
                value: 'Example',
                heading: 'example',
              },
              {
                depth: 2,
                value: 'Install',
                heading: 'install',
              },
              {
                depth: 2,
                value: 'Usage',
                heading: 'usage',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Tree props',
                heading: 'tree-props',
              },
              {
                depth: 3,
                value: 'TreeNode props',
                heading: 'treenode-props',
              },
              {
                depth: 2,
                value: 'Note',
                heading: 'note',
              },
              {
                depth: 2,
                value: 'Development',
                heading: 'development',
              },
              {
                depth: 2,
                value: 'Test Case',
                heading: 'test-case',
              },
              {
                depth: 2,
                value: 'Coverage',
                heading: 'coverage',
              },
              {
                depth: 2,
                value: 'License',
                heading: 'license',
              },
              {
                depth: 2,
                value: 'Other tree views',
                heading: 'other-tree-views',
              },
            ],
          },
          title: 'rc-tree',
        },
        {
          path: '/demo/animation-draggable',
          component: require('/Users/wangliujinfu/toyshome/tree/docs/demo/animation-draggable.md')
            .default,
          exact: true,
          meta: {
            filePath: 'docs/demo/animation-draggable.md',
            updatedTime: 1612249025000,
            slugs: [
              {
                depth: 2,
                value: 'animation-draggable',
                heading: 'animation-draggable',
              },
            ],
            title: 'animation-draggable',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'animation-draggable',
        },
        {
          path: '/demo/animation',
          component: require('/Users/wangliujinfu/toyshome/tree/docs/demo/animation.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/animation.md',
            updatedTime: 1612249025000,
            slugs: [
              {
                depth: 2,
                value: 'animation',
                heading: 'animation',
              },
            ],
            title: 'animation',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'animation',
        },
        {
          path: '/demo/basic-controlled',
          component: require('/Users/wangliujinfu/toyshome/tree/docs/demo/basic-controlled.md')
            .default,
          exact: true,
          meta: {
            filePath: 'docs/demo/basic-controlled.md',
            updatedTime: 1612249025000,
            slugs: [
              {
                depth: 2,
                value: 'basic-controlled',
                heading: 'basic-controlled',
              },
            ],
            title: 'basic-controlled',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'basic-controlled',
        },
        {
          path: '/demo/basic',
          component: require('/Users/wangliujinfu/toyshome/tree/docs/demo/basic.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/basic.md',
            updatedTime: 1612249025000,
            slugs: [
              {
                depth: 2,
                value: 'basic',
                heading: 'basic',
              },
            ],
            title: 'basic',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'basic',
        },
        {
          path: '/demo/big-data',
          component: require('/Users/wangliujinfu/toyshome/tree/docs/demo/big-data.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/big-data.md',
            updatedTime: 1612249025000,
            slugs: [
              {
                depth: 2,
                value: 'big-data',
                heading: 'big-data',
              },
            ],
            title: 'big-data',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'big-data',
        },
        {
          path: '/demo/contextmenu',
          component: require('/Users/wangliujinfu/toyshome/tree/docs/demo/contextmenu.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/contextmenu.md',
            updatedTime: 1612249025000,
            slugs: [
              {
                depth: 2,
                value: 'contextmenu',
                heading: 'contextmenu',
              },
            ],
            title: 'contextmenu',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'contextmenu',
        },
        {
          path: '/demo/custom-switch-icon',
          component: require('/Users/wangliujinfu/toyshome/tree/docs/demo/custom-switch-icon.md')
            .default,
          exact: true,
          meta: {
            filePath: 'docs/demo/custom-switch-icon.md',
            updatedTime: 1612249025000,
            slugs: [
              {
                depth: 2,
                value: 'custom-switch-icon',
                heading: 'custom-switch-icon',
              },
            ],
            title: 'custom-switch-icon',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'custom-switch-icon',
        },
        {
          path: '/demo/draggable-allow-drop',
          component: require('/Users/wangliujinfu/toyshome/tree/docs/demo/draggable-allow-drop.md')
            .default,
          exact: true,
          meta: {
            filePath: 'docs/demo/draggable-allow-drop.md',
            updatedTime: 1612249025000,
            slugs: [
              {
                depth: 2,
                value: 'draggable-allow-drop',
                heading: 'draggable-allow-drop',
              },
            ],
            title: 'draggable-allow-drop',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'draggable-allow-drop',
        },
        {
          path: '/demo/draggable',
          component: require('/Users/wangliujinfu/toyshome/tree/docs/demo/draggable.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/draggable.md',
            updatedTime: 1612249025000,
            slugs: [
              {
                depth: 2,
                value: 'draggable',
                heading: 'draggable',
              },
            ],
            title: 'draggable',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'draggable',
        },
        {
          path: '/demo/dropdown',
          component: require('/Users/wangliujinfu/toyshome/tree/docs/demo/dropdown.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/dropdown.md',
            updatedTime: 1612249025000,
            slugs: [
              {
                depth: 2,
                value: 'dropdown',
                heading: 'dropdown',
              },
            ],
            title: 'dropdown',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'dropdown',
        },
        {
          path: '/demo/dynamic',
          component: require('/Users/wangliujinfu/toyshome/tree/docs/demo/dynamic.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/dynamic.md',
            updatedTime: 1612249025000,
            slugs: [
              {
                depth: 2,
                value: 'dynamic',
                heading: 'dynamic',
              },
            ],
            title: 'dynamic',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'dynamic',
        },
        {
          path: '/demo/funtion-title',
          component: require('/Users/wangliujinfu/toyshome/tree/docs/demo/funtionTitle.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/funtionTitle.md',
            updatedTime: 1612249025000,
            slugs: [
              {
                depth: 2,
                value: 'funtionTitle',
                heading: 'funtiontitle',
              },
            ],
            title: 'funtionTitle',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'funtionTitle',
        },
        {
          path: '/demo/icon',
          component: require('/Users/wangliujinfu/toyshome/tree/docs/demo/icon.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/icon.md',
            updatedTime: 1612249025000,
            slugs: [
              {
                depth: 2,
                value: 'icon',
                heading: 'icon',
              },
            ],
            title: 'icon',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'icon',
        },
        {
          path: '/demo',
          meta: {},
          exact: true,
          redirect: '/demo/animation',
        },
      ],
      title: 'rc-tree',
      component: (props) => props.children,
    },
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
