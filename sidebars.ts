import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Configuration minimale des sidebars pour tester le nouveau système
 */
const sidebars: SidebarsConfig = {
  // Keep only the index for each documentation section
  mainSidebar: ['index'],
  arenderSidebar: ['arender/index'],
  fast2Sidebar: ['fast2/index'],
  flowerSidebar: ['flower/index'],
  uxopianAiSidebar: ['uxopian-ai/index'],
};

export default sidebars;