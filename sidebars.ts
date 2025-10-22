import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Configuration minimale des sidebars pour tester le nouveau système
 */
const sidebars: SidebarsConfig = {
  // Keep only the intro / index entries that actually exist
  mainSidebar: ['intro', 'arender/index', 'fast2/index', 'flower/index', 'uxopian-ai/index'],
  arenderSidebar: ['arender/index'],
  fast2Sidebar: ['fast2/index'],
  flowerSidebar: ['flower/index'],
  uxopianAiSidebar: ['uxopian-ai/index'],
};

export default sidebars;