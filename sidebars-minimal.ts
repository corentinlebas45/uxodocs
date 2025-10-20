import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Configuration minimale des sidebars pour tester le nouveau système
 */
const sidebars: SidebarsConfig = {
    // Documentation principale
    mainSidebar: [
        'index',
        'intro',
    ],

    // ARender documentation
    arenderSidebar: [
        'arender/index',
        {
            type: 'category',
            label: 'Installation',
            collapsed: false,
            items: [
                'arender/installation/index',
            ],
        },
        {
            type: 'category',
            label: 'Configuration',
            collapsed: false,
            items: [
                'arender/configuration/index',
            ],
        },
    ],

    // Fast2 documentation
    fast2Sidebar: [
        'fast2/index',
        {
            type: 'category',
            label: 'Getting Started',
            collapsed: false,
            items: [
                'fast2/getting-started/index',
                'fast2/getting-started/installation',
                'fast2/getting-started/authentication',
            ],
        },
    ],

    // Flower documentation
    flowerSidebar: [
        'flower/index',
        {
            type: 'category',
            label: 'Installation',
            collapsed: false,
            items: [
                'flower/installation/index',
            ],
        },
    ],

    // Uxopian AI documentation
    uxopianAiSidebar: [
        'uxopian-ai/index',
    ],
};

export default sidebars;