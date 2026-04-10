import { useState, useEffect } from 'react';
import styles from './People.module.css';
import PeopleCard from '../../Components/PeopleCard/PeopleCard';
import peopleData from "../../db/people.json";

const allPeople = [...peopleData];
const ITEMS_PER_PAGE = 6; 

function People() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeBatch, setActiveBatch] = useState('All Batches');
    const [currentPage, setCurrentPage] = useState(1);

    const batches = ['All Batches', ...new Set(allPeople.map(p => p.batch))];

    const filteredPeople = allPeople.filter(person => {
        const query = searchQuery.toLowerCase();
        const batchMatch = activeBatch === 'All Batches' || person.batch === activeBatch;
        const searchMatch = person.name.toLowerCase().includes(query) || 
                            person.expertise.toLowerCase().includes(query);
        return batchMatch && searchMatch;
    });

    const totalPages = Math.ceil(filteredPeople.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedPeople = filteredPeople.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, activeBatch]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 300, behavior: 'smooth' }); // Scroll to top of results
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;
        
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            pageNumbers.push(1);
            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);
            
            if (currentPage <= 3) endPage = 4;
            else if (currentPage >= totalPages - 2) startPage = totalPages - 3;
            
            if (startPage > 2) pageNumbers.push('...');
            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }
            if (endPage < totalPages - 1) pageNumbers.push('...');
            if (totalPages > 1) pageNumbers.push(totalPages);
        }
        
        return pageNumbers.map((number, index) => (
            <button
                key={index}
                className={`${styles.pageNumber} ${number === currentPage ? styles.activePage : ''} ${number === '...' ? styles.ellipsis : ''}`}
                onClick={() => number !== '...' && handlePageChange(number)}
                disabled={number === '...'}>
                {number}
            </button>
        ));
    };

    return (
        <div className={styles.container}>
            {/* Hero Header */}
            <div className={styles.heading}>
                <div className={styles.heroInner}>
                    <h1>The Minds Behind NGCN</h1>
                    <p>A diverse collective of researchers, educators, and innovators united by a shared passion for solving the complex challenges of tomorrow's digital infrastructure.</p>
                </div>
            </div>

            {/* Overlapping Controls Section */}
            <div className={styles.controls}>
                <div className={styles.searchBar}>
                    <img src="/search.svg" alt="Search" className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search by name, expertise..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className={styles.filterButtons}>
                    {batches.map(batch => (
                        <button
                            key={batch}
                            className={`${styles.filterBtn} ${activeBatch === batch ? styles.activeBtn : ''}`}
                            onClick={() => setActiveBatch(batch)}
                        >
                            {batch}
                        </button>
                    ))}
                </div>
            </div>

            {/* People Grid */}
            <div className={styles.peopleCards}>
                {paginatedPeople.map((data, index) => (
                    <PeopleCard
                        key={index}
                        image={data.photo}
                        name={data.name}
                        description={data.description}
                        batch={data.batch}
                        domain={data.expertise}
                        email={data.email}
                    />
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className={styles.pagination}>
                    <button 
                        className={styles.paginationButton}
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        &lt; Prev
                    </button>
                    
                    <div className={styles.pageNumbers}>
                        {renderPageNumbers()}
                    </div>
                    
                    <button 
                        className={styles.paginationButton}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next &gt;
                    </button>
                </div>
            )}
        </div>
    );
}

export default People;