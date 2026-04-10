import { useState, Fragment } from 'react';
import PublicationCard from '../../Components/PublicationCard/PublicationCard';
import pub from '../../db/publications.json';
import styles from './Publications.module.css';

function Publications() {
    
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPubs = pub.filter(card => {
        const query = searchQuery.toLowerCase();
        const titleMatch = card.title.toLowerCase().includes(query);
        const authorsMatch = card.authors.toLowerCase().includes(query);
        const conferenceMatch = card.conference ? card.conference.toLowerCase().includes(query) : false;
        const yearMatch = card.year.toString().includes(query);

        return titleMatch || authorsMatch || conferenceMatch || yearMatch;
    });

    const groupedPubs = filteredPubs.reduce((acc, pub) => {
        const year = pub.year;
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(pub);
        return acc;
    }, {});

    const sortedYears = Object.keys(groupedPubs).sort((a, b) => b - a);


    return (
        <div className={styles.container}>
            {/* Hero Header */}
            <div className={styles.heading}>
                <div className={styles.heroInner}>
                    <h1>Publications & Impact</h1>
                    <p>A collection of peer-reviewed contributions to top-tier journals and conferences, documenting our journey in advancing the frontiers of computer science.</p>
                </div>
            </div>

            {/* Overlapping Search Card */}
            <div className={styles.controls}>
                <div className={styles.search}>
                    <img src="search.svg" alt="Search Icon" className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search by title, author, or year..."
                        className={styles.searchInput}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Content List */}
            <div className={styles.pubContainer}>
                {sortedYears.map(year => (
                    <Fragment key={year}>
                        <h2 className={styles.yearHeading}>{year}</h2>
                        {groupedPubs[year].map(card => (
                            <PublicationCard
                                key={card.id}
                                title={card.title}
                                author={card.authors}
                                conference={card.conference}
                                doi={card.doi}
                            />
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default Publications;