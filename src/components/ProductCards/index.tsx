import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const ProductList = [
    {
        title: 'Fast2',
        icon: '🚀',
        description: 'Plateforme de migration documentaire pour transformer et migrer vos documents vers différents systèmes',
        link: '/docs/fast2/v2025/getting-started',
        color: '#fd79a8'
    },
    {
        title: 'FlowerDocs',
        icon: '🌸',
        description: 'Solution de gestion électronique de documents (GED) pour organiser, gérer et exploiter vos contenus documentaires',
        link: '/docs/flower/v2025',
        color: '#6c5ce7'
    },
    {
        title: 'ARender',
        icon: '📄',
        description: 'Visualiseur de documents haute performance pour afficher et annoter tous types de documents',
        link: '/docs/arender',
        color: '#00b894'
    },
    {
        title: 'Uxopian AI',
        icon: '🤖',
        description: 'Framework complet pour intégrer facilement des fonctionnalités d\'IA puissantes dans vos applications d\'entreprise',
        link: '/docs/uxopian-ai',
        color: '#3A3A8D'
    }
];

function ProductCard({ title, icon, description, link, color }) {
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

export default function ProductCards() {
    return (
        <section className={styles.productsSection}>
            <div className="container">
                <h1 className={styles.mainTitle}>Documentation UXO</h1>
                <p className={styles.subtitle}>Découvrez nos solutions documentaires et d'intelligence artificielle complètes.</p>

                <div className={styles.cardsGrid}>
                    {ProductList.map((props, idx) => (
                        <ProductCard key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}