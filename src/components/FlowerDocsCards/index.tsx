import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FlowerDocsCardsList = [
    {
        title: 'Concepts',
        icon: '💡',
        description: 'Prise en main des concepts généraux de la plateforme',
        link: '/docs/flower/v2025/concepts',
        color: '#6c5ce7'
    },
    {
        title: 'Installation',
        icon: '🔧',
        description: 'Installer & déployer la plateforme',
        link: '/docs/flower/v2025/installation',
        color: '#fd79a8'
    },
    {
        title: 'FlowerDocs Academy',
        icon: '🎓',
        description: 'Découvrir FlowerDocs à travers des modules de formation',
        link: '/docs/flower/v2025/tutoriels',
        color: '#00b894'
    }
];

const GuidesList = [
    {
        title: 'Guides',
        description: 'Gérez votre plateforme à l\'aide des guides',
        items: [
            {
                icon: '🖥️',
                title: 'Interface graphique',
                description: 'Personnalisation de FlowerDocs GUI'
            },
            {
                icon: '🛠️',
                title: 'Administration',
                description: 'Administrer et configurer FlowerDocs Core'
            },
            {
                icon: '👁️',
                title: 'Exploitation',
                description: 'Exploiter & Superviser votre plateforme'
            }
        ],
        allLink: '#',
        color: '#0984e3'
    },
    {
        title: 'Développement',
        description: 'Les APIs FlowerDocs à votre disposition',
        items: [
            {
                icon: '🔌',
                title: 'Plugins JS',
                description: 'Enrichisser l\'interface avec vos propres scripts'
            },
            {
                icon: '📡',
                title: 'JSAPI',
                description: 'Enrichisser l\'interface avec vos propres scripts'
            },
            {
                icon: '⚙️',
                title: 'Core APIs',
                description: 'Consommer la couche de services de FlowerDocs Core'
            }
        ],
        allLink: '#',
        color: '#6c5ce7'
    }
];

function FlowerDocsCard({ title, icon, description, link, color }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.icon} style={{ color }}>
                    {icon}
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <div className={styles.underline} style={{ backgroundColor: color }}></div>
            </div>
            <p className={styles.cardDescription}>{description}</p>
            <Link className={styles.cardLink} to={link} style={{ color }}>
                Découvrir →
            </Link>
        </div>
    );
}

function GuidesCard({ title, description, items, allLink, color }) {
    return (
        <div className={styles.guidesCard}>
            <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <div className={styles.underline} style={{ backgroundColor: color }}></div>
            </div>
            <p className={styles.cardDescription}>{description}</p>

            <div className={styles.itemsList}>
                {items.map((item, idx) => (
                    <div key={idx} className={styles.guideItem}>
                        <div className={styles.guideIcon} style={{ color }}>
                            {item.icon}
                        </div>
                        <div className={styles.guideContent}>
                            <h4 className={styles.guideTitle}>{item.title}</h4>
                            <p className={styles.guideDescription}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Link className={styles.allLink} to={allLink} style={{ color }}>
                Tous →
            </Link>
        </div>
    );
}

export default function FlowerDocsCards() {
    return (
        <section className={styles.documentationSection}>
            <div className="container">
                <h1 className={styles.mainTitle}>Documentation</h1>
                <p className={styles.subtitle}>Consulter les différentes documentations produit.</p>

                <div className={styles.cardsGrid}>
                    {FlowerDocsCardsList.map((props, idx) => (
                        <FlowerDocsCard key={idx} {...props} />
                    ))}
                </div>

                <div className={styles.guidesGrid}>
                    {GuidesList.map((props, idx) => (
                        <GuidesCard key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}