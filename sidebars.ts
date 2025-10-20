import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Documentation générale
  mainSidebar: [
    'index',
  ],

  // Fast2 v2025 documentation sidebar
  fast2v2025Sidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'fast2/v2025/getting-started/index',
        'fast2/v2025/getting-started/installation',
        'fast2/v2025/getting-started/authentication',
        'fast2/v2025/getting-started/create-workflow',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      collapsed: true,
      items: [
        'fast2/v2025/components/index',
        'fast2/v2025/components/broker',
        'fast2/v2025/components/worker',
        'fast2/v2025/components/database',
        'fast2/v2025/components/dashboards',
      ],
    },
    {
      type: 'category',
      label: 'Catalog',
      collapsed: true,
      items: [
        'fast2/v2025/catalog/index',
        'fast2/v2025/catalog/source',
        'fast2/v2025/catalog/contentsource',
        'fast2/v2025/catalog/loader',
        'fast2/v2025/catalog/transformer',
        'fast2/v2025/catalog/converter',
        'fast2/v2025/catalog/tool',
        'fast2/v2025/catalog/helper',
        'fast2/v2025/catalog/credentials',
        'fast2/v2025/catalog/uploadjar',
      ],
    },
    {
      type: 'category',
      label: 'Cookbooks',
      collapsed: true,
      items: [
        'fast2/v2025/cookbooks/index',
        'fast2/v2025/cookbooks/document_basics',
        'fast2/v2025/cookbooks/content_basics',
        'fast2/v2025/cookbooks/dataset_basics',
        'fast2/v2025/cookbooks/folders_basics',
        'fast2/v2025/cookbooks/punnet_basics',
        'fast2/v2025/cookbooks/data_from_filename',
        'fast2/v2025/cookbooks/from-zip-to-punnet',
        'fast2/v2025/cookbooks/content-metadata-from-s3',
        'fast2/v2025/cookbooks/upload-content-and-metadata-in-s3',
        'fast2/v2025/cookbooks/jdbc-for-sql',
        'fast2/v2025/cookbooks/csvsource_further',
        'fast2/v2025/cookbooks/js-sort-documents',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsed: true,
      items: [
        'fast2/v2025/advanced/index',
        'fast2/v2025/advanced/patterns',
        'fast2/v2025/advanced/optimization',
        'fast2/v2025/advanced/javascript',
        'fast2/v2025/advanced/drools',
        'fast2/v2025/advanced/scheduler',
        'fast2/v2025/advanced/ui-as-https',
        'fast2/v2025/advanced/shared-objects',
        'fast2/v2025/advanced/custom-module',
      ],
    },
    {
      type: 'category',
      label: 'API',
      collapsed: true,
      items: [
        'fast2/v2025/API/index',
      ],
    },
  ],

  // Fast2 v2x documentation sidebar
  fast2v2xSidebar: [
    'fast2/v2x/index',
  ],

  // FlowerDocs v2025 documentation sidebar
  flowerv2025Sidebar: [
    'flower/v2025/index',
    {
      type: 'category',
      label: 'Installation',
      collapsed: false,
      items: [
        'flower/v2025/installation/index',
        'flower/v2025/installation/avant-de-commencer',
        'flower/v2025/installation/prerequisites',
        'flower/v2025/installation/install-process',
        'flower/v2025/installation/lancement',
        {
          type: 'category',
          label: 'Configuration',
          key: 'installation-configuration',
          items: [
            'flower/v2025/installation/configuration/configuration-gui',
            'flower/v2025/installation/configuration/configuration-arender-hmi',
            'flower/v2025/installation/configuration/configuration-core',
          ],
        },
        'flower/v2025/installation/docker',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: true,
      items: [
        'flower/v2025/concepts/index',
        'flower/v2025/concepts/getting-started',
        'flower/v2025/concepts/scope',
        {
          type: 'category',
          label: 'Classes de composants',
          items: [
            'flower/v2025/concepts/classes/overview',
            'flower/v2025/concepts/classes/references-tag',
            'flower/v2025/concepts/classes/taches',
            'flower/v2025/concepts/classes/dossier',
            'flower/v2025/concepts/classes/dossiers-virtuels',
          ],
        },
        {
          type: 'category',
          label: 'Tags',
          items: [
            'flower/v2025/concepts/tags/overview',
            'flower/v2025/concepts/tags/textuel',
            'flower/v2025/concepts/tags/liste',
            'flower/v2025/concepts/tags/conditionnel',
            'flower/v2025/concepts/tags/numerique',
            'flower/v2025/concepts/tags/date',
            'flower/v2025/concepts/tags/categories',
          ],
        },
        {
          type: 'category',
          label: 'Composants',
          items: [
            'flower/v2025/concepts/components/overview',
            'flower/v2025/concepts/components/documents',
            'flower/v2025/concepts/components/dossiers',
            'flower/v2025/concepts/components/dossiers-virtuels',
            'flower/v2025/concepts/components/taches',
          ],
        },
        {
          type: 'category',
          label: 'Recherches',
          items: [
            'flower/v2025/concepts/search/recherches',
            'flower/v2025/concepts/search/recherches-sauvegardees',
          ],
        },
        {
          type: 'category',
          label: 'Sécurité',
          items: [
            'flower/v2025/concepts/securite/identites',
            'flower/v2025/concepts/securite/authentification',
            'flower/v2025/concepts/securite/autorisation',
          ],
        },
        'flower/v2025/concepts/operation',
        'flower/v2025/concepts/historique',
        'flower/v2025/concepts/reservations',
        'flower/v2025/concepts/cas-application',
      ],
    },
    {
      type: 'category',
      label: 'APIs',
      collapsed: true,
      items: [
        'flower/v2025/apis/index',
        'flower/v2025/apis/core/index',
        'flower/v2025/apis/plugins/index',
        {
          type: 'category',
          label: 'JSAPI',
          items: [
            'flower/v2025/apis/jsapi/index',
            'flower/v2025/apis/jsapi/getting-started',
            'flower/v2025/apis/jsapi/actions',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Connecteurs',
      collapsed: true,
      items: [
        'flower/v2025/connecteurs/index',
        {
          type: 'category',
          label: 'Companion',
          items: [
            'flower/v2025/connecteurs/companion/index',
            'flower/v2025/connecteurs/companion/getting-started',
            'flower/v2025/connecteurs/companion/install',
            'flower/v2025/connecteurs/companion/config',
            'flower/v2025/connecteurs/companion/faq',
          ],
        },
        {
          type: 'category',
          label: 'Fast2',
          items: [
            'flower/v2025/connecteurs/fast2/index',
            'flower/v2025/connecteurs/fast2/getting-started',
            'flower/v2025/connecteurs/fast2/install',
          ],
        },
        'flower/v2025/connecteurs/plume/index',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      collapsed: true,
      items: [
        'flower/v2025/config/index',
        'flower/v2025/config/core/index',
        'flower/v2025/config/gui/index',
        {
          type: 'category',
          label: 'Exploitation',
          items: [
            'flower/v2025/config/exploit/index',
            'flower/v2025/config/exploit/actuator',
            'flower/v2025/config/exploit/cache',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Learn',
      collapsed: true,
      items: [
        'flower/v2025/learn/index',
        'flower/v2025/learn/concepts/index',
        'flower/v2025/learn/architecture/index',
        'flower/v2025/learn/gui-plugin/index',
        'flower/v2025/learn/security/index',
      ],
    },
  ],

  // FlowerDocs v2.8 LTS documentation sidebar
  flowerv28ltsSidebar: [
    'flower/v2.8-lts/index',
    {
      type: 'category',
      label: 'Installation',
      collapsed: true,
      items: [
        'flower/v2.8-lts/installation/index',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: true,
      items: [
        'flower/v2.8-lts/concepts/index',
      ],
    },
    {
      type: 'category',
      label: 'APIs',
      collapsed: true,
      items: [
        'flower/v2.8-lts/apis/index',
      ],
    },
    {
      type: 'category',
      label: 'Connecteurs',
      collapsed: true,
      items: [
        'flower/v2.8-lts/connecteurs/index',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      collapsed: true,
      items: [
        'flower/v2.8-lts/configuration/index',
      ],
    },
    {
      type: 'category',
      label: 'Tutoriels',
      collapsed: true,
      items: [
        'flower/v2.8-lts/tutoriels/index',
      ],
    },
  ],

  // ARender v2025 documentation sidebar
  arenderv2025Sidebar: [
    {
      type: 'autogenerated',
      dirName: 'arender/v2025',
    },
  ],

  // ARender v4 documentation sidebar  
  arenderv4Sidebar: [
    {
      type: 'autogenerated',
      dirName: 'arender/v4',
    },
  ],

  // ARender v4.3 documentation sidebar
  arenderv43Sidebar: [
    {
      type: 'autogenerated',
      dirName: 'arender/v4.3',
    },
  ],

  // ARender documentation sidebar (nouvelle structure)
  arenderSidebar: [
    'arender/index',
    {
      type: 'category',
      label: "Qu'est ce qu'ARender ?",
      collapsed: false,
      items: [
        'arender/what-is/index',
        'arender/what-is/vue-ensemble',
        'arender/what-is/introduction',
        'arender/what-is/fonctionnalites',
        'arender/what-is/connecteurs-ged',
        'arender/what-is/supported-file-format',
        'arender/what-is/annotations-supportees',
        'arender/what-is/navigateurs-supportes',
        'arender/what-is/nomenclature-versions',
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      key: 'arender-installation-main',
      collapsed: true,
      items: [
        'arender/installation/index',
        {
          type: 'category',
          label: 'Mode classique (Non-Docker)',
          items: [
            'arender/installation/classique/vue-ensemble',
            {
              type: 'category',
              label: 'Rendition',
              items: [
                'arender/installation/classique/rendition/vue-ensemble',
                'arender/installation/classique/rendition/prerequis',
                'arender/installation/classique/rendition/installation',
                'arender/installation/classique/rendition/configuration',
                'arender/installation/classique/rendition/demarage',
                'arender/installation/classique/rendition/verification',
                'arender/installation/classique/rendition/test',
              ],
            },
            {
              type: 'category',
              label: 'Web-UI',
              items: [
                'arender/installation/classique/web-ui/vue-ensemble',
                {
                  type: 'category',
                  label: 'Installation',
                  key: 'webui-installation-guide',
                  items: [
                    'arender/installation/classique/web-ui/installation/vue-ensemble',
                  ],
                },
                'arender/installation/classique/web-ui/configuration',
                {
                  type: 'category',
                  label: 'Alfresco',
                  items: [
                    'arender/installation/classique/web-ui/alfresco/vue-ensemble',
                    'arender/installation/classique/web-ui/alfresco/in-share',
                    {
                      type: 'category',
                      label: 'In ACA',
                      items: [
                        'arender/installation/classique/web-ui/alfresco/aca/vue-ensemble',
                        'arender/installation/classique/web-ui/alfresco/aca/installation-dans-aca',
                      ],
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'IBM FileNet',
                  items: [
                    'arender/installation/classique/web-ui/ibm-filenet/vue-ensemble',
                    'arender/installation/classique/web-ui/ibm-filenet/installation-websphere',
                    'arender/installation/classique/web-ui/ibm-filenet/installation-tomcat',
                    'arender/installation/classique/web-ui/ibm-filenet/installation-spring-boot-oauth2',
                    'arender/installation/classique/web-ui/ibm-filenet/installation-icn',
                  ],
                },
                {
                  type: 'category',
                  label: 'M-Files',
                  items: [
                    'arender/installation/classique/web-ui/m-files/vue-ensemble',
                    'arender/installation/classique/web-ui/m-files/ancienne-installation',
                    'arender/installation/classique/web-ui/m-files/nouvelle-installation',
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Docker',
          items: [
            'arender/installation/docker/vue-ensemble',
            'arender/installation/docker/partie-rendition',
            'arender/installation/docker/serveur-presentation',
            'arender/installation/docker/alfresco',
            'arender/installation/docker/ibm-filenet',
            'arender/installation/docker/surveillance',
          ],
        },
        {
          type: 'category',
          label: 'Kubernetes',
          items: [
            'arender/installation/kubernetes/vue-ensemble',
            'arender/installation/kubernetes/serveur-presentation',
            'arender/installation/kubernetes/serveur-rendition',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Apprentissage',
      collapsed: true,
      items: [
        'arender/learning/index',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        'arender/guides/index',
        {
          type: 'category',
          label: 'Configurations',
          items: [
            'arender/guides/configurations/index',
            {
              type: 'category',
              label: 'Web-UI Configuration',
              key: 'arender-webui-config',
              items: [
                'arender/guides/configurations/web-ui/index',
                {
                  type: 'category',
                  label: 'Propriétés',
                  items: [
                    'arender/guides/configurations/web-ui/properties/index',
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Fonctionnalités',
      collapsed: true,
      items: [
        'arender/features/index',
        'arender/features/annotations',
        'arender/features/search',
        'arender/features/navigation',
      ],
    },
    {
      type: 'category',
      label: 'Développement',
      collapsed: true,
      items: [
        'arender/development/index',
        {
          type: 'category',
          label: 'APIs',
          items: [
            'arender/development/apis/index',
            {
              type: 'category',
              label: 'Web-UI APIs',
              key: 'arender-webui-apis',
              items: [
                'arender/development/apis/web-ui/index',
                {
                  type: 'category',
                  label: 'JavaScript',
                  items: [
                    'arender/development/apis/web-ui/javascript/index',
                    'arender/development/apis/web-ui/javascript/js-api',
                    'arender/development/apis/web-ui/javascript/annotation-js-api',
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Versions',
      collapsed: true,
      items: [
        'arender/releases/index',
      ],
    },
    {
      type: 'category',
      label: 'Documentation Version 4',
      collapsed: true,
      items: [
        'arender/v4/index',
      ],
    },
  ],

  // Uxopian AI documentation sidebar
  uxopianAiSidebar: [
    'uxopian-ai/index',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'uxopian-ai/getting-started/installation-guide',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      collapsed: true,
      items: [
        'uxopian-ai/architecture/overview',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: true,
      items: [
        'uxopian-ai/concepts/overview',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      collapsed: true,
      items: [
        'uxopian-ai/configuration/api-reference',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsed: true,
      items: [
        'uxopian-ai/administration/backup-recovery',
      ],
    },
    {
      type: 'category',
      label: 'How-To Guides',
      collapsed: true,
      items: [
        'uxopian-ai/how-to-guides/contributing',
        'uxopian-ai/how-to-guides/new-provider',
      ],
    },
  ],

};

export default sidebars;
