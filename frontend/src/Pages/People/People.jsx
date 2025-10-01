import { useState, useEffect } from 'react';
import styles from './People.module.css';
import PeopleCard from '../../Components/PeopleCard/PeopleCard';
import peopleData from "../../db/people.json";

const allPeople = [...peopleData];
const ITEMS_PER_PAGE = 6; // Number of items to show per page

function People() {
    // State for search, filter, and pagination
    const [searchQuery, setSearchQuery] = useState('');
    const [activeBatch, setActiveBatch] = useState('All Batches');
    const [currentPage, setCurrentPage] = useState(1);

    // 3. Get all unique batches from the data for the filter buttons
    const batches = ['All Batches', ...new Set(allPeople.map(p => p.batch))];

    // 4. Filter the people based on the active batch and search query
    const filteredPeople = allPeople.filter(person => {
        const query = searchQuery.toLowerCase();
        
        // Check if the person matches the active batch
        const batchMatch = activeBatch === 'All Batches' || person.batch === activeBatch;

        // Check if the person matches the search query (name or expertise)
        const searchMatch = person.name.toLowerCase().includes(query) || 
                            person.expertise.toLowerCase().includes(query);

        return batchMatch && searchMatch;
    });

    // Calculate pagination
    const totalPages = Math.ceil(filteredPeople.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedPeople = filteredPeople.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Reset to first page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, activeBatch]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5; // Maximum number of page numbers to show
        
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            // Always show first page
            pageNumbers.push(1);
            
            // Calculate start and end of the middle section
            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);
            
            // Adjust if we're near the start or end
            if (currentPage <= 3) {
                endPage = 4;
            } else if (currentPage >= totalPages - 2) {
                startPage = totalPages - 3;
            }
            
            // Add ellipsis and middle pages
            if (startPage > 2) pageNumbers.push('...');
            
            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }
            
            // Add ellipsis and last page
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
            <div className={styles.heading}>
                <h1>People</h1>
                <p>Meet the brilliant minds driving innovation in next-generation computing and networking</p>
            </div>

            {/* 5. Add the new search and filter controls */}
            <div className={styles.controls}>
                <div className={styles.searchBar}>
                    <img src="/search.svg" alt="Search" className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search by name, expertise"
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

            {/* 6. Map over the paginated people */}
            <div className={styles.peopleCards}>
                {paginatedPeople.map((data, index) => (
                    <PeopleCard
                        key={index} // It's better to use a unique ID from your data if available
                        image={data.photo}
                        name={data.name}
                        description={data.description}
                        batch={data.batch}
                        domain={data.expertise}
                        email={data.email}
                    />
                ))}
            </div>

            {/* Pagination Controls */}
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