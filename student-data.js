    // Static student data
    const studentsData = [
      { name: "Aiden Carter", expertise: "Cloud Computing", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
      { name: "Olivia Bennett", expertise: "Network Security", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b167?w=150&h=150&fit=crop&crop=face" },
      { name: "Ethan Harper", expertise: "AI and Machine Learning", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
      { name: "Sophia Evans", expertise: "Data Science", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
      { name: "Liam Foster", expertise: "Mobile Computing", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
      { name: "Isabella Reed", expertise: "IoT", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face" },
      { name: "Noah Morgan", expertise: "Cybersecurity", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face" },
      { name: "Ava Hughes", expertise: "Software Engineering", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face" },
      { name: "Jackson Cole", expertise: "Distributed Systems", avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop&crop=face" },
      { name: "Mia Hayes", expertise: "Quantum Computing", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face" },
      { name: "Lucas Parker", expertise: "Cloud Computing", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face" },
      { name: "Chloe Bennett", expertise: "Network Security", avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face" },
      { name: "Owen Carter", expertise: "AI and Machine Learning", avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face" },
      { name: "Ella Foster", expertise: "Data Science", avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&h=150&fit=crop&crop=face" },
      { name: "Caleb Harper", expertise: "Mobile Computing", avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face" },
      { name: "Grace Hughes", expertise: "IoT", avatar: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=150&h=150&fit=crop&crop=face" },
      { name: "Henry Cole", expertise: "Cybersecurity", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face" },
      { name: "Anna Hughes", expertise: "Software Engineering", avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face" },
      { name: "Isaiah Cole", expertise: "Distributed Systems", avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=face" },
      { name: "Emma Parker", expertise: "Quantum Computing", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face" },
      { name: "Ryan Mitchell", expertise: "Blockchain Technology", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face" },
      { name: "Zoe Adams", expertise: "Computer Vision", avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face" },
      { name: "Mason Rivera", expertise: "DevOps Engineering", avatar: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?w=150&h=150&fit=crop&crop=face" },
      { name: "Lily Watson", expertise: "Natural Language Processing", avatar: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=150&h=150&fit=crop&crop=face" },
      { name: "Connor Brooks", expertise: "Robotics", avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face" },
      { name: "Harper Gray", expertise: "Edge Computing", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face" },
      { name: "Blake Torres", expertise: "High Performance Computing", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
      { name: "Avery Kim", expertise: "Bioinformatics", avatar: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=150&h=150&fit=crop&crop=face" },
      { name: "Jordan Lee", expertise: "Augmented Reality", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
      { name: "Taylor Chen", expertise: "Virtual Reality", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b167?w=150&h=150&fit=crop&crop=face" },
];

    const STUDENTS_PER_PAGE = 20;
    let currentPage = 1;
    const totalPages = Math.ceil(studentsData.length / STUDENTS_PER_PAGE);

    function renderStudents(page) {
      const startIndex = (page - 1) * STUDENTS_PER_PAGE;
      const endIndex = startIndex + STUDENTS_PER_PAGE;
      const studentsToShow = studentsData.slice(startIndex, endIndex);

      const studentsGrid = document.getElementById('students-grid');
      studentsGrid.innerHTML = '';

      studentsToShow.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.className = 'flex flex-col gap-3 text-center pb-3 opacity-0 animate-fade-in';

        studentCard.innerHTML = `
                    <div class="px-4">
                        <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full hover:scale-105 transition-transform duration-300" 
                             style="background-image: url('${student.avatar}');">
                        </div>
                    </div>
                    <div>
                        <p class="text-[#101518] text-base font-medium leading-normal">${student.name}</p>
                        <p class="text-[#5c748a] text-sm font-normal leading-normal">Expertise: ${student.expertise}</p>
                    </div>
                `;

        studentsGrid.appendChild(studentCard);

        // Trigger animation
        setTimeout(() => {
          studentCard.classList.remove('opacity-0');
          studentCard.classList.add('opacity-100');
        }, 50);
      });

      // Update showing range
      const showingStart = startIndex + 1;
      const showingEnd = Math.min(endIndex, studentsData.length);
      document.getElementById('showing-range').textContent = `${showingStart}-${showingEnd}`;
      document.getElementById('total-students').textContent = studentsData.length;
    }

    function renderPagination() {
      const pagination = document.getElementById('pagination');
      pagination.innerHTML = '';

      // Previous button
      const prevButton = document.createElement('button');
      prevButton.className = `flex size-10 items-center justify-center ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'} rounded-full transition-colors`;
      prevButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                </svg>
            `;
      prevButton.onclick = () => {
        if (currentPage > 1) {
          currentPage--;
          renderStudents(currentPage);
          renderPagination();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
      pagination.appendChild(prevButton);

      // Page numbers
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, currentPage + 2);

      // Add first page if not in range
      if (startPage > 1) {
        const firstPageButton = document.createElement('button');
        firstPageButton.className = 'text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full hover:bg-gray-100 transition-colors';
        firstPageButton.textContent = '1';
        firstPageButton.onclick = () => {
          currentPage = 1;
          renderStudents(currentPage);
          renderPagination();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pagination.appendChild(firstPageButton);

        if (startPage > 2) {
          const ellipsis = document.createElement('span');
          ellipsis.className = 'flex size-10 items-center justify-center text-[#111418]';
          ellipsis.textContent = '...';
          pagination.appendChild(ellipsis);
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `text-sm font-${i === currentPage ? 'bold' : 'normal'} leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full ${i === currentPage ? 'bg-[#dce8f3] text-white' : 'hover:bg-gray-100'} transition-colors`;
        pageButton.textContent = i;
        pageButton.onclick = () => {
          currentPage = i;
          renderStudents(currentPage);
          renderPagination();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pagination.appendChild(pageButton);
      }

      // Add last page if not in range
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          const ellipsis = document.createElement('span');
          ellipsis.className = 'flex size-10 items-center justify-center text-[#111418]';
          ellipsis.textContent = '...';
          pagination.appendChild(ellipsis);
        }

        const lastPageButton = document.createElement('button');
        lastPageButton.className = 'text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full hover:bg-gray-100 transition-colors';
        lastPageButton.textContent = totalPages;
        lastPageButton.onclick = () => {
          currentPage = totalPages;
          renderStudents(currentPage);
          renderPagination();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pagination.appendChild(lastPageButton);
      }

      // Next button
      const nextButton = document.createElement('button');
      nextButton.className = `flex size-10 items-center justify-center ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'} rounded-full transition-colors`;
      nextButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
            `;
      nextButton.onclick = () => {
        if (currentPage < totalPages) {
          currentPage++;
          renderStudents(currentPage);
          renderPagination();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
      pagination.appendChild(nextButton);
    }

    // Initialize the page
    document.addEventListener('DOMContentLoaded', () => {
      renderStudents(currentPage);
      renderPagination();
    });

